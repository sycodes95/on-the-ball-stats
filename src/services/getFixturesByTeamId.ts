import { apiFootballGetHeaders } from "../constants/apiFootballGetHeaders"
import { season } from "../constants/season";

export const getFixturesByTeamId = (teamId: number) => {
  return fetch(`https://api-football-v1.p.rapidapi.com/v3/fixtures?team=${teamId}&season=${season}`,{
    headers: apiFootballGetHeaders
  })
  .then(res => res.json())
  .then(data => {
    if(data.response &&  data.response.length > 0){
      return data.response
    }
    return []
  })
  .catch(error => {
    console.error(error)
    return []
  })
}