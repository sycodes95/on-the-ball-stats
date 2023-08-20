import { useEffect, useState } from 'react';
import { LineUp, LineUpStartXIPlayer, LineUpSubstitutesPlayer, } from '../../../../types/types';
import StartingXIHorizontal from './startingXIHorizontal/startingXIHorizontal';
import StartingXIVertical from './startinXIVertical/startingXIVertical';
import { useSelector } from 'react-redux';
import { RootState } from '../../../../store/store';

function LineUps () {

  const { fixture } = useSelector((state : RootState) => state.fixtureStatsSlice)
  
  const [homeStartXIHorizontal, setHomeStartXIHorizontal] = useState<LineUpStartXIPlayer[][]>([])
  const [awayStartXIHorizontal, setAwayStartXIHorizontal] = useState<LineUpStartXIPlayer[][]>([])

  const [homeSubstitutes, setHomeSubstitutes] = useState<LineUpSubstitutesPlayer[]>([])
  const [awaySubstitutes, setAwaySubstitutes] = useState<LineUpSubstitutesPlayer[]>([])

  const HOME_TEAM_INDEX = 0;
  const AWAY_TEAM_INDEX = 1;

  const fixtureHasLineups = fixture && fixture.lineups && fixture.lineups.length > 0;

  useEffect(() => {
    if(!fixture || (!fixture.lineups || fixture.lineups.length === 0)) return;
    
    const generateTeamStartXILineup = (lineup: LineUp, index: number) => {
      
      const teamLineUp: LineUpStartXIPlayer[][] = [[]];
      
      Array.from(lineup.formation).forEach(f => {
        if(f !== '-') teamLineUp.push([]);
      });

      lineup.startXI.forEach(data => {

        const player = {...data.player};

        if(!player.grid) return;

        const column = Number(player.grid[0]) - 1;
        teamLineUp[column].push(player);
        
        if(fixture.players && fixture.players.length > 0){
          const playerWithPhoto = fixture.players[index].players.find(p => p.player.id === player.id);
          if(playerWithPhoto) player.photo = playerWithPhoto.player.photo;
        }
      });

      return teamLineUp.map(col => col.sort((a, b) => {
        if(a.grid && b.grid) {
          return Number(a.grid[a.grid.length - 1]) - Number(b.grid[b.grid.length - 1]);
        }
        return 0;
      }));
    }

    const generateTeamSubstitutes = (lineup: LineUp, index: number) => {
      const subsWithPhoto: LineUpSubstitutesPlayer[] = lineup.substitutes.map(sub => {
        if(fixture.players && fixture.players.length > 0){
          const photo = fixture.players[index].players.find(p => p.player.id === sub.player.id)?.player.photo;
          // if(playerWithPhoto) sub.player.photo = playerWithPhoto.player.photo;
          return {...sub.player, photo}
        }
        return {...sub.player, photo: ''}
      })
      console.log(subsWithPhoto);
      return subsWithPhoto
      
    }

    fixture.lineups.forEach((lineup, index) => {
      const teamLineUp = generateTeamStartXILineup(lineup, index);
      const substitutes = generateTeamSubstitutes(lineup, index)
      if(index === HOME_TEAM_INDEX){
        setHomeStartXIHorizontal(teamLineUp);
        setHomeSubstitutes(substitutes)
      } else if(index === AWAY_TEAM_INDEX) {
        setAwayStartXIHorizontal(teamLineUp);
        setAwaySubstitutes(substitutes)
      }
    });
  }, [fixture]);




  useEffect(()=> {
  },[fixture])
  return (
    <div className="flex flex-col w-full h-full gap-4">
      {
      fixtureHasLineups ?
      <div className='flex flex-col gap-4'>
        <StartingXIHorizontal 
        className='hidden md:contents'
        fixture={fixture} 
        homeStartXIHorizontal={homeStartXIHorizontal}
        awayStartXIHorizontal={awayStartXIHorizontal}
        />

        <StartingXIVertical 
        className=' md:hidden'
        fixture={fixture} 
        homeStartXIHorizontal={homeStartXIHorizontal}
        awayStartXIHorizontal={awayStartXIHorizontal}
        />
        <span className='w-full font-bold text-center'>Substitutes</span>
        <div className='grid grid-cols-2 gap-2 p-4 grid-cols-1w-full'>
          <div className='flex flex-col gap-2'>
            <div className='flex justify-center w-full p-2'>
              <img className='object-contain w-8 h-8' src={fixture.teams.home.logo} alt="" />
            </div>
            {
            homeSubstitutes &&
            homeSubstitutes.map((player, index) => (
              <div className='flex flex-col items-center gap-2 p-2 overflow-hidden border border-gray-300 rounded-2xl md:flex-row md:p-0 whitespace-nowrap text-ellipsis' key={index}>
                {
                player.photo ? 
                <img className='object-contain w-8 h-8 rounded-full group-hover:opacity-75' src={player.photo} alt="" />
                :
                <img className='object-contain w-8 h-8 rounded-full group-hover:opacity-75' src="https://media-1.api-sports.io/football/players/65361.png" alt="player-photo" />
                }
                <span className={`w-6 text-center rounded-full text-white font-bold bg-opacity-50
                ${player.pos === 'F' && 'bg-red-600 '}
                ${player.pos === 'M' && 'bg-emerald-600'}
                ${player.pos === 'D' && 'bg-blue-600'}
                ${player.pos === 'G' && 'bg-orange-600'}
                `}>{player.pos}</span>
                <span className='w-8 text-center'>{player.number}</span>
                <span>{player.name}</span>
              </div>
            ))
            }
          </div>
          <div className='flex flex-col gap-2'>
            <div className='flex justify-center w-full p-2'>
              <img className='object-contain w-8 h-8' src={fixture.teams.away.logo} alt="" />
            </div>
            {
            awaySubstitutes &&
            awaySubstitutes.map((player, index) => (
              <div className='flex flex-col items-center gap-2 p-2 overflow-hidden border border-gray-300 rounded-2xl md:flex-row md:p-0 whitespace-nowrap text-ellipsis' key={index}>
                {
                player.photo ? 
                <img className='object-contain w-8 h-8 rounded-full group-hover:opacity-75' src={player.photo} alt="" />
                :
                <img className='object-contain w-8 h-8 rounded-full group-hover:opacity-75' src="https://media-1.api-sports.io/football/players/65361.png" alt="player-photo" />
                }
                <span className={`w-6 text-center rounded-full text-white font-bold bg-opacity-50
                ${player.pos === 'F' && 'bg-red-600 '}
                ${player.pos === 'M' && 'bg-emerald-600'}
                ${player.pos === 'D' && 'bg-blue-600'}
                ${player.pos === 'G' && 'bg-orange-600'}
                `}>{player.pos}</span>
                <span className='w-8 text-center'>{player.number}</span>
                <span>{player.name}</span>
              </div>
            ))
            }
          </div>
        </div>

      </div>
      :
      <div className='flex items-center justify-center w-full h-full text-primary'>
        Line ups will be posted around match kickoff time.
      </div>
      }

    </div>
  )
}

export default LineUps;