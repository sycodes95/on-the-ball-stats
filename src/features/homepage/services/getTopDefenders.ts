
import { top5Leagues } from "../../../constants/top5Leagues";
import { getLeaguePlayers, getLeaguePlayersAll } from "../../../services/getLeaguePlayersAll";
import { Player } from "../../../types/types";

export const getTopDefenders = async () => {
  const allPlayers = await Promise.all(
    top5Leagues.map(async (league) => {
      const data = await getLeaguePlayersAll(league.id);
      return data;
    })
  );
  const sortedPlayers = allPlayers
  .flat()
  .sort((a: Player, b: Player) => 
    (b.statistics[0].tackles.interceptions + b.statistics[0].tackles.blocks) 
    - 
    (a.statistics[0].tackles.interceptions + a.statistics[0].tackles.blocks)
  );
  
  const top10Players = sortedPlayers.splice(0, 10);
  return top10Players;
}