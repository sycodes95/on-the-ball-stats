import { formatYMD } from "../../../../../utils/formatYMD";
import { useEffect } from "react";
import { Fixture } from "../../../../../types/types";

type H2HFixturesListProps = {
  headToHeadFixtures: Fixture[]
}

function H2HFixturesList ({headToHeadFixtures} : H2HFixturesListProps) {
  useEffect(() => {
  },[headToHeadFixtures])
  return (
    <div className="flex flex-col w-full">
     <span className="p-2 font-semibold">Last {headToHeadFixtures.length} {headToHeadFixtures.length > 1 ? 'Matches' : 'Match'}</span>
      {
      headToHeadFixtures.map((fixture, index) => (
      <div className="flex items-center gap-4 p-2 border-b border-opacity-30 border-stone-400 md:gap-8" key={index}>
        <div  className="flex items-center gap-2 md:w-32 ">
          <img className="object-contain w-4 h-4" src={fixture.league.logo} />
          <span className="hidden md:flex">{fixture.league.name}</span>
        </div>
        {/* {
        fixture.league.country !== 'World' ?
        <Link to={`/leagues/${fixture.league.id}`} className="flex items-center gap-2 md:w-32 hover:underline">
          <img className="object-contain w-4 h-4" src={fixture.league.logo} />
          <span className="hidden md:flex">{fixture.league.name}</span>
        </Link>
        :
        <div  className="flex items-center gap-2 md:w-32 ">
          <img className="object-contain w-4 h-4" src={fixture.league.logo} />
          <span className="hidden md:flex">{fixture.league.name}</span>
        </div>
        } */}
        

        <div className="flex items-center w-24 gap-2 md:w-32">
          {/* <span className="">{formatYMD(new Date(fixture.fixture.date)).slice(2)}</span> */}
          <span className="">{formatYMD(new Date(fixture.fixture.date))}</span>
        </div>
        {
        fixture.fixture.status.short !== 'CANC' ?
        <div 
        onClick={()=> window.location.href = `/fixture-statistics/${fixture.fixture.id}`} 
        className="items-center justify-center hidden gap-2 whitespace-nowrap md:flex hover:opacity-70 hover:cursor-pointer">
          <span className="flex justify-end min-w-fit w-44">{fixture.teams.home.name}</span>
          <div className="flex items-center justify-center w-12 gap-1 pl-2 pr-2 font-semibold text-white rounded-md bg-slate-400">
            <span>{fixture.goals.home}</span>  
            <span>-</span>
            <span>{fixture.goals.away}</span>
          </div>
          <span className="flex justify-start w-44 min-w-fit">{fixture.teams.away.name}</span>
        </div>
        :
        <div className="items-center justify-center hidden text-orange-600 md:flex">
          <span>Match Cancelled</span>
        </div>
        }

        {
        fixture.fixture.status.short !== 'CANC' ?
        <div className="flex items-center justify-center gap-2 whitespace-nowrap md:hidden">

          <div className="flex flex-col items-center w-4 p-1 rounded-md bg-slate-400">
            <span className="justify-center font-semibold text-white rounded-md">{fixture.goals.home}</span>
            <span className="justify-center font-semibold text-white rounded-md">{fixture.goals.away}</span>
          </div>

          <div className="flex flex-col gap-1">
            <span className="flex justify-start min-w-fit md:w-44">{fixture.teams.home.name}</span>
            <span className="flex justify-start md:w-44 min-w-fit">{fixture.teams.away.name}</span>
          </div>
          
        </div>
        :
        <div className="flex items-center justify-center text-orange-600 md:hidden">
          <span>Match Cancelled</span>
        </div>
        }
        
      </div>
      ))
      }
    </div>
  )
}

export default H2HFixturesList;