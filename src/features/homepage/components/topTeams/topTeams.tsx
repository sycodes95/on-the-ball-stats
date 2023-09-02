import { useEffect } from "react";
import { TopTeamsType } from "../../types/types";
import { getURLFriendlyString } from "../../../../utils/getURLFriendlyString";
import { Link } from "react-router-dom";

type TopTeamsProps = {
  topTeams: TopTeamsType[]
}

function TopTeams ({topTeams} : TopTeamsProps) {

  useEffect(()=>{
  }, [ ])
  return (
    <div className="flex flex-col w-full gap-8 p-2">
      <div className="h-8 text-xl border-b font-display border-stone-300">
        <span className="">Top Teams</span>
      </div>
      {
      topTeams.map((league, index) => (
        <div className="relative flex flex-col gap-4" key={index}>
          <div className="flex items-center gap-4 col-span-full ">
            <img className="object-contain w-12 h-12" src={league.logo} alt="" />
            <span className="flex items-center w-full h-full p-2 text-lg font-semibold ">{league.name}</span>
          </div>

          <div className="relative grid w-full h-full grid-cols-2 gap-4 overflow-hidden transition-all duration-700 md:grid-cols-4">
          {
          league.standings[0].map((team, index) => (
            <div className="relative flex flex-col items-center justify-center w-full gap-4 p-4 rounded-2xl" key={index}
            >
              <Link className="relative flex flex-col items-center w-full gap-4 hover:opacity-70 "
              to={`/team/${league.id}/${team.team.id}/${getURLFriendlyString(team.team.name)}`}
              >
                <img className="object-contain w-16 h-16" src={team.team.logo} alt="" />
                <span className="font-semibold">{team.team.name}</span>
                
              </Link>
              
              <div className="grid grid-cols-3 gap-2 text-xs font-semibold text-white ">
                <span className="flex items-center justify-center p-2 text-center border rounded-full md:w-12 border-emerald-600 text-emerald-600 whitespace-nowrap">{team.all.win} W</span>
                <span className="flex items-center justify-center border rounded-full md:w-12 text-stone-500 border-stone-500">{team.all.draw} D</span>
                <span className="flex items-center justify-center text-red-500 border border-red-500 rounded-full md:w-12">{team.all.lose} L</span>
              </div>
              
            </div>
          ))
          }
          </div>
        </div>
      ))
      }
    </div>
  )
}

export default TopTeams;