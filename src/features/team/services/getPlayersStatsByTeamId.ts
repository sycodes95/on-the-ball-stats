import { apiFootballGetHeaders } from "../../../constants/apiFootballGetHeaders"

export const getPlayersStatsByTeamId = (teamId: number, season: number) => {
  return fetch(`https://api-football-v1.p.rapidapi.com/v3/players?team=${teamId}&season=${season}`,{
    headers: apiFootballGetHeaders
  })
  .then(res => res.json())
  .then(data => {
    if(data.response && data.response.length > 0){
      return data.response
    }
    return []
  })
  .catch(error => {
    console.error(error)
    return []
  })
}