import { TeamStanding } from "../types/types";


type LeagueTeamStandingsProps = {
  leagueTeamStandings: TeamStanding[]
}
function LeagueTeamStandings ({leagueTeamStandings}: LeagueTeamStandingsProps) {
  return (
    <div className="w-full p-4">
      <p className="text-xl text-black"> LEAGUE STANDINGS</p>
    </div>
  )
}

export default LeagueTeamStandings;