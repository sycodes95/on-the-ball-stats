import { apiFootballGetHeaders } from "../constants/apiFootballGetHeaders"

export const getLeagueTopReds  = (leagueId: number, season: number) => {
  
  return fetch(`https://api-football-v1.p.rapidapi.com/v3/players/topredcards?league=${leagueId}&season=${season}`, {
    headers: apiFootballGetHeaders
  })
  .then(res => res.json())
  .then(data => {
    if(data) return data
  })
}