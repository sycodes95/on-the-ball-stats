import { Link } from "react-router-dom";

type LeagueLinkProps = {
  leagueId: number;
  leagueName: string;
  leagueLogo: string;
  countryFlag: string;
};

function LeagueLink ({ leagueId, leagueName, leagueLogo, countryFlag }: LeagueLinkProps) {
  
  return (
    <Link className="flex items-center justify-between gap-2 p-2 rounded-md shadow-md shadow-slate-300 hover:cursor-pointer hover:bg-gray-300 hover:bg-opacity-80" to={`/leagues/${leagueId}`}>
      <div className="flex items-center gap-2">
        
        <div className="flex justify-center w-16 h-10">
          <img className="object-contain w-full h-full" src={leagueLogo}/>
        </div>
        <p className="font-semibold text-gray-500"> {leagueName}</p>
      </div>
      <div className="flex items-center gap-2">
        <div className="flex justify-center w-16">
          <img className="h-6 rounded-md" src={countryFlag}/>
        </div>
      </div>      

    </Link>
  )
}

export default LeagueLink;