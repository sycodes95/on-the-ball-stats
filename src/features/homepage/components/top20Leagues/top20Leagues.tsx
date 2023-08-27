import { Link } from "react-router-dom";
import { bgMain } from "../../../../constants/colors";
import { top20Leagues } from "../../../../constants/top20Leagues";

function Top20Leagues () {
  return (
    <div className={` flex flex-col  ${bgMain} p-2`}>
      <div className="flex items-center justify-between p-1 border-b border-stone-300">
        <span className="text-xl font-semibold text-black font-display">TOP LEAGUES</span>
        <Link 
        to={`/leagues`}
        className="hover:underline">
          View More
        </Link>
      </div>
      <div className={` grid grid-rows-10 grid-cols-2 md:grid-rows-4 md:grid-cols-5 grid-flow-col gap-1 p-2`}>
        {
        top20Leagues.map((league, index) => (
          <Link 
          to={`/leagues/${league.id}`}
          className={`flex items-center gap-2 hover:underline `}
          key={index}>
            <img className="object-contain w-6 h-6" src={league.logo} alt="" />
            <span className="text-black">{league.name}</span>
          </Link>
        ))
        }
      </div>

    </div>
    
    
  )
}

export default Top20Leagues;