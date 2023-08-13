import { format } from 'date-fns';
import { top20Leagues } from '../constants/top20Leagues';
import { Fixture } from '../features/homepage/types/types';
import { timeZone } from './getTimeZone';
import { formatYMD } from '../utils/formatYMD';

export const getFixturesByDate = (fixtureDay: string) => {
  
  
  const day = new Date;

  if(fixtureDay === 'yesterday') {
    day.setDate(day.getDate() - 1)
  } else if (fixtureDay === 'tomorrow'){
    day.setDate(day.getDate() + 1)
  } 
  
  // const season = today.getFullYear() - 1;
  
  return fetch(`https://api-football-v1.p.rapidapi.com/v3/fixtures?&date=${formatYMD(day)}&timezone=${timeZone}`,{
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
    return topLeaguesAndCupsFixures
  })
  .catch(error => {
    console.error(error)
    return []
  })
}