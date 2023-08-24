import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getFixturesById } from "../services/getFixtureById";
import { getFixturesH2H } from "../services/getFixturesH2H";
import HeadToHeadView from "../features/fixtureStats/components/headToHeadView/headToHeadView";
import { hasFixtureStarted } from "../features/fixtureStats/utils/hasFixtureStarted";
import '../features/fixtureStats/styles.css'
import TimeLine from "../features/fixtureStats/components/timeLine/timeLine";
import MatchStatistics from "../features/fixtureStats/components/matchStatistics/matchStatistics";
import { Fixture } from "../types/types";
import LineUps from "../features/fixtureStats/components/lineUps/lineUps";
import { fixtureViewModeOptions } from "../features/fixtureStats/constants/constants";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../store/store";
import { setFixture } from "../features/fixtureStats/state/fixtureStatsSlice";
import FixtureHeader from "../components/fixtures/fixtureHeader";
import FixtureTeam from "../components/fixtures/fixtureTeam";
import FixtureStatus from "../components/fixtures/fixtureStatus";
import FixtureScore from "../components/fixtures/fixtureScore";
import { bgMain } from "../constants/colors";

function FixtureStats () {
  
  const dispatch = useDispatch()
  const { fixtureId } = useParams()

  const { fixture } = useSelector((state : RootState) => state.fixtureStatsSlice)
  const [fixtureViewMode, setFixtureViewMode ] = useState(fixtureViewModeOptions[0])
  const [headToHeadFixtures, setheadToHeadFixtures] = useState<Fixture[] | null>(null)


  useEffect(()=> {
    getFixturesById(Number(fixtureId)).then(fixture => dispatch(setFixture(fixture)));
    return () => {
      dispatch(setFixture(null));
    };
  },[])

  useEffect(()=> {
    if(fixture){
      getFixturesH2H(fixture.teams.home.id, fixture.teams.away.id).then(fixtures => {
        setheadToHeadFixtures(fixtures)
      })
    }
  },[fixture])
  
  return (
    <div className="flex flex-col w-full gap-4 p-2 text-xs text-primary">
      {
      fixture &&
      <div className={`flex flex-col w-full gap-4 p-4 rounded-2xl bg-opacity-70 ${bgMain} `}>
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

      <div className="flex h-12 gap-2 rounded-sm border-slate-300 shadow-slate-300 ">
      {
      fixtureViewModeOptions.map((option, index) => (
        <button className={`text-primary flex items-center justify-center rounded-2xl p-2 w-20 h-8 font-semibold 
        ${fixtureViewMode === option && 'bg-black text-white'}`} 
        key={index}
        onClick={()=>setFixtureViewMode(option)}>{option}</button>
      ))
      }
      </div>
      
      <div className={`flex justify-center w-full h-full pt-8 pb-8 rounded-2xl ${bgMain} `}>
      {
      fixtureViewMode === 'H2H' && fixture &&
      <HeadToHeadView headToHeadFixtures={headToHeadFixtures}/>
      }
      {
      fixtureViewMode === 'Timeline' && fixture  &&
      <TimeLine/>
      }
      {
      fixtureViewMode === 'Stats' && fixture && fixture.statistics &&
      <MatchStatistics homeTeamStatistics={fixture.statistics[0]} awayTeamStatistics={fixture.statistics[1]} />
      }
      {
      fixtureViewMode === 'Lineups' && fixture  && 
      <LineUps/>
      }
      </div>
      
    </div>
  )
}

export default FixtureStats;
