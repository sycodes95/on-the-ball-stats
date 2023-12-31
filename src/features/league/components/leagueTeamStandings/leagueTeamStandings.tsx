import { useEffect, useState } from "react";
import { TeamStanding } from "../../types/types";
import { extractRankDescriptions } from "../../utils/extractRankDescriptions";
import TableRow from "./components/tableRow";
import { bgMain } from "../../../../constants/colors";


type LeagueTeamStandingsProps = {
  leagueTeamStandings: TeamStanding[]
  leagueId: number;
  teamId?: number;
}
function LeagueTeamStandings ({leagueTeamStandings, leagueId, teamId}: LeagueTeamStandingsProps) {
  const [teams, setTeams] = useState<TeamStanding[]>([])
  const [rankDescriptions, setRankDescriptions] = useState<string[]>([])

  useEffect(()=> {
    leagueTeamStandings && setTeams(leagueTeamStandings)
    setRankDescriptions(extractRankDescriptions(leagueTeamStandings))
  },[leagueTeamStandings])

  useEffect(()=>{
  },[teams, rankDescriptions])

  
  return (
    <div className={`w-full p-2 md:min-w-max ${bgMain}`}>

      <div className="w-full overflow-auto rounded-2xl">
        <table className="w-full">
          <thead>
            <tr className="h-12 font-semibold border-b-2 shadow-md text-stone-400 shadow-stone-300">
              <th className="min-w-full p-1 text-left">TEAM</th>
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
          <tbody className="text-xs text-primary ">
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
              teamId={data.team.id}
              leagueId={leagueId}
              highlightRow={teamId && teamId === data.team.id ? true : false}
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