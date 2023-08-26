import { apiFootballGetHeaders } from "../../../constants/apiFootballGetHeaders"
import { Fixture } from "../../../types/types";



export const getLeagueFixtures = (leagueId: number, season: number) => {
  return fetch(`https://api-football-v1.p.rapidapi.com/v3/fixtures?league=${leagueId}&season=${season}`,{
    headers: apiFootballGetHeaders
  })
  .then(res => res.json())
  .then(data => {
    if(data.response && data.response.length > 0){
      
      return data.response.sort((a: Fixture, b: Fixture) => new Date(a.fixture.date).getTime() - new Date(b.fixture.date).getTime())
    }
    return []
  })
  .catch(error => {
    console.error(error)
    return []
  })
}

