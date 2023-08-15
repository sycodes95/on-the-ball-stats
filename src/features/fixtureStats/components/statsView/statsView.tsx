import { Fixture } from "../../../homepage/types/types";
import { fixtureTimelineEventsImages } from "../../constants/constants";
import { hasFixtureStarted } from "../../utils/hasFixtureStarted";

type StatsViewProps = {
  fixture: Fixture;
}

function StatsView ({fixture}: StatsViewProps ) {

  return (
    
    <div className="flex flex-col items-center justify-center w-full gap-2 text-primary">
      {
      hasFixtureStarted(fixture) ?
      fixture.events?.map((ev, index) => (
        <div className="w-full gap-2 timeline-grid">
          {
          ev.team.id === fixture.teams.home.id &&
          
          <div className="flex items-center justify-end w-full gap-2">
            <span>{ev.detail}</span>
            {
            ev.detail && ev.type === 'Card' && 
            <img className="object-contain w-6 h-6" src={fixtureTimelineEventsImages[ev.detail]} alt="" />
            }
            {
            ev.detail && ev.type === 'subst' &&
            <img className="object-contain w-6 h-6" src={fixtureTimelineEventsImages['Substitution']} alt="" />
            }
          </div>
          }

          <div className="flex justify-center w-full col-start-2 text-white ">
            <span className="w-8 p-1 text-center rounded-md bg-slate-400">{ev.time.elapsed}'</span>
          </div>

          {
          ev.team.id === fixture.teams.away.id &&
          
          <div className="flex items-center justify-start w-full gap-2">
            
            {
            ev.detail && ev.type === 'Card' && 
            <img className="object-contain w-6 h-6" src={fixtureTimelineEventsImages[ev.detail]} alt="" />
            }
            {
            ev.detail && ev.type === 'subst' &&
            <img className="object-contain w-6 h-6" src={fixtureTimelineEventsImages['Substitution']} alt="" />
            }
            <span>{ev.detail}</span>
          </div>
          }
        
          
        </div>
      ))
      :
      <div>Match statistics will be updated once match has started.</div>
      }
    </div>
    
  )
}

export default StatsView;