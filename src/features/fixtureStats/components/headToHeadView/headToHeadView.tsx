import { Fixture } from "../../../homepage/types/types";
import { formatYMD } from "../../../../utils/formatYMD";
import H2hBasicStats from "../h2HBasicStats/h2HBasicStats";

type HeadToHeadViewProps = {
  headToHeadFixtures: Fixture[] | null;
};


function HeadToHeadView ({headToHeadFixtures} : HeadToHeadViewProps) {
  return (
    <div className="flex flex-col justify-center w-full gap-2 p-2 rounded-sm border-slate-300">

    {
    headToHeadFixtures && headToHeadFixtures.length > 0 &&
    <H2hBasicStats headToHeadFixtures={headToHeadFixtures}/>
    }
    {
    headToHeadFixtures && headToHeadFixtures.length === 0 &&
    <span className="flex items-center gap-4 p-2 rounded-md shadow-lg md:gap-8 shadow-slate-300">
      No previous matches between teams.
    </span>
    }
    {
    headToHeadFixtures && headToHeadFixtures.length > 0 &&
    headToHeadFixtures.map((fixture, index) => {
      if(new Date(fixture.fixture.date) < new Date()){
        return (
          <div className="flex items-center gap-4 p-2 rounded-md shadow-lg md:gap-8 shadow-slate-300" key={index}>
            <div className="flex items-center gap-2 md:w-32">
              <img className="object-contain w-4 h-4" src={fixture.league.logo} />
              <span className="hidden md:flex">{fixture.league.name}</span>
            </div>

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

        )
      }

    }
      
    )
    }
  </div>
  )
}


export default HeadToHeadView;