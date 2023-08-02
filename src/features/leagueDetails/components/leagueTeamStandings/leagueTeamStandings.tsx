import { useEffect, useState } from "react";
import { TeamStanding } from "../../types/types";


type LeagueTeamStandingsProps = {
  leagueTeamStandings: TeamStanding[]
  leagueID: number;
}
function LeagueTeamStandings ({leagueTeamStandings, leagueID}: LeagueTeamStandingsProps) {
  const [teams, setTeams] = useState<TeamStanding[]>([])

  useEffect(()=> {
    console.log(leagueTeamStandings);
    leagueTeamStandings && setTeams(leagueTeamStandings)
  },[leagueTeamStandings])

  useEffect(()=>{
console.log(teams);
  },[teams])

  
  return (
    <div className="w-full p-4">
      <p className="text-xl text-black"> LEAGUE STANDINGS</p>

      <div className="w-full p-4 text-xl rounded-md">
        <table className="w-full">
          <thead>
            <tr className="shadow-md text-primary font-display shadow-gray-300">
              <th className="min-w-full p-1 font-bold text-left">Team</th>
              <th className="w-12">P</th>
              <th className="w-12">W</th>
              <th className="w-12">D</th>
              <th className="w-12">L</th>
              <th className="w-12">GF</th>
              <th className="w-12">GA</th>
              <th className="w-12">GD</th>
              <th className="w-12">PTS</th>
              <th className="w-32">FORM</th>
            </tr>
          </thead>
          <tbody className="text-xs text-primary">
            {
            teams.map((data, index) => (
              <tr key={data.team.id} className="hover:bg-black hover:bg-opacity-20">
                <td className="flex items-center h-8">
                  <span className="flex items-center justify-center w-6 h-full border-l-4 border-black border-opacity-25 rounded-l-sm">{data.rank}</span>
                  <img className="h-8 p-2" src={data.team.logo} alt="team-logo"/>
                  <span>{data.team.name}</span>
                </td>
                <td className="text-center">
                  <span>{data.all.played}</span>
                </td>
                <td className="text-center">
                  <span>{data.all.win}</span>
                </td>
                <td className="text-center">
                  <span>{data.all.draw}</span>
                </td>
                <td className="text-center">
                  <span>{data.all.lose}</span>
                </td>
                <td className="text-center">
                  <span>{data.all.goals.for}</span>
                </td>
                <td className="text-center">
                  <span>{data.all.goals.against}</span>
                </td>
                <td className="text-center">
                  <span>{data.goalsDiff}</span>
                </td>
                <td className="text-center">
                  <span>{data.points}</span>
                </td>
                <td className="text-center">
                  {
                  Array.from(data.form).map((result, index) => (
                    <button className={`
                    w-4 font-semibold
                    ${result.toLowerCase() === 'w' && 'text-green-500'}
                    ${result.toLowerCase() === 'l' && 'text-red-500'}
                    `}>{result}</button>
                  ))
                  }
                </td>


              </tr>
            ))
            }
          </tbody>
        </table>
      </div>
      
    </div>
  )
}


export default LeagueTeamStandings;