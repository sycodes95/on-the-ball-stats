export const getFixturesH2H = (teamAId:number, teamBId: number) => {
  // const season = today.getFullYear() - 1;
  const h2h = `${teamAId}-${teamBId}`
  return fetch(`https://api-football-v1.p.rapidapi.com/v3/fixtures/headtohead?h2h=${h2h}`,{
    headers: {
      'X-RapidAPI-Key': import.meta.env.VITE_X_RAPID_API_KEY,
      'X-RapidAPI-Host': import.meta.env.VITE_X_RAPID_API_HOST
    }
  })
  .then(res => res.json())
  .then(data => {
    console.log(data);
    if(data.response  && data.response.length) {
      return data.response
    } 
    return []
  })
  .catch(error => {
    console.error(error)
    return []
  })
}