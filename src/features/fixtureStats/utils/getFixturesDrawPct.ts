import { Fixture } from "../../../types/types"

export const getFixturesDrawPct = (fixtures: Fixture[]) => {
  const totalGames = fixtures.length
  const draws = fixtures.filter(fixture => {
    if(fixture.teams.home.winner === null &&  fixture.teams.away.winner === null) return fixture
    
  })

  return Number(((draws.length / totalGames) * 100).toFixed(0))
} 