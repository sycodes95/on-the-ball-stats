import { apiFootballGetHeaders } from "../../../constants/apiFootballGetHeaders";
import { season } from "../../../constants/season";

export const getPlayerStatisticsById = (playerId: number) => {
  return fetch(`https://api-football-v1.p.rapidapi.com/v3/players?id=${playerId}&season=${season}`, {
    headers: apiFootballGetHeaders
  })
  .then(res => res.json())
  .then(data => {
    if(data.response && data.response[0]){
      return data.response[0]
    }
    return null
  })
  .catch(err => {
    console.error(err);
    return null
  })
}