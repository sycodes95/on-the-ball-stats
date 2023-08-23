import { apiFootballGetHeaders } from "../../../constants/apiFootballGetHeaders"
import { season } from "../../../constants/season"

export const getTeamStatistics = (leagueId: number, teamId: number) => {
  return fetch(`https://api-football-v1.p.rapidapi.com/v3/teams/statistics?season=${season}&team=${teamId}&league=${leagueId}`,{
    headers: apiFootballGetHeaders
  })
  .then(res => res.json())
  .then(data => {
    console.log(data);
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