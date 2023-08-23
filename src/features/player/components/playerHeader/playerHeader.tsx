import { Player } from "../../../../types/types";

type PlayerHeaderProps = {
  playerDetails : Player;
}

function PlayerHeader ({playerDetails} : PlayerHeaderProps) {
  return(
    <div className="flex w-full gap-4 text-xs">
      <img className="object-contain w-20 h-20 rounded-full" src={playerDetails.player.photo} alt="" />
      <div className="flex flex-col justify-center ">
        <div className="flex flex-col gap-1 text-3xl font-semibold text-black text-opacity-0 font-logo font-outline-black md:flex-row">
          <span className="flex items-center whitespace-nowrap">{playerDetails.player.firstname}</span>
          <span className="flex items-center">{playerDetails.player.lastname}</span>
        </div>
        
        <div className="flex items-center gap-2 font-semibold ">
          <img className="object-contain w-6 h-6" src={playerDetails.statistics[0].team.logo} alt="" />
          <span className="text-sm ">{playerDetails.statistics[0].team.name}</span>
        </div>
        
      </div>
    </div>
  )
}

export default PlayerHeader;
