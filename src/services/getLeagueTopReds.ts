import { apiFootballGetHeaders } from "../constants/apiFootballGetHeaders"

export const getLeagueTopReds  = (leagueID: number, season: number) => {
  
  return fetch(`https://api-football-v1.p.rapidapi.com/v3/players/topredcards?league=${leagueID}&season=${season}`, {
    headers: apiFootballGetHeaders
  })
  .then(res => res.json())
  .then(data => {
    if(data) return data
  })
}