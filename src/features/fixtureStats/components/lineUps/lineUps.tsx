import { useEffect, useState } from 'react';
import soccerFieldPng from '../../../../assets/images/soccer-field.png'
import { Fixture, LineUp, LineUpStartXIPlayer } from '../../../../types/types';

type LineUpsProps = {
  fixture: Fixture;
}

function LineUps ({fixture} : LineUpsProps) {

  const [homeTeamLineUpData ,setHomeTeamLineUpData ] = useState([])
  const [awayTeamLineUpData ,setAwayTeamLineUpData ] = useState([])
  
  const [homeStartXIHorizontal, setHomeStartXIHorizontal] = useState<LineUpStartXIPlayer[][]>([])

  useEffect(()=> {
    fixture.lineups?.forEach((team, index) => {
      const teamLineUp: LineUpStartXIPlayer[][] = [[]]

      for(let i = 0; i < team.formation.length; i++) {
        if(team.formation[i] !== '-') teamLineUp.push([])
      }

      team.startXI.forEach((player, i) => {
        if(player.player.grid){
          let column = Number(player.player.grid[0]) - 1
          let row = Number(player.player.grid[player.player.grid.length - 1]) - 1
          if(teamLineUp[column]) teamLineUp[column].push((player.player))
        }
        
        console.log(teamLineUp);
        
      })
      if(index === 0){
        setHomeStartXIHorizontal(teamLineUp)
      }
    })
  },[fixture])

  useEffect(()=> {
    console.log(homeStartXIHorizontal);
  },[homeStartXIHorizontal])
  return (
    <div className="flex flex-col">
      <div className={`relative `}>
        <img className="object-contain max-w-full max-h-full transform " src={soccerFieldPng} alt="" />
        <div className='absolute top-0 w-full h-full'>
          <div className='z-10 flex w-1/2 h-full bg-black bg-opacity-20'>
            {
            homeStartXIHorizontal.map((col, index) => (
              <div className='z-10 flex flex-col items-center w-full h-full'>
                {
                col.map((player, i) => (
                  <div className='z-20 flex items-center justify-center w-full h-full text-white'>{player.name}</div>
                ))
                }
              </div>
            ))
            }
          </div>
        </div>
      </div>

    </div>
  )
}

export default LineUps;