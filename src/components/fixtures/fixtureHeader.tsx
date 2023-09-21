import { Link } from "react-router-dom";
import { getURLFriendlyString } from "../../utils/getURLFriendlyString";
import LazyLoad from 'react-lazy-load';

type FixtureHeaderProps = {
  leagueLogo: string;
  leagueName: string;
  countryFlag: string;
  fixtureDate?: string;
  leagueId?: number;
}

function FixtureHeader ({leagueLogo, leagueName, fixtureDate, leagueId} : FixtureHeaderProps) {
  return (
    <div className="flex justify-between w-full gap-2 ">

      <div className="flex items-center gap-2">
        {
        leagueId ? 
        <Link className="relative flex w-full gap-1 overflow-hidden hover:opacity-70" to={`/league/${leagueId}/${getURLFriendlyString(leagueName)}`}>
          <LazyLoad offset={100}>
            <img className="object-contain w-4 h-4" src={leagueLogo} alt="team-icon"/>
          </LazyLoad>
          <span className="flex items-center pl-2 pr-2 text-xs font-semibold text-opacity-0 rounded-md whitespace-nowrap ">{leagueName.toUpperCase()}</span>
          
        </Link>
        :
        <div className="relative flex w-full gap-1 overflow-hidden" >
          <img className="object-contain w-4 h-4" src={leagueLogo} alt="team-icon"/>
          <span className="flex items-center pl-2 pr-2 text-xs font-semibold text-opacity-0 rounded-md ">{leagueName.toUpperCase()}</span>
          
        </div>
        }
        
      </div>
      
      <div className="flex items-center gap-2">
        {
        fixtureDate &&
        <span className="text-black whitespace-nowrap">{fixtureDate}</span>
        }
        
      </div>
      
    </div>
  )
}

export default FixtureHeader;