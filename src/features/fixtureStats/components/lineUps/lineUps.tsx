import { useEffect, useState } from 'react';
import { LineUp, LineUpStartXIPlayer, LineUpSubstitutesPlayer, } from '../../../../types/types';
import StartingXIHorizontal from './startingXIHorizontal/startingXIHorizontal';
import StartingXIVertical from './startinXIVertical/startingXIVertical';
import { useSelector } from 'react-redux';
import { RootState } from '../../../../store/store';
import { Link } from 'react-router-dom';
import Substitutes from './substitutes/substitutes';
import StartingXINoFormation from './startingXINoFormation/startingXINoFormation';

function LineUps () {

  const { fixture } = useSelector((state : RootState) => state.fixtureStatsSlice)
  
  const [homeStartXIHorizontal, setHomeStartXIHorizontal] = useState<LineUpStartXIPlayer[][]>([])
  const [awayStartXIHorizontal, setAwayStartXIHorizontal] = useState<LineUpStartXIPlayer[][]>([])

  const [homeSubstitutes, setHomeSubstitutes] = useState<LineUpSubstitutesPlayer[]>([])
  const [awaySubstitutes, setAwaySubstitutes] = useState<LineUpSubstitutesPlayer[]>([])

  const [homeStartXINoFormation, setHomeStartXINoFormation] = useState<LineUpStartXIPlayer[]>([])
  const [awayStartXINoFormation, setAwayStartXINoFormation] = useState<LineUpStartXIPlayer[]>([])

  const HOME_TEAM_INDEX = 0;
  const AWAY_TEAM_INDEX = 1;

  const fixtureHasLineups = fixture && fixture.lineups && fixture.lineups.length > 0;

  useEffect(() => {
    console.log(fixture);
    if(!fixture || (!fixture.lineups || fixture.lineups.length === 0)) return;
    
    const generateTeamStartXILineup = (lineup: LineUp, index: number) => {
      if(!lineup.formation) return []
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
      return subsWithPhoto
    }

    const generateTeamStartXINoFormation = (lineup: LineUp, index: number) => {
      const playerWithPhoto: LineUpStartXIPlayer[] = lineup.startXI.map(player => {
        if(fixture.players && fixture.players.length > 0){
          const photo = fixture.players[index].players.find(p => p.player.id === player.player.id)?.player.photo;
          return {...player.player, photo}
        }
        return {...player.player, photo: ''}
      })
      return playerWithPhoto
    }

    fixture.lineups.forEach((lineup, index) => {
      const startXI = generateTeamStartXILineup(lineup, index);
      const startXINoFormation = generateTeamStartXINoFormation(lineup, index)
      const substitutes = generateTeamSubstitutes(lineup, index)
      if(index === HOME_TEAM_INDEX){
        setHomeStartXIHorizontal(startXI);
        setHomeSubstitutes(substitutes)
        setHomeStartXINoFormation(startXINoFormation)
      } else if(index === AWAY_TEAM_INDEX) {
        setAwayStartXIHorizontal(startXI);
        setAwaySubstitutes(substitutes)
        setAwayStartXINoFormation(startXINoFormation)
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
        {
        (homeStartXIHorizontal.length > 0 && awayStartXIHorizontal.length > 0) ?
        <>
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
        </>
        :
        <>
        {
        fixture.lineups &&
        <div className='flex flex-col gap-4'>
          <span className='w-full font-semibold text-center'>Start XI</span>
          <div className='flex w-full gap-2 p-4'>
            <StartingXINoFormation teamStartingXI={homeStartXINoFormation}/>
            <StartingXINoFormation teamStartingXI={awayStartXINoFormation}/>
          </div>
        </div>

        }
        </>
        }
       
        <span className='w-full font-semibold text-center'>Substitutes</span>
        <div className='grid w-full grid-cols-2 gap-2 p-4 font-semibold'>
          <Substitutes teamSubstitutes={homeSubstitutes} />
          <Substitutes teamSubstitutes={awaySubstitutes} />
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