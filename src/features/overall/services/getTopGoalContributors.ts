import { top5Leagues } from "../../../constants/top5Leagues";
import { getLeagueTopScorers } from "../../../services/getLeagueTopScorers";
import { Player } from "../../../types/types";

export const getTopGoalContributors = async () => {
  const allTopScorers = await Promise.all(
    top5Leagues.map(async (league) => {
      const data = await getLeagueTopScorers(league.id);
      return data.response;
    })
  );

  const sortedPlayers = allTopScorers
  .flat()
  .sort((a: Player, b: Player) => 
    (b.statistics[0].goals.total + b.statistics[0].goals.assists) 
    - 
    (a.statistics[0].goals.total + a.statistics[0].goals.assists)
  );
  
  const top10Players = sortedPlayers.splice(0, 10);
  return top10Players;
}