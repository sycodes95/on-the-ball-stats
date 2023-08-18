export const getLeagueTopYellows  = (leagueID: number, season: number) => {
  
  return fetch(`https://api-football-v1.p.rapidapi.com/v3/players/topyellowcards?league=${leagueID}&season=${season}`, {
    headers: {
      'X-RapidAPI-Key': import.meta.env.VITE_X_RAPID_API_KEY,
      'X-RapidAPI-Host': import.meta.env.VITE_X_RAPID_API_HOST
    }
  })
  .then(res => res.json())
  .then(data => {
    if(data) return data
  })
}