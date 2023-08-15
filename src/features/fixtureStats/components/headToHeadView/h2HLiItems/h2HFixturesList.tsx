import { Link } from "react-router-dom";
import { formatYMD } from "../../../../../utils/formatYMD";
import { Fixture } from "../../../../homepage/types/types";

type H2HFixturesListProps = {
  headToHeadFixtures: Fixture[]
}

function H2HFixturesList ({headToHeadFixtures} : H2HFixturesListProps) {
  return (
    <div className="flex flex-col w-full">
     <span className="p-2 font-semibold">Last {headToHeadFixtures.length} Matches</span>
      {
      headToHeadFixtures.map((fixture, index) => (
      <div className="flex items-center gap-4 p-2 rounded-md shadow-md md:gap-8 shadow-slate-300" key={index}>
        <Link to={`/leagues/${fixture.league.id}`} className="flex items-center gap-2 md:w-32 hover:underline">
          <img className="object-contain w-4 h-4" src={fixture.league.logo} />
          <span className="hidden md:flex">{fixture.league.name}</span>
        </Link>

        <div className="flex items-center w-24 gap-2 md:w-32">
          {/* <span className="">{formatYMD(new Date(fixture.fixture.date)).slice(2)}</span> */}
          <span className="">{formatYMD(new Date(fixture.fixture.date))}</span>
        </div>

        <div className="items-center justify-center hidden gap-2 whitespace-nowrap md:flex">
          <span className="flex justify-end min-w-fit w-44">{fixture.teams.home.name}</span>
          <div className="flex items-center justify-center w-12 gap-1 pl-2 pr-2 font-semibold text-white rounded-md bg-slate-400">
            <span>{fixture.goals.home}</span>  
            <span>-</span>
            <span>{fixture.goals.away}</span>
          </div>
          <span className="flex justify-start w-44 min-w-fit">{fixture.teams.away.name}</span>
        </div>

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
        
      </div>
      ))
      }
    </div>
  )
}

export default H2HFixturesList;