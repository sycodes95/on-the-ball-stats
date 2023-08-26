
// import { top5Leagues } from "../../../constants/top5Leagues";
// import { Player } from "../../../types/types";

// export const getTopDefenders = async () => {
//   const allPlayers = await Promise.all(
//     top5Leagues.map(async (league) => {
//       const data = await getLeaguePlayersAll(league.id);
//       return data;
//     })
//   );
//   const sortedPlayers = allPlayers
//   .flat()
//   .sort((a: Player, b: Player) => 
//     (
//     (b.statistics[0].tackles.interceptions ?? 0)
//     + 
//     (b.statistics[0].tackles.blocks ?? 0)
//     ) 
//     - 
//     ((a.statistics[0].tackles.interceptions ?? 0) + (a.statistics[0].tackles.blocks ?? 0))
//   );
  
//   const top10Players = sortedPlayers.splice(0, 10);
//   return top10Players;
// }