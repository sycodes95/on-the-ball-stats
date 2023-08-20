import { apiFootballGetHeaders } from "../constants/apiFootballGetHeaders"

export const getLeagueTopYellows  = (leagueID: number, season: number) => {
  
  return fetch(`https://api-football-v1.p.rapidapi.com/v3/players/topyellowcards?league=${leagueID}&season=${season}`, {
    headers: apiFootballGetHeaders
  })
  .then(res => res.json())
  .then(data => {
    if(data) return data
  })
}