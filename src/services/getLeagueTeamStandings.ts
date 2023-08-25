import { apiFootballGetHeaders } from "../constants/apiFootballGetHeaders";

export const getLeagueTeamStandings = ( leagueId: number, season:number ) => {
  return fetch(`https://api-football-v1.p.rapidapi.com/v3/standings?league=${leagueId}&season=${season}`,{
    headers: apiFootballGetHeaders
  })
  .then(res => res.json())
  .then(data => {
    if(data.response && data.response.length > 0 && data.response[0].league) {
      return data.response[0].league.standings[0]
    }
    return []
    
  })
  .catch(error => {
    console.error(error)
    return []
  })
}