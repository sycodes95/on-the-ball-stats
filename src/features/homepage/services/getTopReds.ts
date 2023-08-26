import { top5Leagues } from "../../../constants/top5Leagues";
import { getLeagueTopReds } from "../../../services/getLeagueTopReds";
import { Player } from "../../../types/types";

export const getTopReds = async () => {
  // const season = await getLatestStartedSeason()
  const season = 2023
  const allTopReds = await Promise.all(
    top5Leagues.map(async (league) => {
      const data = await getLeagueTopReds(league.id, season);
      return data.response;
    })
  );

  const sortedPlayers = allTopReds
  .flat()
  .sort((a: Player, b: Player) => 
    (b.statistics[0].cards.red ?? 0) - (a.statistics[0].cards.red ?? 0)
  );
  const top10Players = sortedPlayers.splice(0, 10);

  return top10Players;
}