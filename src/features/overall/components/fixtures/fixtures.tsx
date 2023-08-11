import { Fixture } from "../../types/types";
import FixtureLeagueInfo from "./components/fixtureLeagueInfo";
import FixtureStatus from "./components/fixtureStatus";

type FixturesProps = {
  fixtures: Fixture[]
}

function Fixtures ({fixtures} : FixturesProps) {
  return (
    <div className="w-full">
      {
      fixtures.map((fixture, index) => (
        <div className="flex flex-col justify-center w-1/2 h-24 gap-2 p-2 text-xs transition-all shadow-md shadow-slate-300 text-primary hover:cursor-pointer hover:bg-slate-300 hover:bg-opacity-70" >
          
          <FixtureLeagueInfo leagueLogo={fixture.league.logo} leagueName={fixture.league.name}/>
          
          <div className="flex items-center gap-4"> 
            <div className="flex items-center justify-end h-8 gap-4 w-44">
              <p className="w-full text-right">{fixture.teams.home.name}</p>
              
              <div className="w-8 h-8">
                <img className="object-contain w-full h-full" src={fixture.teams.home.logo} alt="Home team logo"/>
              </div>
            </div>
            
            <div className="flex flex-col items-center w-20 gap-2">
              <FixtureStatus  fixtureStatus={fixture.fixture.status}/>
              {
              typeof fixture.goals.home === 'number' && typeof fixture.goals.away === 'number' &&
              <div className="flex items-center h-8 gap-2">
                <p className="flex items-center justify-center w-8 h-full text-lg font-semibold text-black border rounded-md shadow-md text-md shadow-slate-300 border-slate-300">{fixture.goals.home}</p>
                <p className="flex items-center justify-center w-8 h-full text-lg font-semibold text-black border rounded-md shadow-md border-slate-300 text-md shadow-slate-300">{fixture.goals.away}</p>
              </div>
              }
              
            </div>
            
            <div className="flex items-center h-8 gap-4 w-44">
              <div className="w-8 h-8">
                <img className="object-contain w-full h-full" src={fixture.teams.away.logo} alt="Away team logo"/>
              </div>
              <p className="w-full text-left">{fixture.teams.away.name}</p>
            </div>

          </div>

          
        </div>
      ))
      }
    </div>
  )
}

export default Fixtures;
