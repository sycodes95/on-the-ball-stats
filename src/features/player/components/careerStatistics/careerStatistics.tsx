import { useActionData } from "react-router-dom";
import { Player } from "../../../../types/types";
import { useEffect } from "react";

type CareerStatisticsProps = {
  playerDetails: Player;
}

function CareerStatistics ({ playerDetails } : CareerStatisticsProps) {
  
  return (
    <div className="flex flex-col w-full gap-4">
      <div className="flex items-center h-8">
        <span className="text-xl font-semibold font-display">CAREER STATISTICS</span>
      </div>
      <table>
        <thead>
          <tr className="h-12 text-left text-stone-500">
            <th className="w-60">League</th>
            <th>Team</th>
            <th className="w-12 text-center">Apps</th>
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
            <tr className="h-12">
              <td>
                <div className="flex items-center gap-1">
                  <img className="object-contain w-6 h-6" src={stats.league.logo} alt="" />
                  <span>{stats.league.name}</span>
                </div>
              </td>
              <td>
                <div className="flex items-center gap-1">
                  <img className="w-6 h-6" src={stats.team.logo} alt="" />
                  <span>{stats.team.name}</span>
                </div>
              </td>
              <td className="text-center">{stats.games.appearences}</td>
              <td className="text-center">{stats.goals.total}</td>
              <td className="text-center">{stats.goals.assists}</td>
              <td className="text-center">{stats.cards.yellow}</td>
              <td className="text-center">{stats.cards.red}</td>
              <td className="text-center">{Number(stats.games.rating).toFixed(1)}</td>

            </tr>
          ))
          }
          
        </tbody>
      </table>
    </div>
  )
}

export default CareerStatistics;