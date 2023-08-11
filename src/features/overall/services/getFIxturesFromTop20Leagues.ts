import { top20Leagues } from "../../../constants/top20Leagues";
import { getLeagueFixtures } from "../../../services/getFIxturesByDate";

export const getFixturesFromTop20Leagues = async () => {
  const fixtures = await Promise.all(
    top20Leagues.map(async (league) => {
      const data = await getLeagueFixtures(league.id);
      return data.response;
    })
  );
    console.log(fixtures);
  return fixtures
}