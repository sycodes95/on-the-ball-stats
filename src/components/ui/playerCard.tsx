import { Link } from "react-router-dom";
import { getURLFriendlyString } from "../../utils/getURLFriendlyString";

type PlayerCardProps = {
  number: number;
  teamLogo: string;
  playerPhoto: string;
  playerName: string;
  playerID: number;
  topValue: number;
  topValueColor: string;
  teamName: string;
  teamId: number;
  leagueId: number;
}

function PlayerCard ({ 
  number, 
  teamLogo, 
  playerPhoto, 
  playerName, 
  playerID, 
  topValue,
  topValueColor,
  teamName,
  teamId,
  leagueId
}: PlayerCardProps) {

  return (
    
    <div className="flex items-center justify-between w-full h-8 gap-2 transition-all border-black border-opacity-25 rounded-sm ">
      
      <div className="flex items-center h-full gap-2 text-xs text-gray-700 whitespace-nowrap">
        <p className="w-4 text-center whitespace-nowrap">{number}</p>
        
        <Link 
        className="flex items-center justify-center w-6 h-6 hover:opacity-70"
        to={`/team/${leagueId}/${teamId}/${getURLFriendlyString(teamName)}`}
        >
          <img className="object-fit" src={teamLogo} alt="league-logo"/>
        </Link>
        
        
        <Link 
        className="flex items-center gap-2 hover:underline"
        to={`/player/${playerID}`}>
          <img className="object-contain h-6 rounded-full" src={playerPhoto} alt="player-photo" />
          <p>{playerName}</p>
        </Link>
        
      </div>
      
      <div className="flex items-center p-2">
        <p className={`${topValueColor} flex items-center text-white h-6 p-1 w-6 justify-center text-xs font-semibold rounded-md whitespace-nowrap`}>
          {topValue}
        </p>
      </div>
      
      
    </div>
    
    
  )
}

export default PlayerCard;