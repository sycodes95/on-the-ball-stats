import { useEffect, useState } from "react";

import { getFixturesByDate } from "../../../../services/getFixturesByDate";
import { RotatingSquare } from "react-loader-spinner";
import { Link } from "react-router-dom";
import { Fixture } from "../../../../types/types";
import FixtureCards from "../../../../components/fixtures/fixtureCards";

type FixturesProps = {
  fixtures: Fixture[];
  setFixtures : React.Dispatch<React.SetStateAction<Fixture[] | undefined>>;
  
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
  },[fixturesDay])

  return (
  <div className="flex flex-col gap-4">
    <p className="w-full text-2xl rounded-sm font-display">FIXTURES</p>

    <div className="flex items-center gap-2">
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
      }
    </div>

    <div className="relative w-full h-full">
      <div className={`${isLoading ? 'flex' : 'hidden'}
      bg-stone-300 bg-opacity-70 z-10 absolute top-0 left-0 w-full h-full rounded-lg transition-all items-center justify-center
      `}>
        <div className="z-20 h-fit"></div>
      </div>
      <FixtureCards fixtures={fixtures}/>
    </div>
    
   
  </div>
  )
}

export default TopFixtures;
