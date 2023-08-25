import { getFixturesByTeamId } from "../../../services/getFixturesByTeamId"
import { Fixture, Player, Team } from "../../../types/types";
import { PlayerStatisticsForAllFixtures } from "../types/types";
import { getPlayerStatisticsByFixtureId, getPlayersStatisticsByFixtureId } from "./getPlayersStatisticsByFixtureId";

export const getPlayerStatisticsForAllFixtures = async (playerId: number, teamId: number) => {
  //Get all fixtures of player's team and filter it by fixtures that have ended.
  const teamFixtures = await getFixturesByTeamId(teamId).then((fixtures: Fixture[]) => fixtures.filter(fixture => new Date(fixture.fixture.date) < new Date()))
  if(teamFixtures.length > 0){
    const fixturesPlayersStatistics = await Promise.all(
      teamFixtures.map(async (fixture : Fixture) => {
        const players: {players: Player[], team: Team} = await getPlayersStatisticsByFixtureId(fixture.fixture.id, teamId);
        if(!players) return null

        const playerByPlayerId = players.players.find(player => player.player.id === playerId)
        let opposingTeam;
        if(fixture.teams.home.id !== teamId){
          opposingTeam = fixture.teams.home
        } else {
          opposingTeam = fixture.teams.away
        }
        if(playerByPlayerId?.statistics && playerByPlayerId?.statistics[0].games.minutes && playerByPlayerId?.statistics[0].games.minutes > 0){
          return {
            fixture: fixture.fixture,
            league: fixture.league,
            player: playerByPlayerId.player,
            statistics: playerByPlayerId.statistics,
            opposingTeam 
          }

        }
        
      })
    );
    console.log(fixturesPlayersStatistics.filter((fixture) => fixture).reverse());
    return fixturesPlayersStatistics.filter((fixture) => fixture).sort((a: PlayerStatisticsForAllFixtures, b: PlayerStatisticsForAllFixtures) => new Date(b.fixture.date) - new Date(a.fixture.date))

  }
  return []
}