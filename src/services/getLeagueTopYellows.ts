export const getLeagueTopYellows  = (leagueID: number) => {
  const currentYear = new Date().getFullYear()
  const previousYear = currentYear - 1
  return fetch(`https://api-football-v1.p.rapidapi.com/v3/players/topyellowcards?league=${leagueID}&season=${previousYear}`, {
    headers: {
      'X-RapidAPI-Key': 'e63e383b38msh0a3c5cda7445460p13ee6djsne1fe3f9329ee',
      'X-RapidAPI-Host': 'api-football-v1.p.rapidapi.com'
    }
  })
  .then(res => res.json())
  .then(data => {
    console.log(data)
  })
}