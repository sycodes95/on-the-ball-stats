import { bgMain } from "../../../../constants/colors";
import { season } from "../../../../constants/season";
import { TeamStatistics } from "../../types";

type TeamSeasonStatsProps = {
  teamStatistics: TeamStatistics;
}

function TeamSeasonStats ({teamStatistics} : TeamSeasonStatsProps) {
  return (
    <div className={`${bgMain} w-full p-2 flex flex-col gap-2`}>
      <div className="flex items-center h-8 border-b border-stone-300">
        <span className="font-semibold text-black ">Season Stats</span>
      </div>
      <div className="grid grid-cols-3 gap-2 p-2">
        <div className="flex flex-col items-center gap-2 font-semibold text-blue-500">
          <span className="">Wins</span>
          <span className="w-1/2 p-2 text-lg text-center text-white bg-blue-400 rounded-2xl">{teamStatistics.fixtures.wins.total}</span>
        </div>
        <div className="flex flex-col items-center gap-2 font-semibold text-black">
          <span className="">Draws</span>
          <span className="w-1/2 p-2 text-lg text-center text-white bg-stone-400 rounded-2xl">{teamStatistics.fixtures.draws.total}</span>
        </div>
        <div className="flex flex-col items-center gap-2 font-semibold text-red-400">
          <span className="">Losses</span>
          <span className="w-1/2 p-2 text-lg text-center text-white bg-red-400 rounded-2xl">{teamStatistics.fixtures.loses.total}</span>
        </div>
      </div>
      <div className="grid grid-cols-3 gap-2 p-2">
        <div className="flex flex-col items-center gap-2 font-semibold text-black">
          <span className="">Goal Diff.</span>
          <span>{`${teamStatistics.goals.for.total.total 
            && teamStatistics.goals.against.total.total 
            && teamStatistics.goals.for.total.total - teamStatistics.goals.against.total.total}`}
          </span>
        </div>
        <div className="flex flex-col items-center gap-2 font-semibold text-black">
          <span className="">GF Avg</span>
          <span>{teamStatistics.goals.for.average.total}</span>
        </div>
        <div className="flex flex-col items-center gap-2 font-semibold text-black">
          <span className="">GA Avg</span>
          <span>{teamStatistics.goals.against.average.total}</span>
        </div>
      </div>
      
    </div>
  )

}

export default TeamSeasonStats;