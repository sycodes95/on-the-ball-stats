import { apiFootballGetHeaders } from "../constants/apiFootballGetHeaders"
import { getLatestStartedSeason, getPremierLeagueStartDate } from "./getPremierLeagueStartDate"

export const getLeagueTopScorers = async (leagueID: number, season: number) => {
  
  return fetch(`https://api-football-v1.p.rapidapi.com/v3/players/topscorers?league=${leagueID}&season=${season}`,{
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