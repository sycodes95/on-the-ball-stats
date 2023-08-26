import { apiFootballGetHeaders } from "../../../constants/apiFootballGetHeaders";

export const getLeagues = () => {
  return fetch(`${import.meta.env.VITE_API_FOOTBALL_URL}/v3/leagues?type=${'league'}`, {
    method: 'GET',
    headers: apiFootballGetHeaders
  })
  .then(res => res.json())
  .then(data => {
    if(data.response.length) {
      const leaguesObj = {}
      data.response
      .filter((data) => data.country.flag)
      .sort((a, b) => a.country.name.charCodeAt(0) - b.country.name.charCodeAt(0))
      .forEach(league => {
        if(!leaguesObj[league.country.name]){
          leaguesObj[league.country.name] = { flag : league.country.flag, leagues: [league.league], topLeagueId: league.league.id}
        } else {
          leaguesObj[league.country.name].leagues.push(league.league)
        }
      })
      return leaguesObj
    } 
    return null
  
  })
  .catch(error => {
    console.error(error)
    return null
  })
}