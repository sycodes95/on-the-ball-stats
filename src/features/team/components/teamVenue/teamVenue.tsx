import { bgMain } from "../../../../constants/colors";
import { TeamInfo } from "../../types";

type TeamVenueProps = {
  teamInfo: TeamInfo;
}

function TeamVenue ({teamInfo} : TeamVenueProps){
  return (
    <div className={`${bgMain} w-full p-2 flex flex-col gap-2`}>
      <div className="flex items-center h-8 border-b-2 border-stone-300">
        <span className="font-semibold text-black">Venue</span>
      </div>
      <div className="flex flex-col gap-2">
        <div className="flex flex-col items-center gap-1 p-2 text-black ">
          <span className="text-lg ">{teamInfo.venue.name}</span>
          <span className="p-2 rounded-2xl ">{teamInfo.venue.city}</span>
        </div>
        <div className="grid grid-cols-2">
          <div className="flex flex-col items-center justify-center h-full gap-2 p-2">
            <span className="font-semibold text-black">Capacity</span>
            <span className="text-xs font-semibold text-blue-400">{teamInfo.venue.capacity}</span>
          </div>
          <div className="flex flex-col items-center justify-center gap-2 p-2">
            <span className="font-semibold text-black">Surface</span>
            <span className="text-xs font-semibold text-emerald-500">{`${teamInfo.venue.surface.charAt(0).toUpperCase()}${teamInfo.venue.surface.slice(1)}`}</span>
          </div>
        </div>
      </div>
      
    </div>
  )
}

export default TeamVenue;
