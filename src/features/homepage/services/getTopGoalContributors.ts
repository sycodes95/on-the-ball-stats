import { top5Leagues } from "../../../constants/top5Leagues";
import { getLeagueTopScorers } from "../../../services/getLeagueTopScorers";
import { Player } from "../../../types/types";

export const getTopGoalContributors = async () => {
  // const season = await getLatestStartedSeason()
  const season = 2023
  const allTopScorers = await Promise.all(
    top5Leagues.map(async (league) => {
      const data = await getLeagueTopScorers(league.id, season);
      return data.response;
    })
  );

  const sortedPlayers = allTopScorers
  .flat()
  .sort((a: Player, b: Player) => 
    ((b.statistics[0].goals.total ?? 0) + (b.statistics[0].goals.assists ?? 0)) 
    - 
    ((a.statistics[0].goals.total ?? 0) + (a.statistics[0].goals.assists ?? 0))
  );
  
  const top10Players = sortedPlayers.splice(0, 10);
  return top10Players;
}