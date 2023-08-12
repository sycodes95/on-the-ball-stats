import { format, add } from 'date-fns';
import { top20Leagues } from '../constants/top20Leagues';
import { Fixture } from '../features/overall/types/types';

// export const getLeagueFixtures = (leagueID: number) => {
//   const today = new Date()
//   const season = today.getFullYear() - 1
//   console.log(season);
//   const datee = new Date(2022, 9, 16)
//   const newDate = format(datee,'yyyy-MM-dd')
//   console.log(datee);
//   const tomorrow = add(today, { days: 1 });
//   const formattedDate = format(tomorrow, 'yyyy-MM-dd');
//   return fetch(`https://api-football-v1.p.rapidapi.com/v3/fixtures?league=${leagueID}&season=${season}&date=${formattedDate}`,{
//     headers: {
//       'X-RapidAPI-Key': import.meta.env.VITE_X_RAPID_API_KEY,
//       'X-RapidAPI-Host': import.meta.env.VITE_X_RAPID_API_HOST
//     }
//   })
//   .then(res => res.json())
//   .then(data => {
//     console.log(data);
//     return data
//   })
//   .catch(error => {
//     console.error(error)
//   })
// }




export const getFixturesByDate = () => {
  const today = new Date();
  const yesterday = new Date(today)
  const tomorrow = new Date(today);
  tomorrow.setDate(tomorrow.getDate() + 1);
  yesterday.setDate(today.getDate() - 1 )

  // const season = today.getFullYear() - 1;
  const yesterdayFormatted = format(today,'yyyy-MM-dd');
  const todayFormatted = format(today,'yyyy-MM-dd');
  const tomorrowFormatted = format(tomorrow,'yyyy-MM-dd');
  return fetch(`https://api-football-v1.p.rapidapi.com/v3/fixtures?&date=${yesterdayFormatted}`,{
    headers: {
      'X-RapidAPI-Key': import.meta.env.VITE_X_RAPID_API_KEY,
      'X-RapidAPI-Host': import.meta.env.VITE_X_RAPID_API_HOST
    }
  })
  .then(res => res.json())
  .then(data => {
    const topLeaguesAndCupsFixures = data.response.filter((fixture: Fixture) => {
      return top20Leagues.some(league => league.id === fixture.league.id)
    })
    .sort((a : Fixture, b : Fixture) => a.league.id - b.league.id)
    console.log(data.response);
    return topLeaguesAndCupsFixures
  })
  .catch(error => {
    console.error(error)
    return []
  })
}