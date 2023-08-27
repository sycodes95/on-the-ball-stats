import { apiFootballGetHeaders } from "../../../constants/apiFootballGetHeaders"

export const getTeamSquad = (teamId: number) => {
  return fetch(`https://api-football-v1.p.rapidapi.com/v3/players/squads?team=${teamId}`,{
    headers: apiFootballGetHeaders
  })
  .then(res => res.json())
  .then(data => {
    if(data.response && data.response.length > 0){
      return data.response[0]
    }
    return null;
  })
  .catch(error => {
    console.error(error)
    return null;
  })
}