import { useEffect, useState } from "react";
import { Fixture } from "../../../../types/types";
import { getLeagueFixtures } from "../../services/getLeagueFixtures";
import FixtureCards from "../../../../components/fixtures/fixtureCards";

type LeagueFixturesProps = {
  leagueFixtures: Fixture[];
}


function LeagueFixtures ({leagueFixtures} : LeagueFixturesProps) {

  const fixtureViewOptions = [ 'past', 'upcoming' ]

  const [fixtureView, setFixtureView] = useState(fixtureViewOptions[0])

  const [pastFixtures , setPastFixtures] = useState<Fixture[] | []>([])
  const [upcomingFixtures , setUpcomingFixtures] = useState<Fixture[] | []>([])


  useEffect(()=> {
    if(leagueFixtures && leagueFixtures.length > 0){
      
      const todayDate = new Date()
      const past = []
      const upcoming = []
      
      for(let i = 0; i < leagueFixtures.length ; i++) {
        const fixtureDate = new Date(leagueFixtures[i].fixture.date)
        todayDate > fixtureDate ? past.push(leagueFixtures[i]) : upcoming.push(leagueFixtures[i])
      }
      setPastFixtures(past.reverse())
      setUpcomingFixtures(upcoming)
    }
  },[leagueFixtures])

  useEffect(()=> {
    console.log(pastFixtures, upcomingFixtures);
  },[pastFixtures, upcomingFixtures])

  return (
    <div className="flex flex-col gap-4">
      <div className="flex items-center gap-2">
      {
      fixtureViewOptions.map((option, index) => (
        <button
        className={`h-8 p-2 font-semibold rounded-2xl w-20
        ${option === fixtureView ? 'bg-black text-white' : 'bg-none text-black'}
        `}
        onClick={()=> setFixtureView(option)}
        key={index}
        >
          {`${option.charAt(0).toUpperCase()}${option.slice(1)}`}
        </button>
      ))
      }
      </div>
      
      
      <FixtureCards fixtures={fixtureView === 'past' ? pastFixtures : upcomingFixtures} />



    </div>
  )
}

export default LeagueFixtures;