import { apiFootballGetHeaders } from "../constants/apiFootballGetHeaders"

export const getFixturesById = (fixtureId: number) => {
  // const season = today.getFullYear() - 1;
  
  return fetch(`https://api-football-v1.p.rapidapi.com/v3/fixtures?id=${fixtureId}`,{
    headers: apiFootballGetHeaders
  })
  .then(res => res.json())
  .then(data => {
    if(data.response  && data.response.length) {
      return data.response[0]
    } 
    return []
  })
  .catch(error => {
    console.error(error)
    return []
  })
}