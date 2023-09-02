import { apiFootballGetHeaders } from "../../../constants/apiFootballGetHeaders"

export const getLeagueTeamStandingsWithLeague = ( leagueId: number, season:number ) => {
  return fetch(`https://api-football-v1.p.rapidapi.com/v3/standings?league=${leagueId}&season=${season}`,{
    headers: apiFootballGetHeaders
  })
  .then(res => res.json())
  .then(data => {
    if(data.response && data.response.length > 0 && data.response[0].league) {
      
      return data.response[0].league
    }
    return null
  })
  .catch(error => {
    console.error(error)
    return null
  })
}