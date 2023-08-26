import { apiFootballGetHeaders } from "../../../constants/apiFootballGetHeaders";

export const getTeamFixtures = (teamId: number, season: number) => {
  return fetch(`https://api-football-v1.p.rapidapi.com/v3/fixtures?team=${teamId}&season=${season}`,{
    headers: apiFootballGetHeaders
  })
  .then(res => res.json())
  .then(data => {
    if(data.response){
      return data.response
    }
    return null
  })
  .catch(error => {
    console.error(error)
    return null
  })
}