import { Player } from "../../../../types/types";

type PlayerHeaderProps = {
  playerDetails : Player;
}

function PlayerHeader ({playerDetails} : PlayerHeaderProps) {
  return(
    <div className="flex w-full gap-4 text-xs">
      <img className="object-contain w-20 h-20 rounded-full" src={playerDetails.player.photo} alt="" />
      <div className="flex flex-col justify-center gap-2">
        <div className="flex flex-col gap-1 text-2xl font-semibold text-black font-display md:flex-row">
          <span className="flex items-center whitespace-nowrap">{playerDetails.player.firstname}</span>
          <span className="flex items-center">{playerDetails.player.lastname}</span>
        </div>
        
        <div className="flex items-center gap-2">
          <img className="object-contain w-6 h-6" src={playerDetails.statistics[0].team.logo} alt="" />
          <span className="text-sm ">{playerDetails.statistics[0].team.name}</span>
        </div>
        
      </div>
    </div>
  )
}

export default PlayerHeader;
