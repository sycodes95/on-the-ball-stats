import { getFixturesByTeamId } from "../../../services/getFixturesByTeamId"
import { Fixture } from "../../../types/types";
import { PlayerStatisticsForAllFixtures } from "../types/types";
import { getPlayersStatisticsByFixtureId } from "./getPlayersStatisticsByFixtureId";

type PlayerStatistics = {
  player: {
    id: number;
    name: string;
    photo: string;

  };
  statistics: {
    cards: {
      yellow: number;
      red: number;
    };
    dribbles: {
      attempts: number | null;
      success: number | null;
      past: number | null;
    };
    duels: {
      total: number | null;
      won: number | null;
    };
    fouls: {
      drawn: number | null;
      committed: number | null;
    };
    games: {
      captain: boolean;
      minutes: number | null;
      number: number | null;
      position: string;
      rating: string | null;
      substitute: boolean;
    };
    goals: {
      assists: number | null;
      conceded: number | null;
      saves: number | null;
      total: number | null;
    };
    passes: {
      accuracy: number | null | string;
      key: number | null;
      total: number | null;
    };
    penalty: {
      committed: number | null;
      missed: number | null;
      saved: number | null;
      scored: number | null;
      won: number | null;
    };
    shots: {
      on: number | null;
      total: number | null;
    };
    tackles: {
      blocks: number | null;
      interceptions: number | null;
      total: number | null;
    };
  }[]
}

export const getPlayerStatisticsForAllFixtures = async (playerId: number, teamId: number) => {
  const teamFixtures = await getFixturesByTeamId(teamId).then((fixtures: Fixture[]) => fixtures.filter(fixture => new Date(fixture.fixture.date) < new Date()));
  const fixturesPlayersStatistics : PlayerStatisticsForAllFixtures[] = [];

  if (teamFixtures.length > 0) {
    for (const fixture of teamFixtures) {
      const players = await getPlayersStatisticsByFixtureId(fixture.fixture.id, teamId);
      if (!players) {
        continue;
      }

      const playerByPlayerId = players.players.find((player: PlayerStatistics) => player.player.id === playerId);
      let opposingTeam;
      if (fixture.teams.home.id !== teamId) {
        opposingTeam = fixture.teams.home;
      } else {
        opposingTeam = fixture.teams.away;
      }

      if (playerByPlayerId?.statistics && playerByPlayerId?.statistics[0].games.minutes && playerByPlayerId?.statistics[0].games.minutes > 0) {
        fixturesPlayersStatistics.push({
          fixture: fixture.fixture,
          league: fixture.league,
          player: playerByPlayerId.player,
          statistics: playerByPlayerId.statistics,
          opposingTeam
        });
      } 
    }

    const customPlayerStatistics = fixturesPlayersStatistics
    .filter((fixture) => fixture)
    .sort((a, b) => {
        if (!a?.fixture?.date || !b?.fixture?.date) return 0;
        return new Date(b.fixture.date).getTime() - new Date(a.fixture.date).getTime();
    });

    return customPlayerStatistics;

  }
  return [];
}


// export const getPlayerStatisticsForAllFixtures = async (playerId: number, teamId: number) => {
//   //Get all fixtures of player's team and filter it by fixtures that have ended.
//   const teamFixtures = await getFixturesByTeamId(teamId).then((fixtures: Fixture[]) => fixtures.filter(fixture => new Date(fixture.fixture.date) < new Date()))
//   if(teamFixtures.length > 0){
//     const fixturesPlayersStatistics = await Promise.all(
//       teamFixtures.map(async (fixture : Fixture) => {
//         const players = await getPlayersStatisticsByFixtureId(fixture.fixture.id, teamId);
//         if(!players) return null

//         const playerByPlayerId = players.players.find((player: PlayerStatistics) => player.player.id === playerId)
//         let opposingTeam;
//         if(fixture.teams.home.id !== teamId){
//           opposingTeam = fixture.teams.home
//         } else {
//           opposingTeam = fixture.teams.away
//         }
//         if(playerByPlayerId?.statistics && playerByPlayerId?.statistics[0].games.minutes && playerByPlayerId?.statistics[0].games.minutes > 0){
//           return {
//             fixture: fixture.fixture,
//             league: fixture.league,
//             player: playerByPlayerId.player,
//             statistics: playerByPlayerId.statistics,
//             opposingTeam 
//           }
//         }
//         return null
//       })
//     );

//     const customPlayerStatistics = fixturesPlayersStatistics
//     .filter((fixture) => fixture)
//     .sort((a, b) => {
//       if (!a?.fixture?.date || !b?.fixture?.date) return 0;
//       return new Date(b.fixture.date).getTime() - new Date(a.fixture.date).getTime();
//     });


    
//     return customPlayerStatistics

//     console.log(fixturesPlayersStatistics.filter((fixture) => fixture).sort((a, b) => new Date(b.fixture.date).getTime() - new Date(a.fixture.date).getTime()));

//   }
//   return []
// }