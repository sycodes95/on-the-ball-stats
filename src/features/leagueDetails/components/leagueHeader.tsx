import { useEffect } from "react";
import { League } from "../../../pages/leagues";

type LeagueHeaderProps = {
  leagueInfo: League;
}

function LeagueHeader ({ leagueInfo }: LeagueHeaderProps) {
  useEffect(()=>{
    console.log(leagueInfo);
  },[leagueInfo])
  return (
    <div className="flex items-center justify-between w-full gap-4 p-2 bg-emerald-500 rounded-b-md">
      <div className="flex items-center gap-4">
        <img className="h-12" src={leagueInfo.league.logo} alt="league-logo"/>
        <p className="text-4xl font-semibold text-white font-display ">{leagueInfo.league.name}</p>
      </div>

      <div>
        <img className="h-10 rounded-md" src={leagueInfo.country.flag} alt="league-logo"/>
      </div>

    </div>
  )
}

export default LeagueHeader; 