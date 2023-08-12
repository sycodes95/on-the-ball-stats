import { useEffect, useState } from "react";
import { formatYMDHMS } from "../../../../../utils/formatYMDHMS";
import { getTimeDifference } from "../../../../../utils/getTImeDIfference";

type FixtureStatusProps = {
  fixtureStatus: {
    elapsed: number | null;
    long: string | null;
    short: string | null;
  },
  fixtureDate: string;
}


function FixtureStatus ({ fixtureStatus, fixtureDate }: FixtureStatusProps) {
  const [timeUntilFixtureStart, setTimeUntilFixtureStart] = useState< null | string >(null)
  
  const fixtureStartDate = new Date(fixtureDate)
  const userCurrentDate = new Date()
  console.log(fixtureDate);
  useEffect(()=> {
    if(fixtureStatus.short === 'NS') {
      console.log(timeUntilFixtureStart);
      setTimeUntilFixtureStart(getTimeDifference(fixtureStartDate, userCurrentDate))
    }
  },[])

  console.log(fixtureStartDate);
  console.log(userCurrentDate);
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
      fixtureStatus.short !== 'FT' && fixtureStatus.short !== 'NS' && fixtureStatus.short !== 'AET' &&
      <div className="flex items-center justify-center w-full gap-2 ">
        <p className="w-2 h-2 bg-red-600 rounded-full"></p>
        <p>Live</p>
      </div>
      
      }
      {
      fixtureStatus.short === 'NS' && 
      <p>Starts in {timeUntilFixtureStart}</p>
      }
    </div>
  )
}

export default FixtureStatus;