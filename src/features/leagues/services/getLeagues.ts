import { apiFootballGetHeaders } from "../../../constants/apiFootballGetHeaders";
import { League } from "../../../pages/leagues";

export const getLeagues = () => {
  return fetch(`${import.meta.env.VITE_API_FOOTBALL_URL}/v3/leagues?type=league`, {
    method: 'GET',
    headers: apiFootballGetHeaders
  })
  .then(res => res.json())
  .then(data => {
    if(data.response.length) {
      const leagues = data.response.splice(0, 25).sort((a : League, b: League) => a.league.id - b.league.id)
      return leagues
    } 
    return []
  
  })
  .catch(error => {
    console.error(error)
    return []
  })
}