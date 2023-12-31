import { Fixture } from "../../../../types/types";
import H2hBasicStats from "./h2HBasicStats/h2HBasicStats";
import H2HFixturesList from "./h2HLiItems/h2HFixturesList";

type HeadToHeadViewProps = {
  headToHeadFixtures: Fixture[] | null;
};


function HeadToHeadView ({headToHeadFixtures} : HeadToHeadViewProps) {
  return (
    <div className="flex flex-col w-full gap-8 p-2 rounded-sm ">

    {
    headToHeadFixtures && headToHeadFixtures.length > 0 &&
    <H2hBasicStats headToHeadFixtures={headToHeadFixtures}/>
    }
    {
    headToHeadFixtures && headToHeadFixtures.length === 0 &&
    <span className="flex items-center justify-center w-full h-full gap-4 p-2 rounded-md shadow-lg md:gap-8 ">
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