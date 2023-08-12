import { top5Leagues } from "../../../constants/top5Leagues";
import { getLeagueTopYellows } from "../../../services/getLeagueTopYellows";
import { Player } from "../../../types/types";

export const getTopYellows = async () => {
  const allTopYellows = await Promise.all(
    top5Leagues.map(async (league) => {
      const data = await getLeagueTopYellows(league.id);
      return data.response;
    })
  );

  const sortedPlayers = allTopYellows
  .flat()
  .sort((a: Player, b: Player) => 
    (b.statistics[0].cards.yellow) - (a.statistics[0].cards.yellow)
  );
  const top10Players = sortedPlayers.splice(0, 10);
  

  return top10Players;
}