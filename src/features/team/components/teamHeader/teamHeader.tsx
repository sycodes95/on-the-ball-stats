import { TeamStatistics } from "../../types";

type TeamHeaderProps = {
  teamStatistics: TeamStatistics;
}

function TeamHeader ({teamStatistics} : TeamHeaderProps ) {
  return (
    <div className="flex w-full gap-4 text-xs">
      <img className="object-contain w-16 h-16 rounded-full" src={teamStatistics.team.logo} alt="" />

      <div className="flex flex-col justify-center ">
        <div className="flex items-center gap-2 ">
          {/* <img className="object-contain w-6 h-6" src={teamStatistics.league.flag} alt="" /> */}
          <span className="text-sm ">{teamStatistics.league.country}</span>
        </div>

        <div className="flex flex-col gap-1 text-2xl font-semibold text-black md:flex-row">
          <span className="flex items-center whitespace-nowrap">{teamStatistics.team.name}</span>
        </div>
        
      </div>
    </div>
  )
}
export default TeamHeader;