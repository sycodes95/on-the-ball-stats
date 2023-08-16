import { Fixture } from "../../../homepage/types/types";
import { fixtureTimelineEventsImages } from "../../constants/constants";
import { hasFixtureStarted } from "../../utils/hasFixtureStarted";
import MatchStatistics from "./matchStatistics/matchStatistics";
import TimeLine from "./timeLine/timeLine";

type StatsViewProps = {
  fixture: Fixture;
}

function StatsView ({fixture}: StatsViewProps ) {
  console.log(fixture);
  return (
    
    <div className="flex flex-col items-center justify-center w-full gap-12 text-primary">
      {
      hasFixtureStarted(fixture) && fixture && fixture.statistics &&
      <MatchStatistics homeTeamStatistics={fixture.statistics[0]} awayTeamStatistics={fixture.statistics[1]} />
      }
      {
      hasFixtureStarted(fixture) && fixture &&
      <TimeLine fixture={fixture} />
      }
      
    
    </div>
    
  )
}

export default StatsView;