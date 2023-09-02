import { Link } from "react-router-dom";
import { bgMain } from "../../../../constants/colors";
import { top20Leagues } from "../../../../constants/top20Leagues";
type Top20LeaguesProps = {
  mobileView : boolean;
}
function Top20Leagues ({mobileView} : Top20LeaguesProps) {
  return (
    <div className={`${mobileView ? 'flex flex-col' : 'hidden md:flex md:flex-col'} md: w-full  ${bgMain} p-2`}>
      <div className="flex items-center justify-between p-1 border-b-2 border-stone-300">
        <span className="text-xl font-semibold text-black font-display">TOP LEAGUES</span>
        <Link 
        to={`/leagues`}
        className="hover:underline">
          View all
        </Link>
      </div>
      <div className={`${mobileView ? 'flex flex-col' : 'grid grid-cols-5'} gap-2 p-2`}>
        {
        top20Leagues.map((league, index) => (
          <Link 
          to={`/leagues/${league.id}`}
          className={`flex items-center gap-6 hover:underline w-fit`}
          key={index}>
            <img className="object-contain w-6 h-6" src={league.logo} alt="" />
            <span className={`${mobileView ? 'text-lg font-semibold' : 'text-xs'} text-black whitespace-nowrap`}>{league.name}</span>
          </Link>
        ))
        }
      </div>

    </div>
    
    
  )
}

export default Top20Leagues;