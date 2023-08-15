import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getFixturesById } from "../services/getFixtureById";
import { Fixture } from "../features/homepage/types/types";
import FixtureTeam from "../features/homepage/components/fixtures/components/fixtureTeam";
import FixtureStatus from "../features/homepage/components/fixtures/components/fixtureStatus";
import FixtureScore from "../features/homepage/components/fixtures/components/fixtureScore";
import { getFixturesH2H } from "../services/getFixturesH2H";
import { formatYMD } from "../utils/formatYMD";
import FixtureHeader from "../features/homepage/components/fixtures/components/fixtureHeader";
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar'
import { getFixturesTeamWinPct } from "../features/fixtureStats/utils/getFixturesTeamWinPct";
import { getFixturesDrawPct } from "../features/fixtureStats/utils/getFixturesDrawPct";


function FixtureStats () {
  const fixtureViewModeOptions = [
    'H2H',
    'LINE UPS',
    'STATS'
  ]

  const { fixtureId } = useParams()
  const [fixture, setFixture] = useState<Fixture | null>(null)
  const [fixtureViewMode, setFixtureViewMode ] = useState(fixtureViewModeOptions[0])
  const [head2HeadFixtures, setHead2HeadFixtures] = useState<Fixture[] | null>(null)
  useEffect(()=> {
    getFixturesById(Number(fixtureId)).then(fixture => setFixture(fixture))
  },[])

  useEffect(()=> {
    if(fixture){
      getFixturesH2H(fixture.teams.home.id, fixture.teams.away.id).then(fixtures => {
        // setHead2HeadFixtures(fixtures.sort((a:string, b:string) => new Date(b.fixture.date) - new Date(a.fixture.date)))
        setHead2HeadFixtures(fixtures)
      })
    }
    console.log(fixture);
  },[fixture])

  
  return (
    <div className="flex flex-col w-full gap-4 p-2 text-xs text-primary">
      <div className="text-2xl text-primary font-display">FIXTURE STATS</div>
      {
      fixture &&
      <div className="flex flex-col w-full gap-2 p-2 border rounded-sm shadow-md border-slate-300 bg-slate-300 bg-opacity-70 shadow-slate-300">
        <FixtureHeader
        leagueLogo={fixture.league.logo} 
        leagueName={fixture.league.name}
        countryFlag={fixture.league.flag}
        fixtureDate={fixture.fixture.date}
        />
        
        
        <div className="justify-center w-full h-full gap-2 fixture-grid"> 
          <FixtureTeam 
          teamLogo={fixture.teams.home.logo} 
          teamName={fixture.teams.home.name} 
          side={`home`}/>
          
          <div className="flex flex-col items-center justify-center w-full gap-2">
            <FixtureStatus  
            fixtureStatus={fixture.fixture.status} 
            fixtureDate={fixture.fixture.date} 
            fixturePenalties={fixture.score.penalty}/>
            {
            typeof fixture.goals.home === 'number' && typeof fixture.goals.away === 'number' &&
            <FixtureScore
            homeGoals={fixture.goals.home} 
            awayGoals={fixture.goals.away}/>
            }
          </div>
          
          <FixtureTeam 
          teamLogo={fixture.teams.away.logo} 
          teamName={fixture.teams.away.name} 
          side={`away`}/>
        </div>


      </div>
      }

      <div className="flex gap-2 border rounded-sm border-slate-300 w-fit">
      {
      fixtureViewModeOptions.map((option, index) => (
        <button className={`p-2 border-b-2 border-opacity-0 border-slate-300 
        ${fixtureViewMode === option && 'bg-slate-300 bg-opacity-70 border-opacity-100'}`} 
        key={index}
        onClick={()=>setFixtureViewMode(option)}>{option}</button>
      ))
      }
      </div>

      <div className="flex flex-col justify-center w-full gap-2 p-2 rounded-sm border-slate-300">

        {
        head2HeadFixtures && head2HeadFixtures.length > 0 && fixture &&
        <div className="flex items-center justify-center w-full">
          <div className="flex gap-2">
            <img className="object-contain w-12 h-12" src={fixture?.teams.home.logo} alt="" />
            <CircularProgressbar className="w-12"
            text={`${getFixturesTeamWinPct(head2HeadFixtures, fixture.teams.home.id)}%`} 
            value={getFixturesTeamWinPct(head2HeadFixtures, fixture.teams.home.id)}
            strokeWidth={12}
            styles={buildStyles({
              rotation: 0,
              textSize: '18px',
              pathTransitionDuration: 1,
              textColor: '#3e98c7',
              trailColor: '#d6d6d6',
              backgroundColor: '#3e98c7',
              pathColor: '#3e98c7'
            })}
            />

            <CircularProgressbar className="w-12"
            text={`${getFixturesDrawPct(head2HeadFixtures)}%`} 
            value={getFixturesDrawPct(head2HeadFixtures)}
            strokeWidth={12}
            styles={buildStyles({
              rotation: 0,
              textSize: '18px',
              pathTransitionDuration: 1,
              textColor: '#000000',
              trailColor: '#d6d6d6',
              backgroundColor: '#000000',
              pathColor: '#000000'
            })}
            />

            <CircularProgressbar className="w-12"
            text={`${getFixturesTeamWinPct(head2HeadFixtures, fixture.teams.away.id)}%`} 
            value={getFixturesTeamWinPct(head2HeadFixtures, fixture.teams.away.id)}
            strokeWidth={12}
            styles={buildStyles({
              rotation: 0,
              textSize: '18px',
              pathTransitionDuration: 1,
              textColor: '#000000',
              trailColor: '#d6d6d6',
              backgroundColor: '#000000',
              pathColor: '#000000'
            })}
            />
            <img className="object-contain w-12 h-12" src={fixture?.teams.away.logo} alt="" />
          </div>
        </div>
        }

        {
        head2HeadFixtures && head2HeadFixtures.length === 0 &&
        <div className="flex items-center gap-4 p-2 rounded-md shadow-lg md:gap-8 shadow-slate-300">
          No previous matches between teams.
        </div>
        }
        {
        head2HeadFixtures && head2HeadFixtures.length > 0 && fixtureViewMode === 'H2H' &&
        head2HeadFixtures.map((fixture, index) => {
          if(new Date(fixture.fixture.date) < new Date()){
            return (
              <div className="flex items-center gap-4 p-2 rounded-md shadow-lg md:gap-8 shadow-slate-300" key={index}>
                <div className="flex items-center gap-2 md:w-32">
                  <img className="object-contain w-4 h-4" src={fixture.league.logo} />
                  <span className="hidden md:flex">{fixture.league.name}</span>
                </div>

                <div className="flex items-center w-24 gap-2 md:w-32">
                  {/* <span className="">{formatYMD(new Date(fixture.fixture.date)).slice(2)}</span> */}
                  <span className="">{formatYMD(new Date(fixture.fixture.date))}</span>
                </div>

                <div className="items-center justify-center hidden gap-2 whitespace-nowrap md:flex">
                  <span className="flex justify-end min-w-fit w-44">{fixture.teams.home.name}</span>
                  <div className="flex items-center justify-center w-12 gap-1 pl-2 pr-2 font-semibold text-white rounded-md bg-slate-400">
                    <span>{fixture.goals.home}</span>  
                    <span>-</span>
                    <span>{fixture.goals.away}</span>
                  </div>
                  <span className="flex justify-start w-44 min-w-fit">{fixture.teams.away.name}</span>
                </div>

                <div className="flex items-center justify-center gap-2 whitespace-nowrap md:hidden">

                  <div className="flex flex-col items-center w-4 p-1 rounded-md bg-slate-400">
                    <span className="justify-center font-semibold text-white rounded-md">{fixture.goals.home}</span>
                    <span className="justify-center font-semibold text-white rounded-md">{fixture.goals.away}</span>
                  </div>

                  <div className="flex flex-col gap-1">
                    <span className="flex justify-start min-w-fit md:w-44">{fixture.teams.home.name}</span>
                    <span className="flex justify-start md:w-44 min-w-fit">{fixture.teams.away.name}</span>
                  </div>
                  
                </div>
                
              </div>

            )
          }

        }
          
        )
        }
      </div>
    </div>
  )
}

export default FixtureStats;

{/* <div className="flex items-center gap-4 p-2 rounded-sm shadow-lg shadow-slate-300">
          <div className="flex items-center w-32 gap-2">
            <img className="object-contain w-4 h-4" src={fixture.league.logo} />
            <span>{fixture.league.name}</span>
          </div>

          <div className="flex items-center w-32 gap-2">
            <span>{formatDMY(new Date(fixture.fixture.date))}</span>
          </div>
          
        </div> */}