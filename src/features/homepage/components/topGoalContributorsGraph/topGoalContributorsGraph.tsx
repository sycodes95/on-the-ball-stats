import { Link } from "react-router-dom";
import ListClubImage from "../../../../components/ui/listClubImage";
import { Player } from "../../../../types/types";
import { returnContributionWidthPct } from "../../utils/returnContributionWidthPct";
import { returnSubContributionWidthPct } from "../../utils/returnSubContributionWidthPct";

type TopGoalContributorsGraphProps = {
  topGoalContributors: Player[]
}

function TopGoalContributorsGraph ({topGoalContributors}: TopGoalContributorsGraphProps) {

  return (
    <div className="flex flex-col w-full text-xs rounded-md">
      <div className="relative w-full text-2xl text-black rounded-sm font-display">
        <span>TOP PLAYERS</span>
      </div>

      <div className="flex flex-col gap-2 pt-4 rounded-md ">

      
      {
      topGoalContributors.map((player: Player, index) => {
        if(player.statistics && player.statistics[0].team && player.statistics[0].goals){
        return (
        <div className="flex items-center h-6 gap-1 text-xs border">
          <div className="flex items-center h-6 gap-2">
            <p className="w-4 text-center text-primary">{index + 1}</p>
            <ListClubImage src={player.statistics[0].team.logo}/>
            <Link className="flex items-center gap-2 hover:underline" to={`/player/${player.player.id}`}>
              <img className="object-contain w-6 h-6 rounded-full" src={player.player.photo} alt="player-photo"/>
              <div className="flex items-center w-40 h-full border-r-4 border-slate-300 whitespace-nowrap min-w-max">{player.player.name}</div>
            </Link>
          </div>
          
          <div className="relative w-full h-full overflow-hidden">
            <div className="absolute top-0 flex items-center w-0 h-full transition-all duration-500 bg-white"
            style={{width: `
            ${index === 0 ? '100%' : returnContributionWidthPct(player, topGoalContributors)}
            `}}>
              <div className="flex items-center justify-center h-full font-semibold bg-blue-300"
              style={{width: returnSubContributionWidthPct(player.statistics[0].goals.total + player.statistics[0].goals.assists, player.statistics[0].goals.total)}}> 
              {player.statistics[0].goals.total}
              </div>
              <div className="flex items-center justify-center h-full font-semibold bg-green-300"
              style={{width: returnSubContributionWidthPct(player.statistics[0].goals.total + player.statistics[0].goals.assists, player.statistics[0].goals.assists)}}> 
              {player.statistics[0].goals.assists}
              </div>

            </div>
          </div>
          <div className="items-center justify-center hidden w-8 h-full p-1 font-semibold text-white bg-orange-400 rounded-sm md:flex">
            {player.statistics[0].goals.total + player.statistics[0].goals.assists} 
          </div>
        </div>
      )}})
      }
      <div className="flex items-center gap-4 p-2">
        <div className="flex items-center gap-2">
          <p className="w-4 h-4 bg-blue-300"></p>
          <p>Goals</p>
        </div>

        <div className="flex items-center gap-2">
          <p className="w-4 h-4 bg-green-300"></p>
          <p>Assists</p>
        </div>

        <div className="items-center hidden gap-2 md:flex">
          <p className="w-4 h-4 bg-orange-400"></p>
          <p>Total Contributions</p>
        </div>
        
      </div>
    </div>
  </div>
  )
}

export default TopGoalContributorsGraph;