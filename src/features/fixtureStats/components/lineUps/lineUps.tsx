import { useEffect, useState } from 'react';
import soccerFieldPng from '../../../../assets/images/soccer-field.png'
import { Fixture, LineUp, LineUpStartXIPlayer, LineUpSubstitutesPlayer, } from '../../../../types/types';
import FootballFieldHorizontal from '../footballField/footballFieldHorizontal';
import noPhotoPlayerImage from '../../../../assets/images/no-image-player.png'
import StartingXIHorizontal from './startingXIHorizontal/startingXIHorizontal';

type LineUpsProps = {
  fixture: Fixture;
}

function LineUps ({fixture} : LineUpsProps) {

  const [homeTeamLineUpData ,setHomeTeamLineUpData ] = useState([])
  const [awayTeamLineUpData ,setAwayTeamLineUpData ] = useState([])
  
  const [homeStartXIHorizontal, setHomeStartXIHorizontal] = useState<LineUpStartXIPlayer[][]>([])
  const [awayStartXIHorizontal, setAwayStartXIHorizontal] = useState<LineUpStartXIPlayer[][]>([])

  const [homeSubstitutes, setHomeSubstitutes] = useState<LineUpSubstitutesPlayer[]>([])
  const [awaySubstitutes, setAwaySubstitutes] = useState<LineUpSubstitutesPlayer[]>([])

  // useEffect(()=> {
  //   if(fixture.lineups && fixture.lineups.length) {
  //     fixture.lineups?.forEach((team, index) => {
  //       const teamLineUp: LineUpStartXIPlayer[][] = [[]]
  
  //       for(let i = 0; i < team.formation.length; i++) {
  //         if(team.formation[i] !== '-') teamLineUp.push([])
  //       }
  //       console.log(team.startXI);
  //       team.startXI.forEach((data) => {
  //         if(data.player.grid){
  //           const column = Number(data.player.grid[0]) - 1
  //           // let row = Number(player.player.grid[player.player.grid.length - 1]) - 1
  //           if(teamLineUp[column]) teamLineUp[column].push((data.player))
  //         }
  //         if(fixture.players && fixture.players.length > 0){
  //           const playersFromTeam = fixture.players[index].players
  //           for(let i = 0; i < playersFromTeam.length ; i++) {
  //             if(playersFromTeam[i].player.id === data.player.id){
  //               data.player.photo = playersFromTeam[i].player.photo
  //             }
  //           }
  //         }
  //       })
  //       if(index === 0){
  //         setHomeStartXIHorizontal(()=> teamLineUp.map((col) => {
  //           return col.sort((a:LineUpStartXIPlayer , b: LineUpStartXIPlayer) => {
  //             if(a.grid && b.grid) {
  //               return Number(a.grid[a.grid.length - 1]) - Number(b.grid[a.grid.length - 1])
  //             }
  //             return 0
  //           })
            
  //         }))
  //       } else if(index === 1) {
  //         setAwayStartXIHorizontal(teamLineUp)
  //       }
  //     })

  //   }
    
  // },[fixture])

  useEffect(() => {
    if(!fixture.lineups || fixture.lineups.length === 0) return;

    const generateTeamStartXILineup = (lineup: LineUp, index: number) => {
      const teamLineUp: LineUpStartXIPlayer[][] = [[]];
      
      Array.from(lineup.formation).forEach(f => {
        if(f !== '-') teamLineUp.push([]);
      });
      console.log(teamLineUp);
      lineup.startXI.forEach(data => {
        if(!data.player.grid) return;

        const column = Number(data.player.grid[0]) - 1;
        console.log(column, data);
        teamLineUp[column].push(data.player);
        
        if(fixture.players && fixture.players.length > 0){
          const playerWithPhoto = fixture.players[index].players.find(p => p.player.id === data.player.id);
          // if(playerWithPhoto) data.player.photo = playerWithPhoto.player.photo;
          if(playerWithPhoto) data.player.photo = playerWithPhoto.player.photo;
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
      if(index === 0){
        setHomeStartXIHorizontal(teamLineUp);
        setHomeSubstitutes(substitutes)
      } else if(index === 1) {
        setAwayStartXIHorizontal(teamLineUp);
        setAwaySubstitutes(substitutes)
      }
    });

  
    console.log(fixture.lineups[0]);
}, [fixture]);




  useEffect(()=> {
  },[fixture])
  return (
    <div className="flex flex-col w-full h-full gap-4">
      {
      (fixture.lineups && fixture.lineups.length > 0) ?
      <div className='flex flex-col gap-8'>
        <StartingXIHorizontal 
        className=''
        fixture={fixture} 
        homeStartXIHorizontal={homeStartXIHorizontal}
        awayStartXIHorizontal={awayStartXIHorizontal}
        />
        <span className='w-full font-bold text-center'>Substitutes</span>
        <div className='flex grid w-full grid-cols-2 gap-2'>
          <div className='flex flex-col gap-2'>
            {
              homeSubstitutes &&
              homeSubstitutes.map((player, index) => (
                <div className='flex items-center gap-4' key={index}>
                  {
                  player.photo ? 
                  <img className='object-contain w-8 h-8 rounded-full group-hover:opacity-75' src={player.photo} alt="" />
                  :
                  <img className='object-contain w-12 h-12 rounded-full group-hover:opacity-75' src="https://media-1.api-sports.io/football/players/65361.png" alt="player-photo" />
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
            {
              awaySubstitutes &&
              awaySubstitutes.map((player, index) => (
                <div className='flex items-center gap-2' key={index}>
                  {
                  player.photo ? 
                  <img className='object-contain w-8 h-8 rounded-full group-hover:opacity-75' src={player.photo} alt="" />
                  :
                  <img className='object-contain w-12 h-12 rounded-full group-hover:opacity-75' src="https://media-1.api-sports.io/football/players/65361.png" alt="player-photo" />
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