import { top5Leagues } from "../../../constants/top5Leagues";
import { getLeagueTopReds } from "../../../services/getLeagueTopReds";
import { Player } from "../../../types/types";

export const getTopReds = async () => {
  const allTopReds = await Promise.all(
    top5Leagues.map(async (league) => {
      const data = await getLeagueTopReds(league.id);
      return data.response;
    })
  );

  const sortedPlayers = allTopReds
  .flat()
  .sort((a: Player, b: Player) => 
    (b.statistics[0].cards.red) - (a.statistics[0].cards.red)
  );
  const top10Players = sortedPlayers.splice(0, 10);
  console.log(top10Players.map((player: Player) => {
    return { name : player.player.name , yellowCards: player.statistics[0].cards.yellow, league: player.statistics[0].league.name}
  }));

  return top10Players;
}