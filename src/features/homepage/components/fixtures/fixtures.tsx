import { useEffect, useState } from "react";
import { Fixture } from "../../types/types";
import FixtureLeagueInfo from "./components/fixtureLeagueInfo";
import FixtureScore from "./components/fixtureScore";
import FixtureStatus from "./components/fixtureStatus";
import FixtureTeam from "./components/fixtureTeam";
import { getFixturesByDate } from "../../../../services/getFIxturesByDate";

type FixturesProps = {
  fixtures: Fixture[];
  setFixtures: (fixtures: Fixture[]) => void;
}

function Fixtures ({fixtures, setFixtures} : FixturesProps) {
  const defaultfixturesDisplayAmount : number = 6
  const [fixturesDisplayAmount, setFixturesDisplayAmount] = useState(defaultfixturesDisplayAmount)
  const [fixturesDay, setFixturesDay] = useState('today')

  useEffect(()=> {
    const fixtureDate = new Date();
    // if(fixturesDay === 'yesterday'){
    //   fixtureDate.setDate(fixtureDate.getDate() - 1);
    // } else if (fixturesDay === 'tomorrow'){
    //   fixtureDate.setDate(fixtureDate.getDate() + 1);
    // }
    console.log(fixtureDate);
    getFixturesByDate(fixturesDay).then(fixtures => setFixtures(fixtures))
  },[fixturesDay])

  return (
    <div className="flex flex-col gap-4">
      <p className="w-full text-2xl rounded-sm font-display">FIXTURES</p>
      <div className="flex gap-2 text-xs border rounded-sm w-fit border-slate-300">
        <button className={`p-2 ${fixturesDay === 'yesterday' && 'bg-slate-300'}`}
         onClick={()=> setFixturesDay('yesterday')}
         >Yesterday</button>
        <button 
        className={`p-2 ${fixturesDay === 'today' && 'bg-slate-300'}`} 
        onClick={()=> setFixturesDay('today')}
        >Today</button>
        <button className={`p-2 ${fixturesDay === 'tomorrow' && 'bg-slate-300'}`}
        onClick={()=> setFixturesDay('tomorrow')}
        >Tomorrow</button>
      </div>
      <ul className="grid w-full grid-cols-1 gap-2 lg:grid-cols-2">
      {
      fixtures.map((fixture, index) => {
        if (index < fixturesDisplayAmount) {
          return (
            <li className="relative flex flex-col items-center justify-center w-full gap-2 p-2 text-xs transition-all border rounded-sm shadow-md h-28 border-slate-300 shadow-slate-300 text-primary hover:cursor-pointer hover:bg-slate-300 hover:bg-opacity-70" >
              
              <FixtureLeagueInfo 
              leagueLogo={fixture.league.logo} 
              leagueName={fixture.league.name}/>
              
              <div className="justify-center w-full h-full gap-2 fixture-grid"> 
                <FixtureTeam 
                teamLogo={fixture.teams.home.logo} 
                teamName={fixture.teams.home.name} 
                side={`home`}/>
                
                <div className="flex flex-col items-center justify-center w-full gap-2">
                  <FixtureStatus  
                  fixtureStatus={fixture.fixture.status} 
                  fixtureDate={fixture.fixture.date} 
                  fixturePenalties={fixture.score.penalty}/>
                  {
                    typeof fixture.goals.home === 'number' && typeof fixture.goals.away === 'number' &&
                    <FixtureScore 
                    homeGoals={fixture.goals.home} 
                    awayGoals={fixture.goals.away}/>
                  }
                </div>
                
                <FixtureTeam 
                teamLogo={fixture.teams.away.logo} 
                teamName={fixture.teams.away.name} 
                side={`away`}/>
              </div>
            </li>
          )
        }
      })
      }
    </ul>

    <div className="flex flex-col w-full gap-2">
    {
    fixtures.length > fixturesDisplayAmount && 
    <div className="w-full">
      <button className="w-full h-8 text-xl text-white bg-opacity-50 rounded-sm bg-slate-600 font-display" onClick={()=> setFixturesDisplayAmount(() => fixturesDisplayAmount + defaultfixturesDisplayAmount)}>
        SHOW MORE
      </button>
    </div>    
    }

    {
    (defaultfixturesDisplayAmount * 2) <= fixturesDisplayAmount && 
    <div className="w-full">
      <button className="w-full h-8 text-xl text-white bg-opacity-50 rounded-sm bg-slate-600 font-display" onClick={()=> setFixturesDisplayAmount(() => defaultfixturesDisplayAmount)}>
        SHOW LESS
      </button>
    </div>
    }

    </div>
    
    

  </div>
  )
}

export default Fixtures;
