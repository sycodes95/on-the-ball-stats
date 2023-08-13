export const getFixturesById = (fixtureId: number) => {
  // const season = today.getFullYear() - 1;
  
  return fetch(`https://api-football-v1.p.rapidapi.com/v3/fixtures?id=${fixtureId}`,{
    headers: {
      'X-RapidAPI-Key': import.meta.env.VITE_X_RAPID_API_KEY,
      'X-RapidAPI-Host': import.meta.env.VITE_X_RAPID_API_HOST
    }
  })
  .then(res => res.json())
  .then(data => {
    if(data.response  && data.response.length) {
      return data.response[0]
    } 
    return []
  })
  .catch(error => {
    console.error(error)
    return []
  })
}