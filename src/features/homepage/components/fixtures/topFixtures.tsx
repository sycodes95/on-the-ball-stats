import { useEffect, useState } from "react";

import { getFixturesByDate } from "../../../../services/getFixturesByDate";
import { RotatingSquare } from "react-loader-spinner";
import { Fixture } from "../../../../types/types";
import FixtureCards from "../../../../components/fixtures/fixtureCards";

type FixturesProps = {
  fixtures: Fixture[];
  setFixtures : React.Dispatch<React.SetStateAction<Fixture[] | []>>;
  
}

function TopFixtures ({fixtures, setFixtures} : FixturesProps) {
  
  const [fixturesDay, setFixturesDay] = useState('')
  const [isLoading, setIsLoading] = useState(false)

  const fixturesDayOptions = [
    'yesterday',
    'today',
    'tomorrow'
  ]

  useEffect(()=> {
    if(fixturesDay){
      setIsLoading(true)
      getFixturesByDate(fixturesDay).then(fixtures => {
        setFixtures(fixtures)
        setIsLoading(false)
      })
    }
  },[fixturesDay, setFixtures])

  return (
  <div className="flex flex-col gap-4 p-2">
    <div className="p-1 border-b border-stone-300">
      <span className="text-xl font-display">
        TOP FIXTURES
      </span>
    </div>

    <div className="flex items-center justify-center gap-2 md:justify-start">
      <div className="flex gap-2 text-xs font-semibold w-fit">
        {
        fixturesDayOptions.map((day, index) => (
        <button 
        className={` text-primary rounded-2xl p-2 w-20 h-8 flex items-center justify-center
        ${fixturesDay === day && 'bg-black text-white '}
        ${!fixturesDay && day === 'today' && 'bg-black text-white '}
        `}
        onClick={()=> fixturesDay !== day && setFixturesDay(day)}
        key={index}
        >{`${day.charAt(0).toUpperCase()}${day.slice(1)}`}</button> 
        ))
        }
      </div>
      {
      isLoading && 
      <div className="hidden md:contents">
        <RotatingSquare
        height="32"
        width="32"
        color="#999999"
        ariaLabel="rotating-square-loading"
        strokeWidth="4"
        wrapperStyle={{}}
        wrapperClass=""
        visible={true}
        />
      </div>
      
      
      }
    </div>

    <div className="relative w-full h-full ">
      <div className={`${isLoading ? 'flex' : 'hidden'}
      bg-stone-200 bg-opacity-70 z-10 absolute top-0 left-0 w-full h-full rounded-lg transition-all items-center justify-center
      `}>
        <div className="z-20 h-fit"></div>
      </div>
      {
      fixtures.length > 0 ? 
      <FixtureCards fixtures={fixtures}/>
      :
      <span className="p-2">No fixtures available.</span>
      }
      
    </div>
    
   
  </div>
  )
}

export default TopFixtures;
