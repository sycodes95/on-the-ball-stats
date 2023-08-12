export const getLeagueInfo = (leagueID: number) => {
  
  return fetch(`https://api-football-v1.p.rapidapi.com/v3/leagues?id=${leagueID}`,{
    headers: {
      'X-RapidAPI-Key': import.meta.env.VITE_X_RAPID_API_KEY,
      'X-RapidAPI-Host': import.meta.env.VITE_X_RAPID_API_HOST
    }
  })
  .then(res => res.json())
  .then(data => {
    if(data && data.response.length){
      return data
    }
  })
  .catch(error => {
    console.error(error)
  })
}