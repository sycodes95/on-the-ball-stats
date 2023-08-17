import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getFixturesById } from "../services/getFixtureById";
import FixtureTeam from "../features/homepage/components/fixtures/components/fixtureTeam";
import FixtureStatus from "../features/homepage/components/fixtures/components/fixtureStatus";
import FixtureScore from "../features/homepage/components/fixtures/components/fixtureScore";
import { getFixturesH2H } from "../services/getFixturesH2H";
import FixtureHeader from "../features/homepage/components/fixtures/components/fixtureHeader";
import HeadToHeadView from "../features/fixtureStats/components/headToHeadView/headToHeadView";
import { hasFixtureStarted } from "../features/fixtureStats/utils/hasFixtureStarted";
import '../features/fixtureStats/styles.css'
import TimeLine from "../features/fixtureStats/components/timeLine/timeLine";
import MatchStatistics from "../features/fixtureStats/components/matchStatistics/matchStatistics";
import { Fixture } from "../types/types";

function FixtureStats () {
  const fixtureViewModeOptions = [
    'LINEUPS',
    'TIMELINE',
    'STATS',
    'H2H',

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
      hasFixtureStarted(fixture)
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

      <div className="flex rounded-sm border-slate-300 shadow-slate-300">
      {
      fixtureViewModeOptions.map((option, index) => (
        <button className={`p-2 border-b border-opacity-0 border-slate-400  w-20 
        ${fixtureViewMode === option && ' bg-opacity-70 border-opacity-100 font-bold'}`} 
        key={index}
        onClick={()=>setFixtureViewMode(option)}>{option}</button>
      ))
      }
      </div>
      <div className="w-full h-full pt-8 pb-8 rounded-sm border-slate-300">
      {
      fixtureViewMode === 'H2H' && fixture &&
      <HeadToHeadView headToHeadFixtures={headToHeadFixtures}/>
      }
      {
      fixtureViewMode === 'TIMELINE' && fixture  &&
      <TimeLine fixture={fixture}/>
      }
      {
      fixtureViewMode === 'STATS' && fixture && fixture.statistics &&
      <MatchStatistics fixture={fixture} homeTeamStatistics={fixture.statistics[0]} awayTeamStatistics={fixture.statistics[1]} />
      }
      </div>
      
    </div>
  )
}

export default FixtureStats;
