import { season } from "../../../constants/season"
import { top5Leagues } from "../../../constants/top5Leagues"
import { TeamStanding } from "../../league/types/types";
import { getLeagueTeamStandingsWithLeague } from "./getLeagueTeamStandingsWithLeague";

export const getTopTeamsFromTop5Leagues = async () => {
  const topTeams = await Promise.all(
    top5Leagues.map(async (league) => {
      const data = await getLeagueTeamStandingsWithLeague(league.id, season)
      if(data && data.standings.length > 0) {
        data.standings[0] = data.standings[0]
        .sort((a: TeamStanding, b: TeamStanding) => a.rank - b.rank)
        .slice(0, 4)
        return data
      }
      return null
    })
  );

  const topTeamsWithoutNull = topTeams.filter(team => team !== null)
  return topTeamsWithoutNull.length > 0 ? topTeamsWithoutNull : []
}