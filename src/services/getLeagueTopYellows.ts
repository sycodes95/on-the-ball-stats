import { apiFootballGetHeaders } from "../constants/apiFootballGetHeaders"

export const getLeagueTopYellows  = (leagueId: number, season: number) => {
  
  return fetch(`https://api-football-v1.p.rapidapi.com/v3/players/topyellowcards?league=${leagueId}&season=${season}`, {
    headers: apiFootballGetHeaders
  })
  .then(res => res.json())
  .then(data => {
    if(data) return data
  })
}