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
    
    <div className="flex flex-col items-center justify-center w-full h-full gap-12 text-primary">
      {
      fixture && fixture.statistics && hasFixtureStarted(fixture) && 
      <MatchStatistics homeTeamStatistics={fixture.statistics[0]} awayTeamStatistics={fixture.statistics[1]} />
      }
      {
      fixture && !hasFixtureStarted(fixture) &&
      <div className="flex items-center justify-center flex-grow h-full">Match statistics will be updated once match has started.</div>
      }
      
    
    </div>
    
  )
}

export default StatsView;