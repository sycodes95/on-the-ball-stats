import { useEffect, useState } from "react";
import { getTimeDifference } from "../../../../../utils/getTImeDIfference";

type FixtureStatusProps = {
  fixtureStatus: {
    elapsed: number | null;
    long: string | null;
    short: string | null;
  };
  fixtureDate: string;
  fixturePenalties: {
    home: number | null;
    away: number | null;
  };
}


function FixtureStatus ({ fixtureStatus, fixtureDate, fixturePenalties }: FixtureStatusProps) {
  const [timeUntilFixtureStart, setTimeUntilFixtureStart] = useState< null | string >(null)
  useEffect(()=> {

  },[])
  
  useEffect(()=> {
    if(fixtureStatus.short === 'NS') {
      const fixtureStartDate = new Date(fixtureDate)
      const userCurrentDate = new Date()
      setTimeUntilFixtureStart(getTimeDifference(fixtureStartDate, userCurrentDate))
    }
  },[fixtureStatus])

 
  return (
    <div className="flex items-center">
      {
      fixtureStatus.short === 'FT' && 
      <p>FT</p>
      }
      {
      fixtureStatus.short === 'AET' && 
      <p>AET</p>
      }
      {
      fixtureStatus.short === 'PST' && 
      <p className="text-orange-600">Postponed</p>
      }

      {
      fixtureStatus.short === 'PEN' && 
      <div className="flex gap-2">
        <p className="text-orange-600">{fixturePenalties.home}</p>
        <p className="text-center">FT PEN</p>
        <p className="text-orange-600">{fixturePenalties.away}</p>
      </div>
      }
      {
      fixtureStatus.short !== 'FT' && 
      fixtureStatus.short !== 'NS' && 
      fixtureStatus.short !== 'AET' &&
      fixtureStatus.short !== 'PEN' &&
      fixtureStatus.short !== 'PST' &&
      <div className="flex items-center justify-center w-full gap-2 ">
        <p className="w-2 h-2 bg-red-600 rounded-full"></p>
        <p>Live</p>
      </div>
      }
      {
      fixtureStatus.short === 'NS' && 
      <p className="text-center">Kickoff in {timeUntilFixtureStart}</p>
      }
    </div>
  )
}

export default FixtureStatus;