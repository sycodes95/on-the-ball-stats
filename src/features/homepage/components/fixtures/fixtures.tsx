import { useEffect, useState } from "react";
import { Fixture } from "../../types/types";
import FixtureLeagueInfo from "./components/fixtureLeagueInfo";
import FixtureScore from "./components/fixtureScore";
import FixtureStatus from "./components/fixtureStatus";
import FixtureTeam from "./components/fixtureTeam";
import { getFixturesByDate } from "../../../../services/getFixturesByDate";
import { RotatingSquare } from "react-loader-spinner";
import { Link } from "react-router-dom";
import FixtureHeader from "./components/fixtureLeagueInfo";

function Fixtures () {
  const defaultfixturesDisplayAmount : number = 6
  const [fixtures, setFixtures] = useState<Fixture[]>([])
  const [fixturesDisplayAmount, setFixturesDisplayAmount] = useState(defaultfixturesDisplayAmount)
  const [fixturesDay, setFixturesDay] = useState('today')
  const [isLoading, setIsLoading] = useState(false)

  const fixturesDayOptions = [
    'yesterday',
    'today',
    'tomorrow'
  ]

  useEffect(()=> {
    setIsLoading(true)
    getFixturesByDate(fixturesDay).then(fixtures => {
      setFixtures(fixtures)
      setIsLoading(false)
    })
  },[fixturesDay])

  return (
    <div className="flex flex-col gap-4">
      <p className="w-full text-2xl rounded-sm font-display">FIXTURES</p>
      <div className="flex items-center gap-2">
        <div className="flex gap-2 text-xs font-semibold w-fit">
          {
          fixturesDayOptions.map((day, index) => (
          <button 
          className={`border border-slate-300 text-primary rounded-sm p-2 w-20 ${fixturesDay === day && 'bg-slate-300 '}`}
          onClick={()=> setFixturesDay(day)}
          key={index}
          >{`${day.charAt(0).toUpperCase()}${day.slice(1)}`}</button> 
          ))
          }
        </div>
        {
        isLoading && 
        <RotatingSquare
        height="32"
        width="32"
        color="#b8c5d4"
        ariaLabel="rotating-square-loading"
        strokeWidth="4"
        wrapperStyle={{}}
        wrapperClass=""
        visible={true}
      />
        }
      </div>

      
      <div className="grid w-full grid-cols-1 gap-2 lg:grid-cols-2">
      {
      fixtures.map((fixture, index) => {
        if (index < fixturesDisplayAmount) {
          return (
            <Link className="relative flex flex-col items-center justify-center w-full gap-2 p-2 text-xs transition-all border rounded-sm shadow-md h-28 border-slate-300 shadow-slate-300 text-primary hover:cursor-pointer hover:bg-emerald-100 hover:bg-opacity-70"
            to={`/fixture-statistics/${fixture.fixture.id}`}
            >
              <div className="flex items-center justify-between w-full">
              <FixtureHeader
              leagueLogo={fixture.league.logo} 
              leagueName={fixture.league.name}
              />

              </div>
              
              
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
            </Link>
          )
        }
      })
      }
    </div>
    
    <div className="flex flex-col w-full gap-2">
      {
      fixtures.length > fixturesDisplayAmount && 
      <div className="w-full">
        <button className="w-full h-8 text-xl border rounded-sm shadow-md shadow-slate-300 text-slate-400 border-slate-300 font-display hover:bg-slate-300 hover:bg-opacity-70" onClick={()=> setFixturesDisplayAmount(() => fixturesDisplayAmount + defaultfixturesDisplayAmount)}>
          SHOW MORE
        </button>
      </div>    
      }

      {
      (defaultfixturesDisplayAmount * 2) <= fixturesDisplayAmount && 
      <div className="w-full">
        <button className="w-full h-8 text-xl border rounded-sm shadow-md shadow-slate-300 text-slate-400 border-slate-300 font-display hover:bg-slate-300 hover:bg-opacity-70" onClick={()=> setFixturesDisplayAmount(() => defaultfixturesDisplayAmount)}>
          SHOW LESS
        </button>
      </div>
      }
    </div>
    
    

  </div>
  )
}

export default Fixtures;
