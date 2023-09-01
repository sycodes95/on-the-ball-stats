import { season } from "../../../constants/season"
import { top5Leagues } from "../../../constants/top5Leagues"
import { getLeagueTeamStandings } from "../../../services/getLeagueTeamStandings"
import { TeamStanding } from "../../league/types/types";

export const getTopTeamsFromTop5Leagues = async () => {
  const topTeams = await Promise.all(
    top5Leagues.map(async (league) => {
      const data: TeamStanding[] = await getLeagueTeamStandings(league.id, season)
      return data
      .sort((a, b) => a.rank - b.rank)
      .splice(0, 4)
    })
  );
  console.log(topTeams);
}