export const getFixtureStats = (fixtureId: number) => {
  console.log(fixtureId);
  return fetch(`https://api-football-v1.p.rapidapi.com/v3/fixtures/statistics?fixture=${fixtureId}`, {
    headers: {
      'X-RapidAPI-Key': import.meta.env.VITE_X_RAPID_API_KEY,
      'X-RapidAPI-Host': import.meta.env.VITE_X_RAPID_API_HOST
    }
  })
  .then(res => res.json())
  .then(data => {
    if(data.response && data.response.length){
      return data.response
    }
    return []
  })
  .catch(err => {
    console.error(err);
    return []
  })
}