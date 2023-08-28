import { useEffect } from "react";
import { League } from "../../../../pages/leagues";

type LeagueHeaderProps = {
  leagueInfo: League;
}

function LeagueHeader ({ leagueInfo }: LeagueHeaderProps) {
  useEffect(()=>{
  },[leagueInfo])
  return (
    <div className="flex items-center justify-between w-full gap-4 rounded-b-md ">
      <div className="relative flex items-center gap-4">
        <img className="z-10 h-10 pl-2 pr-2 bg-white" src={leagueInfo.league.logo} alt="league-logo"/>
        <p className="z-10 pt-1 text-2xl text-black bg-white bg-opacity-0 font-outline-black">{leagueInfo.league.name}</p>
      </div>

      <div className="pr-2">
      </div>

    </div>
  )
}

export default LeagueHeader; 