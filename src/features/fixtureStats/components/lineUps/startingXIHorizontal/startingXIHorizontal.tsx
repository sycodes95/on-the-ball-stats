import { Link } from "react-router-dom";
import { Fixture, LineUpStartXIPlayer } from "../../../../../types/types";
import { playerPositionColors } from "../../../constants/constants";
import FootballFieldHorizontal from "../footballField/footballFieldHorizontal";

type StartingXIHorizontalProps = {
  fixture: Fixture;
  homeStartXIHorizontal: LineUpStartXIPlayer[][];
  awayStartXIHorizontal: LineUpStartXIPlayer[][];
  className?: string;
}

function StartingXIHorizontal ({fixture, homeStartXIHorizontal, awayStartXIHorizontal, className} : StartingXIHorizontalProps) {
  return (
    <>
    {
    fixture.lineups && fixture.lineups.length > 0 &&  
    <div className={`flex flex-col gap-4 ${className}`}>
      <div className='flex justify-between w-full'>
        <div className='flex gap-4'>
          <div className='flex items-center gap-4'>
            <img className='object-contain w-12 h-12' src={fixture.lineups[0].team.logo} alt="" />
            <span className='text-sm font-bold'>{fixture.lineups[0].formation}</span>
          </div>

          <div className='flex items-center gap-4'>
            {
            fixture.lineups[0].coach.photo ? 
            <img className='w-12 h-12 rounded-full' src={fixture.lineups[0].coach.photo} alt="" />
            :
            <img className='object-contain w-12 h-12 rounded-full group-hover:opacity-75' src="https://media-1.api-sports.io/football/players/65361.png" alt="player-photo" />
            }
            <div className='flex flex-col'>
              <span>Coach</span>
              <span>{fixture.lineups[0].coach.name}</span>
            </div>
          </div>
          
        </div>

        <div className='flex gap-4'>
          

          <div className='flex items-center gap-4'>
            <div className='flex flex-col items-end'>
              <span>Coach</span>
              <span>{fixture.lineups[1].coach.name}</span>
            </div>
            {
            fixture.lineups[1].coach.photo ? 
            <img className='object-contain w-12 h-12 rounded-full' src={fixture.lineups[1].coach.photo} alt="" />
            :
            <img className='object-contain w-12 h-12 rounded-full group-hover:opacity-75' src="https://media-1.api-sports.io/football/players/65361.png" alt="player-photo" />
            }
          </div>

          <div className='flex items-center gap-4'>
            <span className='text-sm font-bold'>{fixture.lineups[1].formation}</span>
            <img className='object-contain w-12 h-12' src={fixture.lineups[1].team.logo} alt="" />
          </div>
          
        </div>
      </div>
      <div className={`relative h-full w-full`}>
        <FootballFieldHorizontal />
        {/* <img className="object-contain max-w-full max-h-full " src={soccerFieldPng} alt="" /> */}
        <div className='absolute top-0 flex w-full h-full font-semibold' style={{height: '640px'}}>
          <div className='z-10 flex w-1/2 h-full bg-black bg-opacity-20'>
            {
            homeStartXIHorizontal.map((col, index) => (
              <div className='z-10 flex flex-col items-center w-full h-full justify-evenly' key={index}>
                {
                col.map((player, i) => (
                  <Link className="z-20 flex flex-col items-center justify-center w-full gap-1 text-white h-fit group hover:opacity-70" to={`/player-stats/${player.id}`}
                  key={i}>
                    {
                    player.photo ?
                    <img className='object-contain w-12 h-12 rounded-full opacity-100 group-hover:opacity-75' src={player.photo} alt="player-photo" />
                    :
                    <img className='object-contain w-12 h-12 rounded-full group-hover:opacity-75' src="https://media-1.api-sports.io/football/players/65361.png" alt="player-photo" />
                    }
                    <div className="flex gap-2">
                      <span className={`w-6 text-center rounded-full text-white font-bold bg-opacity-50
                      ${playerPositionColors[player.pos]}
                      `}>{player.pos}</span>
                      <span className='group-hover:opacity-75 text-opa'># {player.number}</span>
                    </div>
                    <span>{player.name.split(' ').pop()}</span>
                  </Link>
                ))
                }
              </div>
            ))
            }
          </div>
          <div className='z-10 flex flex-row-reverse w-1/2 h-full bg-black bg-opacity-20'>
            {
            awayStartXIHorizontal.map((col, index) => (
              <div className='z-10 flex flex-col items-center w-full h-full justify-evenly' key={index}>
                {
                col.map((player, i) => (
                  <Link className="z-20 flex flex-col items-center justify-center w-full gap-1 text-white h-fit group hover:opacity-70" to={`/player-stats/${player.id}`}
                  key={i}>
                    {
                    player.photo ?
                    <img className='object-contain w-12 h-12 rounded-full opacity-100 group-hover:opacity-75' src={player.photo} alt="player-photo" />
                    :
                    <img className='object-contain w-12 h-12 rounded-full group-hover:opacity-75' src="https://media-1.api-sports.io/football/players/65361.png" alt="player-photo" />
                    }
                    <div className="flex gap-2">
                      <span className={`w-6 text-center rounded-full text-white font-bold bg-opacity-50
                      ${playerPositionColors[player.pos]}
                      `}>{player.pos}</span>
                      <span className='group-hover:opacity-75'>{player.number}</span>
                    </div>
                    <span className='group-hover:opacity-75'>{player.name.split(' ').pop()}</span>
                  </Link>
                ))
                }
              </div>
            ))
            }
          </div>
        </div>
      </div>
    </div>
    }
  </>
  )
}

export default StartingXIHorizontal;