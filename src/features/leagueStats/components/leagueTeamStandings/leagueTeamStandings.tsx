import { useEffect, useState } from "react";
import { TeamStanding } from "../../types/types";
import { extractRankDescriptions } from "../../utils/extractRankDescriptions";
import TableRow from "./components/tableRow";


type LeagueTeamStandingsProps = {
  leagueTeamStandings: TeamStanding[]
  leagueID: number;
}
function LeagueTeamStandings ({leagueTeamStandings, leagueID}: LeagueTeamStandingsProps) {
  const [teams, setTeams] = useState<TeamStanding[]>([])
  const [rankDescriptions, setRankDescriptions] = useState<string[]>([])

  useEffect(()=> {
    leagueTeamStandings && setTeams(leagueTeamStandings)
    setRankDescriptions(extractRankDescriptions(leagueTeamStandings))
  },[leagueTeamStandings])

  useEffect(()=>{
  },[teams, rankDescriptions])

  
  return (
    <div className="w-full p-4 md:min-w-max">

      <div className="w-full p-2 overflow-auto text-xl rounded-md">
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
            teams.map(data => (
              <TableRow 
              key={data.team.id} 
              description={data.description}
              rank={data.rank}
              teamLogo={data.team.logo}
              teamName={data.team.name}
              played={data.all.played}
              win={data.all.win}
              draw={data.all.draw}
              lose={data.all.lose}
              goalsFor={data.all.goals.for}
              goalsAgainst={data.all.goals.against}
              goalsDiff={data.goalsDiff}
              points={data.points}
              form={data.form}
              />
              
            ))
            }
          </tbody>
        </table>
      </div>
      
    </div>
  )
}


export default LeagueTeamStandings;