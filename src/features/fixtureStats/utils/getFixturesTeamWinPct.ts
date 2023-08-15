import { Fixture } from "../../homepage/types/types"

export const getFixturesTeamWinPct = (fixtures: Fixture[], teamId: number) => {
  const totalGames = fixtures.length
  const wins = fixtures.filter(fixture => {
    if((fixture.teams.home.id === teamId && fixture.teams.home.winner) || (fixture.teams.away.id === teamId && fixture.teams.away.winner) ) return fixture
    
  })

  return Number(((wins.length / totalGames) * 100).toFixed(0))
} 