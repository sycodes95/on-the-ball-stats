import { apiFootballGetHeaders } from "../../../constants/apiFootballGetHeaders";

export const getLeagueTeamStandings = ( leagueID: number, season:number ) => {
  return fetch(`https://api-football-v1.p.rapidapi.com/v3/standings?league=${leagueID}&season=${season}`,{
    method: 'GET',
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