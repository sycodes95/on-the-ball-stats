import Icon from "@mdi/react";

import { mdiArrowUpBoldBoxOutline } from '@mdi/js';
import { hasFixtureStarted } from "../../utils/hasFixtureStarted";
import { fixtureTimelineEventsImages } from "../../constants/constants";
import { Fixture } from "../../../../types/types";
import { useSelector } from "react-redux";
import { RootState } from "../../../../store/store";
import TimeLineHeader from "./timeLineHeader/timeLineHeader";


function TimeLine () {
  const { fixture } = useSelector((state : RootState) => state.fixtureStatsSlice)

  const fixtureHasNotStarted = fixture && 
  (
    !hasFixtureStarted(fixture) 
    || fixture.fixture.status.short ===  'PST' 
    || fixture.fixture.status.short ===  'CANC'
  );
  return (
    <div className="flex flex-col items-center w-full h-full gap-8">
      {
      fixtureHasNotStarted ?
      <div className="flex items-center justify-center flex-grow h-full">
        Match timeline will be updated once match has started.
      </div>
      : 
      <>
      <TimeLineHeader />
      <div className="flex flex-col h-full gap-4 ">
      {
      
      fixture && fixture.events && fixture.events.length > 0 ?
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

          <div className="flex justify-center w-full h-full col-start-2 ">
            <span className="w-8 h-6 p-1 font-bold text-center text-white rounded-full shadow-md bg-slate-400 ">{ev.time.elapsed}'</span>
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
      :
      <span className="flex items-center h-full">No events to report currently.</span>
      }
      </div>
      </>
      }
    </div>
  )
}

export default TimeLine;