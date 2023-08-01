export const getTeams= () => {
  return fetch(`${import.meta.env.VITE_API_FOOTBALL_URL}/v3/teams?country=England`, {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': import.meta.env.VITE_X_RAPID_API_KEY,
      'X-RapidAPI-Host': import.meta.env.VITE_X_RAPID_API_HOST
    }
  })
  .then(res => res.json())
  .then(data => {
    console.log(data);
    if(data.response.length) return data.response
    return 'N/A'
  
  })
  .catch(error => {
    console.error(error)
  })
}