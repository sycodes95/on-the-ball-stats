import { Fixture } from "../../../homepage/types/types";
import { formatYMD } from "../../../../utils/formatYMD";
import H2hBasicStats from "./h2HBasicStats/h2HBasicStats";
import H2HFixturesList from "./h2HLiItems/h2HFixturesList";

type HeadToHeadViewProps = {
  headToHeadFixtures: Fixture[] | null;
};


function HeadToHeadView ({headToHeadFixtures} : HeadToHeadViewProps) {
  return (
    <div className="flex flex-col justify-center w-full gap-8 p-2 rounded-sm ">

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
    <div>
    {
    headToHeadFixtures && headToHeadFixtures.length > 0 &&
    <H2HFixturesList headToHeadFixtures={headToHeadFixtures}/>
    }
    </div>
  </div>
  )
}


export default HeadToHeadView;