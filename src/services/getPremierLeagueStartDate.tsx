export const getLatestStartedSeason = () => {
  return fetch(`https://api-football-v1.p.rapidapi.com/v3/leagues?id=39`,{
    headers: {
      'X-RapidAPI-Key': import.meta.env.VITE_X_RAPID_API_KEY,
      'X-RapidAPI-Host': import.meta.env.VITE_X_RAPID_API_HOST
    }
  })
  .then(res => res.json())
  .then(data => {
    console.log(data);
    if(data && data.response && data.response[0].seasons){
      console.log(new Date(data.response[0].seasons.pop().start).getFullYear());
      return new Date(data.response[0].seasons.pop().start).getFullYear() + 1
    }
    console.log('not new date');
    return new Date().getFullYear()
  })
  .catch(err => {
    console.error(err)
    return new Date().getFullYear()
  })
  
}