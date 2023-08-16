import { Fixture } from "../../../homepage/types/types";
import { fixtureTimelineEventsImages } from "../../constants/constants";
import { hasFixtureStarted } from "../../utils/hasFixtureStarted";
import TimeLine from "./timeLine/timeLine";

type StatsViewProps = {
  fixture: Fixture;
}

function StatsView ({fixture}: StatsViewProps ) {

  return (
    
    <div className="flex flex-col items-center justify-center w-full gap-2 text-primary">
      <TimeLine fixture={fixture} />
    </div>
    
  )
}

export default StatsView;