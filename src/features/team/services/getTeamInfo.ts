import { apiFootballGetHeaders } from "../../../constants/apiFootballGetHeaders";

export const getTeamInfo = (teamId: number) => {

  return fetch(`https://api-football-v1.p.rapidapi.com/v3/teams?id=${teamId}`,{
    headers: apiFootballGetHeaders
  })
  .then(res => res.json())
  .then(data => {
    console.log(data);
    if(data.response){
      return data.response[0]
    }
    return null
  })
  .catch(error => {
    console.error(error)
    return null
  })
}