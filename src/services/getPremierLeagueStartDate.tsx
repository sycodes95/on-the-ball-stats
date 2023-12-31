import { apiFootballGetHeaders } from "../constants/apiFootballGetHeaders";

export const getLatestStartedSeason = () => {
  return fetch(`https://api-football-v1.p.rapidapi.com/v3/leagues?id=39`,{
    headers: apiFootballGetHeaders
  })
  .then(res => res.json())
  .then(data => {
    if(data && data.response && data.response[0].seasons){
      return new Date(data.response[0].seasons.pop().start).getFullYear() + 1
    }
    return new Date().getFullYear()
  })
  .catch(err => {
    console.error(err)
    return new Date().getFullYear()
  })
  
}