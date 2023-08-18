import { useEffect, useState } from "react";
import { Fixture } from "../../types/types";
import FixtureScore from "./components/fixtureScore";
import FixtureStatus from "./components/fixtureStatus";
import FixtureTeam from "./components/fixtureTeam";
import { getFixturesByDate } from "../../../../services/getFixturesByDate";
import { Oval, RotatingSquare } from "react-loader-spinner";
import { Link } from "react-router-dom";
import FixtureHeader from "./components/fixtureHeader";
import ShowMoreButton from "../../../../components/ui/showMoreButton";
import ShowLessButton from "../../../../components/ui/showLessButton";

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
      setFixturesDisplayAmount(defaultfixturesDisplayAmount)
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
          className={` text-primary rounded-2xl p-2 w-20 ${fixturesDay === day && 'bg-emerald-600 text-white '}`}
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

      
      <div className={`relative grid w-full rounded-sm grid-cols-1 gap-2 lg:grid-cols-2 ${isLoading && 'bg-slate-300 bg-opacity-70'}`}>
      
        <div className={`${isLoading ? 'flex' : 'hidden'}
        bg-gray-300 bg-opacity-70 z-10 absolute top-0 left-0 w-full h-full rounded-lg transition-all items-center justify-center
        `}>
          <div className="z-20 h-fit"></div>
        </div>
      {
      fixtures.map((fixture, index) => {
        if (index < fixturesDisplayAmount) {
          return (
            <Link className="relative flex flex-col items-center justify-center w-full gap-2 p-2 text-xs transition-all border border-gray-300 rounded-xl hover:shadow-md hover:shadow-gray-300 h-28 text-primary hover:cursor-pointer hover:bg-gray-300 hover:bg-opacity-80 "
            to={`/fixture-statistics/${fixture.fixture.id}`}
            >
              <div className="flex items-center justify-between w-full">
              <FixtureHeader
              leagueLogo={fixture.league.logo} 
              leagueName={fixture.league.name}
              countryFlag={fixture.league.flag}
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
      <ShowMoreButton onClick={()=> setFixturesDisplayAmount(() => fixturesDisplayAmount + defaultfixturesDisplayAmount)}/>
      }
      {
      (defaultfixturesDisplayAmount * 2) <= fixturesDisplayAmount && fixtures.length > fixturesDisplayAmount &&
      <ShowLessButton onClick={()=> setFixturesDisplayAmount(() => defaultfixturesDisplayAmount)}/>
      }
    </div>
    
    

  </div>
  )
}

export default Fixtures;
