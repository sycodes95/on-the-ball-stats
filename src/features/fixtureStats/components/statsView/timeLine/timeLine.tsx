import Icon from "@mdi/react";
import { Fixture } from "../../../../homepage/types/types";
import { fixtureTimelineEventsImages } from "../../../constants/constants";
import { hasFixtureStarted } from "../../../utils/hasFixtureStarted";
import { mdiArrowUpBoldBoxOutline } from '@mdi/js';
type TimeLineProps = {
  fixture : Fixture;
}


function TimeLine ({fixture} : TimeLineProps) {
  return (
    <div className="flex flex-col items-center w-full gap-2">
      <div className="grid w-full grid-cols-3">
        <div className="flex justify-end">
          <img className="object-contain w-12 h-12" src={fixture.teams.home.logo} alt="" />
        </div>

        <div className="flex items-center justify-center">

          <span className="font-bold">Timeline</span>
        </div>

        <div className="flex items-center justify-start">
          <img className="object-contain w-12 h-12" src={fixture.teams.away.logo} alt="" />
        </div>
      </div>


      <div className="flex flex-col gap-2">
      {
      fixture.events && fixture.events.length > 0 &&
      fixture.events?.map((ev, index) => (
        <div className="w-full gap-2 timeline-grid" key={index}>
          {
          ev.team.id === fixture.teams.home.id &&
          
          <div className="flex items-center justify-end w-full gap-2">
            {/* If no player is involved in the event, display event detail */}
            {
            ev.detail && ev.type === 'Card' && 
            <div className="flex">
              <span className="p-1 rounded-md">{ev.player.name ? ev.player.name : ev.detail}</span>
              <img className="object-contain w-6 h-6" src={fixtureTimelineEventsImages[ev.detail]} alt="" />
            </div>
            }
            {
            ev.detail && ev.type === 'subst' &&
            <div className="flex flex-col md:gap-2 md:flex-row">
              

              <div className="flex items-center justify-end gap-1">
                <span className="p-1 rounded-md">{ev.assist.name}</span>
                <Icon className="w-6 h-6 text-emerald-600 text-opacity-80" path={mdiArrowUpBoldBoxOutline} />
              </div>

              <div className="flex items-center justify-end gap-1">
                <span className="p-1 rounded-md">{ev.player.name ? ev.player.name : ev.detail}</span>
                <Icon className="w-6 h-6 text-red-600 text-opacity-50 rotate-180" path={mdiArrowUpBoldBoxOutline} />
              </div>
            </div>
            }
            {
            ev.detail && ev.type === 'Goal' &&
            <div className="flex gap-2">
              <span className="p-1 rounded-md">{ev.player.name ? ev.player.name : ev.detail}</span>
              <img className="object-contain w-6 h-6" src={fixtureTimelineEventsImages[ev.type]} alt="" />
            </div>
            }
            {
            ev.detail && !ev.player.name && ev.detail &&
            <div className="flex gap-2">
              <span className="p-1 rounded-md">{ev.detail}</span>
            </div>
            }
          </div>
          }

          <div className="flex justify-center w-full h-full col-start-2 text-white">
            <span className="w-8 h-6 p-1 font-bold text-center border rounded-md shadow-md text-slate-400 border-slate-300 shadow-slate-300">{ev.time.elapsed}'</span>
          </div>

          {
          ev.team.id === fixture.teams.away.id &&
          
          <div className="flex items-center justify-start w-full gap-2">
            {
            ev.detail && ev.type === 'Card' && 
            <div className="flex overflow-hidden whitespace-nowrap text-ellipsis">
              <img className="object-contain w-6 h-6" src={fixtureTimelineEventsImages[ev.detail]} alt="" />
              <span className="p-1 rounded-md ">{ev.player.name ? ev.player.name : ev.detail}</span>
            </div>
            }
            {
            ev.detail && ev.type === 'subst' &&
            <div className="flex flex-col md:gap-2 md:flex-row">
              
              <div className="flex items-center justify-start gap-1">
                <Icon className="w-6 h-6 text-red-600 text-opacity-50 rotate-180" path={mdiArrowUpBoldBoxOutline} />
                <span className="p-1 rounded-md">{ev.player.name ? ev.player.name : ev.detail}</span>
              </div>
              <div className="flex items-center justify-start gap-1">
                <Icon className="w-6 h-6 text-emerald-600 text-opacity-80" path={mdiArrowUpBoldBoxOutline} />
                <span className="p-1 rounded-md">{ev.assist.name}</span>
              </div>
              

            </div>
            }
            {
            ev.detail && ev.type === 'Goal' &&
            <div className="flex gap-2">
              <img className="object-contain w-6 h-6" src={fixtureTimelineEventsImages[ev.type]} alt="" />
              <span className="p-1 rounded-md">{ev.player.name ? ev.player.name : ev.detail}</span>
            </div>
            }
            {
            ev.detail && (ev.type !== 'Card' && ev.type !== 'subst' && ev.type !== 'Goal' ) &&
            <div className="flex gap-2">
              <span className="p-1 rounded-md">{ev.detail}</span>
            </div>
            }
            
          </div>
          }
        
          
        </div>
      ))
      }
      </div>
    </div>
  )
}

export default TimeLine;