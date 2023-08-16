import { Fixture } from "../../../../homepage/types/types";
import { fixtureTimelineEventsImages } from "../../../constants/constants";
import { hasFixtureStarted } from "../../../utils/hasFixtureStarted";

type TimeLineProps = {
  fixture : Fixture;
}


function TimeLine ({fixture} : TimeLineProps) {
  return (
    <div className="flex flex-col items-center w-full gap-2">
      <span className="font-semibold">Timeline</span>
      {
      fixture.events && fixture.events.length > 0 &&
      fixture.events?.map((ev, index) => (
        <div className="w-full gap-2 timeline-grid" key={index}>
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
            <img className="object-contain w-6 h-6" src={fixtureTimelineEventsImages[ev.type]} alt="" />
            }
            {
            ev.detail && ev.type === 'Goal' &&
            <img className="object-contain w-6 h-6" src={fixtureTimelineEventsImages[ev.type]} alt="" />
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
            <img className="object-contain w-6 h-6" src={fixtureTimelineEventsImages[ev.type]} alt="" />
            }
            {
            ev.detail && ev.type === 'Goal' &&
            <img className="object-contain w-6 h-6" src={fixtureTimelineEventsImages[ev.type]} alt="" />
            }
            
            <span>{ev.detail}</span>
          </div>
          }
        
          
        </div>
      ))
      
      }
    </div>
  )
}

export default TimeLine;