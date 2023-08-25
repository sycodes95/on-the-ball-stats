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
      <div className="flex items-center gap-4">
        <img className="h-10 pl-2 pr-2 bg-white" src={leagueInfo.league.logo} alt="league-logo"/>
        <p className="pt-1 text-2xl text-black font-outline-black ">{leagueInfo.league.name}</p>
      </div>

      <div className="pr-2">
        <img className="object-contain w-6 h-6 rounded-md" src={leagueInfo.country.flag} alt="league-logo"/>
      </div>

    </div>
  )
}

export default LeagueHeader; 