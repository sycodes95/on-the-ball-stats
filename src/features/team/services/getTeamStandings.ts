import { apiFootballGetHeaders } from "../../../constants/apiFootballGetHeaders";

export const getTeamStandings = (teamId:number, season:number) => { 
  return fetch(`https://api-football-v1.p.rapidapi.com/v3/teams/standings?season=${season}&team=${teamId}`,{
    headers: apiFootballGetHeaders
  })
  .then(res => res.json())
  .then(data => {
    if(data.response){
      return data.response[0]
    }
    return null;
  })
  .catch(error => {
    console.error(error)
    return null;
  })
}