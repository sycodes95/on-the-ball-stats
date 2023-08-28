import { Link } from "react-router-dom";
import { bgMain } from "../../../../constants/colors";
import { Player } from "../../../../types/types";
import { getURLFriendlyString } from "../../../../utils/getURLFriendlyString";

type PlayerHeaderProps = {
  playerDetails : Player;
}

function PlayerHeader ({playerDetails} : PlayerHeaderProps) {
  return(
    <div className={`flex w-full gap-4 text-xs `}>
      <img className="object-contain w-20 h-20 rounded-full" src={playerDetails.player.photo} alt="" />
      <div className={`flex flex-col justify-center w-full p-4 gap-1`}>
        <div className="flex flex-col gap-1 text-lg font-semibold text-black text-opacity-0font-outline-black md:flex-row">
          <span className="flex items-center whitespace-nowrap">{playerDetails.player.firstname.toUpperCase()}</span>
          <span className="flex items-center">{playerDetails.player.lastname.toUpperCase()}</span>
        </div>
        
        <Link 
        className="flex items-center gap-2 font-semibold hover:opacity-70 "
        to={`/team/${playerDetails.statistics[0].league.id}/${playerDetails.statistics[0].team.id}/${getURLFriendlyString(playerDetails.statistics[0].team.name)}`}>
          <img className="object-contain w-6 h-6" src={playerDetails.statistics[0].team.logo} alt="" />
          <span className="text-sm ">{playerDetails.statistics[0].team.name.toUpperCase()}</span>
        </Link>
        
      </div>
    </div>
  )
}

export default PlayerHeader;
