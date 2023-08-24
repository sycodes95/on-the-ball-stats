import { useState } from "react";
import ShowLessButton from "../ui/showLessButton";
import ShowMoreButton from "../ui/showMoreButton";
import { Fixture } from "../../types/types";
import FixtureHeader from "./fixtureHeader";
import FixtureTeam from "./fixtureTeam";
import FixtureStatus from "./fixtureStatus";
import FixtureScore from "./fixtureScore";
import { Link } from "react-router-dom";
import { formatYMD } from "../../utils/formatYMD";

type FixturesProps = {
  fixtures: Fixture[];
}

function FixtureCards ({fixtures} : FixturesProps) {
  const defaultfixturesDisplayAmount : number = 6
  const [fixturesDisplayAmount, setFixturesDisplayAmount] = useState(defaultfixturesDisplayAmount)

  return (
    <div className="flex flex-col gap-2">
      <div className={`relative grid w-full rounded-sm grid-cols-1 gap-2 lg:grid-cols-2 `}>
      {
      fixtures.map((fixture, index) => {
        if (index < fixturesDisplayAmount) {
          return (
            <Link className="relative flex flex-col items-center justify-center w-full gap-2 p-2 text-xs transition-all bg-opacity-80 bg-stone-300 rounded-xl hover:shadow-md hover:shadow-stone-300 h-28 text-primary hover:cursor-pointer hover:bg-opacity-100 "
            to={`/fixture-statistics/${fixture.fixture.id}`}
            >
              <div className="flex items-center justify-between w-full">
              <FixtureHeader
              leagueLogo={fixture.league.logo} 
              leagueName={fixture.league.name}
              countryFlag={fixture.league.flag}
              fixtureDate={formatYMD(new Date(fixture.fixture.date))}
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
        (defaultfixturesDisplayAmount * 2) <= fixturesDisplayAmount &&
        <ShowLessButton onClick={()=> setFixturesDisplayAmount(() => defaultfixturesDisplayAmount)}/>
        }
      </div>
    </div>
  )
}
export default FixtureCards;