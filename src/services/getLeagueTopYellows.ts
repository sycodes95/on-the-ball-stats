export const getLeagueTopYellows  = (leagueID: number) => {
  const currentYear = new Date().getFullYear()
  const previousYear = currentYear - 1
  return fetch(`https://api-football-v1.p.rapidapi.com/v3/players/topyellowcards?league=${leagueID}&season=${previousYear}`, {
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