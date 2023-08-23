import { Link } from "react-router-dom";
import { LineUpStartXIPlayer } from "../../../../../types/types";
import { playerPositionColors } from "../../../constants/constants";

type StartingXINoFormationProps = {
  teamStartingXI: LineUpStartXIPlayer[];
}

function StartingXINoFormation ({teamStartingXI}: StartingXINoFormationProps ) {
  return (
    <div className='flex flex-col w-1/2 gap-4'>
      {
      teamStartingXI &&
      teamStartingXI.map((player, index) => (
        <Link to={`/player/${player.id}`} className='flex flex-col items-center gap-2 p-2 overflow-hidden rounded-lg md:flex-row md:p-0 whitespace-nowrap text-ellipsis group' key={index}>
          {
          player.photo ? 
          <img className='object-contain w-8 h-8 rounded-full group-hover:opacity-75' src={player.photo} alt="" />
          :
          <img className='object-contain w-8 h-8 rounded-full group-hover:opacity-75' src="https://media-1.api-sports.io/football/players/65361.png" alt="player-photo" />
          }
          <span className={`w-6 text-center rounded-full text-white font-bold bg-opacity-50
          ${playerPositionColors[player.pos]}
          `}>{player.pos}</span>
          <span className='w-8 text-center'>{player.number}</span>
          <span className='group-hover:underline'>{player.name}</span>
        </Link>
      ))
      }
    </div>
  )
}

export default StartingXINoFormation;