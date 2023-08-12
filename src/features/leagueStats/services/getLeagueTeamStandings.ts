
export const getLeagueTeamStandings = ( leagueID: number ) => {
  const currentSeason = new Date().getFullYear()
  const previousYear = currentSeason - 1
  return fetch(`https://api-football-v1.p.rapidapi.com/v3/standings?league=${leagueID}&season=${previousYear}`,{
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': import.meta.env.VITE_X_RAPID_API_KEY,
      'X-RapidAPI-Host': import.meta.env.VITE_X_RAPID_API_HOST
    }
  })
  .then(res => res.json())
  .then(data => {
    return data
  })
  .catch(error => {
    console.error(error)
  })
}