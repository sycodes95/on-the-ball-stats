// import { topLeaguesAndCups } from "../../../constants/topLeaguesAndCups";
// import { getLeagueFixtures } from "../../../services/getFixturesByDate";

// export const getFixturesFromtopLeaguesAndCups = async () => {
//   const fixtures = await Promise.all(
//     topLeaguesAndCups.map(async (league) => {
//       const data = await getLeagueFixtures(league.id);
//       return data.response;
//     })
//   );
//   return fixtures
// }