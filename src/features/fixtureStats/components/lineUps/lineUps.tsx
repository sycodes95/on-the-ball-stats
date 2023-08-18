import { useEffect, useState } from 'react';
import soccerFieldPng from '../../../../assets/images/soccer-field.png'
import { Fixture, LineUpStartXIPlayer, } from '../../../../types/types';
import FootballField from '../footballField/footballField';

type LineUpsProps = {
  fixture: Fixture;
}

function LineUps ({fixture} : LineUpsProps) {

  const [homeTeamLineUpData ,setHomeTeamLineUpData ] = useState([])
  const [awayTeamLineUpData ,setAwayTeamLineUpData ] = useState([])
  
  const [homeStartXIHorizontal, setHomeStartXIHorizontal] = useState<LineUpStartXIPlayer[][]>([])
  const [awayStartXIHorizontal, setAwayStartXIHorizontal] = useState<LineUpStartXIPlayer[][]>([])
  useEffect(()=> {
    if(fixture.lineups && fixture.lineups.length) {
      fixture.lineups?.forEach((team, index) => {
        const teamLineUp: LineUpStartXIPlayer[][] = [[]]
  
        for(let i = 0; i < team.formation.length; i++) {
          if(team.formation[i] !== '-') teamLineUp.push([])
        }
        console.log(team.startXI);
        team.startXI.forEach((data) => {
          if(data.player.grid){
            const column = Number(data.player.grid[0]) - 1
            // let row = Number(player.player.grid[player.player.grid.length - 1]) - 1
            if(teamLineUp[column]) teamLineUp[column].push((data.player))
          }
          if(fixture.players && fixture.players.length > 0){
            const playersFromTeam = fixture.players[index].players
            for(let i = 0; i < playersFromTeam.length ; i++) {
              if(playersFromTeam[i].player.id === data.player.id){
                data.player.photo = playersFromTeam[i].player.photo
              }
            }
          }
        })
        if(index === 0){
          setHomeStartXIHorizontal(()=> teamLineUp.map((col) => {
            return col.sort((a:LineUpStartXIPlayer , b: LineUpStartXIPlayer) => {
              if(a.grid && b.grid) {
                return Number(a.grid[a.grid.length - 1]) - Number(b.grid[a.grid.length - 1])
              }
              return 0
            })
            
          }))
        } else if(index === 1) {
          setAwayStartXIHorizontal(teamLineUp)
        }
      })

    }
    
  },[fixture])

  useEffect(()=> {
    console.log(homeStartXIHorizontal);
  },[homeStartXIHorizontal])
  return (
    <div className="flex flex-col w-full h-full">
      {
      (fixture.lineups && fixture.lineups.length > 0) ?
      <>
      <div className={`relative h-full w-full`}>
        <FootballField />
        {/* <img className="object-contain max-w-full max-h-full " src={soccerFieldPng} alt="" /> */}
        <div className='absolute top-0 flex w-full h-full font-bold' style={{height: '640px'}}>
          <div className='z-10 flex w-1/2 h-full bg-black bg-opacity-20'>
            {
            homeStartXIHorizontal.map((col, index) => (
              <div className='z-10 flex flex-col items-center w-full h-full' key={index}>
                {
                col.map((player, i) => (
                  <div className='z-20 flex flex-col items-center justify-center w-full h-full gap-1 text-white'
                  key={i}>
                    <img className='object-contain w-12 h-12 rounded-full' src={player.photo} alt="" />
                    <span>{player.number} {player.name.split(' ').pop()}</span>
                  </div>
                ))
                }
              </div>
            ))
            }
          </div>
          <div className='z-10 flex flex-row-reverse w-1/2 h-full bg-black bg-opacity-20'>
            {
            awayStartXIHorizontal.map((col, index) => (
              <div className='z-10 flex flex-col items-center w-full h-full gap-1' key={index}>
                {
                col.map((player, i) => (
                  <div className='z-20 flex flex-col items-center justify-center h-full text-white'
                  key={i}>
                    <img className='object-contain w-12 h-12 rounded-full' src={player.photo} alt="" />
                    <span>{player.number} {player.name.split(' ').pop()}</span>
                  </div>
                ))
                }
              </div>
            ))
            }
          </div>
        </div>
      </div>
      <div className='flex gap-2'>
        <div>
          {
            fixture.lineups &&
            fixture.lineups[0].substitutes.map((player, index) => (
              <div className='' key={index}>{player.player.name}</div>
            ))
          }
        </div>
      </div>
      </>
      :
      <div className='flex items-center justify-center w-full h-full text-primary'>
        Line ups will be posted around match kickoff time.
      </div>

      }
      

      

    </div>
  )
}

export default LineUps;