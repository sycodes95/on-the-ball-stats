import { apiFootballGetHeaders } from "../constants/apiFootballGetHeaders"
import { Fixture } from "../types/types"

export const getFixturesH2H = (teamAId:number, teamBId: number) => {
  // const season = today.getFullYear() - 1;
  const h2h = `${teamAId}-${teamBId}`
  return fetch(`https://api-football-v1.p.rapidapi.com/v3/fixtures/headtohead?h2h=${h2h}`,{
    headers: apiFootballGetHeaders
  })
  .then(res => res.json())
  .then(data => {
    if(data.response  && data.response.length) {
      const fixtures = data.response.filter((fixture:Fixture) => new Date(fixture.fixture.date) < new Date()).sort((a:string, b:string) => new Date(b.fixture.date) - new Date(a.fixture.date))
      return fixtures
      
    } 
    return []
  })
  .catch(error => {
    console.error(error)
    return []
  })
}