import { Link } from "react-router-dom";
import { getURLFriendlyString } from "../../utils/getURLFriendlyString";
import TeamLink from "../links/teamLink";
import LazyLoad from "react-lazy-load";

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
    
    <div className="flex items-center justify-between w-full h-8 gap-2 transition-all border-b rounded-sm border-stone-400 border-opacity-20">
      
      <div className="flex items-center h-full gap-2 text-xs text-gray-700 whitespace-nowrap">
        <p className="flex items-center justify-center w-5 h-5 whitespace-nowrap">{number}</p>

        <TeamLink 
        className="flex items-center justify-center w-6 h-6 hover:opacity-70" 
        teamId={teamId}
        teamName={teamName}
        >
          <LazyLoad offset={100} >
            <img className="object-fit" src={teamLogo} alt="league-logo"/>
          </LazyLoad>
        </TeamLink>
        
        <Link 
        className="flex items-center gap-2 hover:underline"
        to={`/player/${playerID}`}>
          <LazyLoad offset={100} >
            <img className="object-contain h-6 rounded-full" src={playerPhoto} alt="player-photo" />
          </LazyLoad>
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