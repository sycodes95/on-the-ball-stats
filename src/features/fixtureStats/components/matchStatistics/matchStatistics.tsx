import { useSelector } from "react-redux";
import { FixtureStatistics } from "../../../../types/types";
import { translateMatchStatisticTypes } from "../../constants/constants";
import { hasFixtureStarted } from "../../utils/hasFixtureStarted";
import { RootState } from "../../../../store/store";

type MatchStatisticsProps = {
  homeTeamStatistics: FixtureStatistics;
  awayTeamStatistics: FixtureStatistics;
}


function MatchStatistics ({homeTeamStatistics, awayTeamStatistics} : MatchStatisticsProps) {

  const { fixture } = useSelector((state : RootState) => state.fixtureStatsSlice)
  const fixtureHasStatistics = fixture && fixture.statistics && fixture.statistics.length > 0;
  return(
    <div className="flex flex-col items-center justify-center w-full h-full gap-8 rounded-md text-primary border-slate-300 ">
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
        <div className="flex justify-center">
          <img className="object-contain w-12 h-12 " src={fixture.teams.home.logo} alt="" />
        </div>

        <div className="flex items-center justify-center">

          <span className="font-bold">Match Statistics</span>
        </div>

        <div className="flex items-center justify-center">
          <img className="object-contain w-12 h-12" src={fixture.teams.away.logo} alt="" />
        </div>
      </div>
      
      <div className="grid justify-center w-full grid-cols-3">
        
        
        <div className="flex flex-col items-center gap-4">
        {
        homeTeamStatistics.statistics.map((stats, index) => (
          <div className={` font-semibold shadow-md shadow-slate-300 
          ${stats.value > awayTeamStatistics.statistics[index].value && 'text-emerald-600'}
          ${stats.value === awayTeamStatistics.statistics[index].value && 'text-primary'}
          flex items-center justify-center w-12 h-6 border rounded-lg border-gray-300`} key={index}>
            {stats.value ? stats.value : 0}
          </div>
        ))
        }
        </div>
        <div className="flex flex-col items-center gap-4 ">
        {
        homeTeamStatistics.statistics.map((stats, index) => (
          <div className="flex items-center justify-center w-full h-6" key={index}>
            <div className="flex items-center w-full h-0 border-b border-slate-300"></div>
            <span className="p-2 min-w-max">{translateMatchStatisticTypes[stats.type] ? translateMatchStatisticTypes[stats.type] : stats.type}</span>
            <div className="flex items-center w-full h-0 border-b border-slate-300"></div>

          </div>
        ))
        }
        </div>

        <div className="flex flex-col items-center gap-4">
        {
        awayTeamStatistics.statistics.map((stats, index) => (
          <div className={` font-semibold shadow-md shadow-slate-300
          ${stats.value > homeTeamStatistics.statistics[index].value && 'text-emerald-600'}
          ${stats.value === homeTeamStatistics.statistics[index].value && 'text-primary'}
          flex items-center justify-center w-12 h-6 border rounded-lg border-gray-300`} key={index}>
            {stats.value ? stats.value : 0}
          </div>
        ))
        }
        </div>
        
      
      </div>
      </>
      :
      <div></div>
      }
      </>
      
      }
    
      
    </div>
  )
}

export default MatchStatistics;