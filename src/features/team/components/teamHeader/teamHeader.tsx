import { TeamStatistics } from "../../types";

type TeamHeaderProps = {
  teamStatistics: TeamStatistics;
}

function TeamHeader ({teamStatistics} : TeamHeaderProps ) {
  return (
    <div className="flex w-full gap-2 mt-4 text-xs">
      <img className="object-contain w-20 h-20 p-2 " src={teamStatistics.team.logo} alt="" />

      <div className="flex flex-col justify-center">
        <div className="flex items-center gap-2 ">
          
          <span className="text-black">{teamStatistics.league.country.toUpperCase()}</span>
        </div>

        <div className="flex flex-col gap-1 text-2xl font-semibold text-black md:flex-row">
          <span className="flex items-center overflow-hidden text-lg text-black md:text-2xl whitespace-nowrap">{teamStatistics.team.name.toUpperCase()}</span>
        </div>
        
      </div>
    </div>
  )
}
export default TeamHeader;