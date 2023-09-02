import { apiFootballGetHeaders } from "../constants/apiFootballGetHeaders"

export const getLeagueIdByTeamId = (teamId: number) => {
  return fetch(`https://api-football-v1.p.rapidapi.com/v3/leagues?team=${teamId}&type=league`,{
    headers: apiFootballGetHeaders
  })
  .then(res => res.json())
  .then(data => {
    if(data.response && data.response.length > 0 && data.response[0].league) {
      
      return data.response[0].league.id
    }
    return null
  })
  .catch(error => {
    console.error(error)
    return null
  })
}