import { apiFootballGetHeaders } from "../../../constants/apiFootballGetHeaders";

export const getPlayersStatisticsByFixtureId = (fixtureId: number, teamId:number) => {
  return fetch(`https://api-football-v1.p.rapidapi.com/v3/fixtures/players?fixture=${fixtureId}&team=${teamId}`, {
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