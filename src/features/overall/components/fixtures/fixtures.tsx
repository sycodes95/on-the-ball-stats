import { Fixture } from "../../types/types";
import FixtureLeagueInfo from "./components/fixtureLeagueInfo";
import FixtureStatus from "./components/fixtureStatus";
import FixtureTeam from "./components/fixtureTeam";

type FixturesProps = {
  fixtures: Fixture[]
}

function Fixtures ({fixtures} : FixturesProps) {
  return (
    <ul className="grid w-full grid-cols-1 gap-2 lg:grid-cols-2">
      {
      fixtures.map((fixture, index) => (
        <li className="relative flex flex-col items-center justify-center w-full h-full gap-2 p-2 text-xs transition-all border rounded-md shadow-md border-slate-300 shadow-slate-300 text-primary hover:cursor-pointer hover:bg-slate-300 hover:bg-opacity-70" >
          
          <FixtureLeagueInfo leagueLogo={fixture.league.logo} leagueName={fixture.league.name}/>
          
          <div className="justify-center w-full h-full gap-4 fixture-grid"> 

            <FixtureTeam teamLogo={fixture.teams.home.logo} teamName={fixture.teams.home.name} side={`home`}/>
            
            <div className="flex flex-col items-center w-full gap-2">
              <FixtureStatus  fixtureStatus={fixture.fixture.status}/>
              {
              typeof fixture.goals.home === 'number' && typeof fixture.goals.away === 'number' &&
              <div className="flex items-center h-8 gap-2">
                <p className="flex items-center justify-center w-8 h-full text-lg font-semibold text-black border rounded-md shadow-md text-md shadow-slate-300 border-slate-300">{fixture.goals.home}</p>
                <p className="flex items-center justify-center w-8 h-full text-lg font-semibold text-black border rounded-md shadow-md border-slate-300 text-md shadow-slate-300">{fixture.goals.away}</p>
              </div>
              }
              
            </div>
            
            <FixtureTeam teamLogo={fixture.teams.away.logo} teamName={fixture.teams.away.name} side={`away`}/>
            
              {/* <div className="flex items-center justify-end w-full h-8 gap-4 text-right ">
                <span className="w-24 min-w-min">{fixture.teams.home.name}</span>
                
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
              
              <div className="flex items-center justify-start w-full h-8 gap-4">
                <div className="w-8 h-8">
                  <img className="object-contain w-full h-full" src={fixture.teams.away.logo} alt="Away team logo"/>
                </div>
                <span className="w-full overflow-hidden text-left whitespace-nowrap text-ellipsis min-w-min">{fixture.teams.away.name}</span>
              </div> */}

          </div>

          
        </li>
      ))
      }
    </ul>
  )
}

export default Fixtures;
