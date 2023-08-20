import { apiFootballGetHeaders } from "../../../constants/apiFootballGetHeaders"

export const getLeagueTopAssists = (leagueID: number, season: number) => {
  
  return fetch(`https://api-football-v1.p.rapidapi.com/v3/players/topassists?league=${leagueID}&season=${season}`,{
    headers: apiFootballGetHeaders
  })
  .then(res => res.json())
  .then(data => {
    return data
  })
  .catch(error => {
    console.error(error)
  })
}