import { bgMain } from "../../../../constants/colors";
import { TeamStatistics } from "../../types";

type TeamSeasonStatsProps = {
  teamStatistics: TeamStatistics;
}

function TeamSeasonStats ({teamStatistics} : TeamSeasonStatsProps) {
  return (
    <div className={`${bgMain} w-full p-2 flex flex-col gap-2`}>
      <div className="flex items-center h-8 border-b-2 shadow-lg shadow-stone-300">
        <span className="font-semibold text-stone-600">Season Stats</span>
      </div>
      <div className="flex flex-col gap-2">
        
      </div>
      
    </div>
  )

}

export default TeamSeasonStats;