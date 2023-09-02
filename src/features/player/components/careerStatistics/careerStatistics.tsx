import { useActionData } from "react-router-dom";
import { Player } from "../../../../types/types";
import { useEffect } from "react";
import { bgMain } from "../../../../constants/colors";

type CareerStatisticsProps = {
  playerDetails: Player;
}

function CareerStatistics ({ playerDetails } : CareerStatisticsProps) {
  
  return (
    <div className={`flex flex-col w-full gap-4 ${bgMain} p-4`}>
      <div className="flex items-center h-8 border-b-2 border-stone-300">
        <span className="text-xl font-semibold text-black font-display">LEAGUE STATISTICS</span>
      </div>
      <div className="flex flex-col w-full overflow-x-scroll">
        <table>
          <thead>
            <tr className="h-12 text-left text-black">
              <th className="min-w-69">League</th>
              <th className="p-2">Team</th>
              <th className="w-12 text-center ">A</th>
              <th className="w-12 text-center">G</th>
              <th className="w-12 text-center">A</th>
              <th className="w-12 text-center">Y</th>
              <th className="w-12 text-center">R</th>
              <th className="w-12 text-center">Rating</th>
            </tr>
          </thead>
          <tbody>
            {
            playerDetails.statistics.map((stats, index) => (
              <tr className="h-12 font-semibold" key={index}>
                <td className="w-36">
                  <div className="flex items-center gap-1">
                    <img className="object-contain w-6 h-6" src={stats.league.logo} alt="" />
                    <span className="hidden overflow-hidden md:contents ">{stats.league.name}</span>
                  </div>
                </td>
                <td className="text-center">
                  <div className="flex items-center gap-1 p-2 min-w-100">
                    <img className="object-contain w-6 h-6" src={stats.team.logo} alt="" />
                    <span className="overflow-hidden whitespace-nowrap text-ellipsis">{stats.team.name}</span>
                  </div>
                </td>
                <td className="text-center ">{stats.games.appearences ? stats.games.appearences : 0}</td>
                <td className="text-center ">{stats.goals.total ? stats.goals.total: 0}</td>
                <td className="text-center">{stats.goals.assists ? stats.goals.assists : 0}</td>
                <td className="text-center">{stats.cards.yellow ? stats.cards.yellow : 0}</td>
                <td className="text-center">{stats.cards.red ? stats.cards.red : 0 }</td>
                <td className="text-center">{Number(stats.games.rating).toFixed(1)}</td>

              </tr>
            ))
            }
            
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default CareerStatistics;