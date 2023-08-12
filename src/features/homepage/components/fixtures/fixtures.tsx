import { useState } from "react";
import { Fixture } from "../../types/types";
import FixtureLeagueInfo from "./components/fixtureLeagueInfo";
import FixtureScore from "./components/fixtureScore";
import FixtureStatus from "./components/fixtureStatus";
import FixtureTeam from "./components/fixtureTeam";

type FixturesProps = {
  fixtures: Fixture[]
}

function Fixtures ({fixtures} : FixturesProps) {
  const defaultFixturesToDisplay : number = 6
  const [fixturesToDisplay, setFixturesToDisplay] = useState(defaultFixturesToDisplay)

  console.log(fixtures);
  return (
    <div className="flex flex-col gap-4">
      <p className="w-full text-2xl rounded-sm font-display">FIXTURES</p>
      <ul className="grid w-full grid-cols-1 gap-2 lg:grid-cols-2">
      {
      fixtures.map((fixture, index) => {
        if (index < fixturesToDisplay) {
          return (
            <li className="relative flex flex-col items-center justify-center w-full gap-2 p-2 text-xs transition-all border rounded-sm shadow-md h-28 border-slate-300 shadow-slate-300 text-primary hover:cursor-pointer hover:bg-slate-300 hover:bg-opacity-70" >
              
              <FixtureLeagueInfo leagueLogo={fixture.league.logo} leagueName={fixture.league.name}/>
              
              <div className="justify-center w-full h-full gap-4 fixture-grid"> 
                <FixtureTeam teamLogo={fixture.teams.home.logo} teamName={fixture.teams.home.name} side={`home`}/>
                
                <div className="flex flex-col items-center justify-center w-full gap-2">
                  <FixtureStatus  fixtureStatus={fixture.fixture.status} fixtureDate={fixture.fixture.date}/>
                  {
                    typeof fixture.goals.home === 'number' && typeof fixture.goals.away === 'number' &&
                    <FixtureScore homeGoals={fixture.goals.home} awayGoals={fixture.goals.away}/>
                  }
                </div>
                
                <FixtureTeam teamLogo={fixture.teams.away.logo} teamName={fixture.teams.away.name} side={`away`}/>
              </div>
            </li>
          )
        }
      })
      }
    </ul>

    <div className="flex flex-col w-full gap-2">
    {
    fixtures.length > fixturesToDisplay && 
    <div className="w-full">
      <button className="w-full h-8 text-xl text-white rounded-sm bg-opacity-70 bg-primary font-display" onClick={()=> setFixturesToDisplay(() => fixturesToDisplay + defaultFixturesToDisplay)}>
        SHOW MORE
      </button>
    </div>    
    }

    {
    (defaultFixturesToDisplay * 2) <= fixturesToDisplay && 
    <div className="w-full">
      <button className="w-full h-8 text-xl text-white rounded-sm bg-opacity-70 bg-primary font-display" onClick={()=> setFixturesToDisplay(() => defaultFixturesToDisplay)}>
        SHOW LESS
      </button>
    </div>
    }

    </div>
    
    

  </div>
  )
}

export default Fixtures;
