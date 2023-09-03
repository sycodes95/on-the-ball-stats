import { useSelector } from "react-redux";
import { FixtureStatistics } from "../../../../types/types";
import { translateMatchStatisticTypes } from "../../constants/constants";
import { hasFixtureStarted } from "../../utils/hasFixtureStarted";
import { RootState } from "../../../../store/store";
import { Link } from "react-router-dom";
import { getURLFriendlyString } from "../../../../utils/getURLFriendlyString";
import TeamLink from "../../../../components/links/teamLink";

type MatchStatisticsProps = {
  homeTeamStatistics: FixtureStatistics;
  awayTeamStatistics: FixtureStatistics;
}


function MatchStatistics ({homeTeamStatistics, awayTeamStatistics} : MatchStatisticsProps) {

  const { fixture } = useSelector((state : RootState) => state.fixtureStatsSlice)
  const fixtureHasStatistics = fixture && fixture.statistics && fixture.statistics.length > 0;
  return(
    <div className="flex flex-col items-center justify-center w-full h-full max-w-3xl gap-8 rounded-md text-primary border-slate-300 ">
      {
      fixture &&
      (!hasFixtureStarted(fixture) || fixture.fixture.status.short ===  'PST' || fixture.fixture.status.short ===  'CANC') ?
      <div className="flex items-center justify-center flex-grow h-full">Match statistics will be updated once match has started.</div>
      :
      <>
      {
      fixtureHasStatistics ?
      <>
      <div className="grid w-full grid-cols-3">
        <TeamLink 
        className="flex items-center justify-center hover:opacity-70"
        teamId={fixture.teams.home.id}
        teamName={getURLFriendlyString(fixture.teams.home.name)}
        >
          <img className="object-contain w-12 h-12 " src={fixture.teams.home.logo} alt="home team logo" />
        </TeamLink>

        <div className="flex items-center justify-center">

          <span className="font-semibold">Match Statistics</span>
        </div>

        <TeamLink 
        className="flex items-center justify-center hover:opacity-70"
        teamId={fixture.teams.away.id}
        teamName={getURLFriendlyString(fixture.teams.away.name)}
        >
          <img className="object-contain w-12 h-12 " src={fixture.teams.away.logo} alt="away team logo" />
        </TeamLink>
      </div>
      
      <div className="grid justify-center w-full grid-cols-3">
        
        
        <div className="flex flex-col items-center gap-4">
        {
        homeTeamStatistics.statistics.map((stats, index) => (
          <div className={` font-semibold  
          ${stats.value > awayTeamStatistics.statistics[index].value && 'text-white bg-slate-400'}
          ${stats.value === awayTeamStatistics.statistics[index].value && 'text-primary'}
          flex items-center justify-center w-12 h-6  rounded-full border-gray-300`} key={index}>
            {stats.value ? stats.value : 0}
          </div>
        ))
        }
        </div>
        <div className="flex flex-col items-center gap-4 ">
        {
        homeTeamStatistics.statistics.map((stats, index) => (
          <div className="flex items-center justify-center w-full h-6 rounded-full" key={index}>
            {/* <div className="flex items-center w-full h-0 border-b border-slate-300"></div> */}
            <span className="p-2 min-w-max">{translateMatchStatisticTypes[stats.type] ? translateMatchStatisticTypes[stats.type] : stats.type}</span>
            {/* <div className="flex items-center w-full h-0 border-b border-slate-300"></div> */}

          </div>
        ))
        }
        </div>

        <div className="flex flex-col items-center gap-4">
        {
        awayTeamStatistics.statistics.map((stats, index) => (
          <div className={` font-semibold  
          ${stats.value > homeTeamStatistics.statistics[index].value && 'text-white bg-slate-400'}
          ${stats.value === homeTeamStatistics.statistics[index].value && 'text-primary'}
          flex items-center justify-center w-12 h-6 rounded-full`} key={index}>
            {stats.value ? stats.value : 0}
          </div>
        ))
        }
        </div>
        
      
      </div>
      </>
      :
      <div>No statistics available for this fixure.</div>
      }
      </>
      
      }
    
      
    </div>
  )
}

export default MatchStatistics;