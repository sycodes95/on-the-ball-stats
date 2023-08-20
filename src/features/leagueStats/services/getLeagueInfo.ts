import { apiFootballGetHeaders } from "../../../constants/apiFootballGetHeaders"

export const getLeagueInfo = (leagueID: number) => {
  
  return fetch(`https://api-football-v1.p.rapidapi.com/v3/leagues?id=${leagueID}`,{
    headers: apiFootballGetHeaders
  })
  .then(res => res.json())
  .then(data => {
    if(data && data.response.length){
      return data
    }
  })
  .catch(error => {
    console.error(error)
  })
}