import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getFixturesById } from "../services/getFixtureById";
import { Fixture } from "../features/homepage/types/types";
import FixtureTeam from "../features/homepage/components/fixtures/components/fixtureTeam";
import FixtureStatus from "../features/homepage/components/fixtures/components/fixtureStatus";
import FixtureScore from "../features/homepage/components/fixtures/components/fixtureScore";
import { getFixturesH2H } from "../services/getFixturesH2H";
import FixtureHeader from "../features/homepage/components/fixtures/components/fixtureHeader";
import HeadToHeadView from "../features/fixtureStats/components/headToHeadView/headToHeadView";


function FixtureStats () {
  const fixtureViewModeOptions = [
    'HEAD TO HEAD',
    'LINE UPS',
    'STATS'
  ]

  const { fixtureId } = useParams()
  const [fixture, setFixture] = useState<Fixture | null>(null)
  const [fixtureViewMode, setFixtureViewMode ] = useState(fixtureViewModeOptions[0])
  const [headToHeadFixtures, setheadToHeadFixtures] = useState<Fixture[] | null>(null)
  useEffect(()=> {
    getFixturesById(Number(fixtureId)).then(fixture => setFixture(fixture))
  },[])

  useEffect(()=> {
    if(fixture){
      getFixturesH2H(fixture.teams.home.id, fixture.teams.away.id).then(fixtures => {
        // setheadToHeadFixtures(fixtures.sort((a:string, b:string) => new Date(b.fixture.date) - new Date(a.fixture.date)))
        setheadToHeadFixtures(fixtures)
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

      {
      fixtureViewMode === 'HEAD TO HEAD' &&
      <HeadToHeadView headToHeadFixtures={headToHeadFixtures}/>
      }
      
    </div>
  )
}

export default FixtureStats;
