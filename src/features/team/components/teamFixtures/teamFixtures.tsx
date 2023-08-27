import { useEffect, useState } from "react";
import FixtureCards from "../../../../components/fixtures/fixtureCards";
import { Fixture } from "../../../../types/types";

type TeamFixturesProps = {
  fixtures: Fixture[];
}

function TeamFixtures ({fixtures} : TeamFixturesProps) {
  const fixtureViewOptions = [ 'past', 'upcoming' ]

  const [fixtureView, setFixtureView] = useState(fixtureViewOptions[0])

  const [pastFixtures , setPastFixtures] = useState<Fixture[] | []>([])
  const [upcomingFixtures , setUpcomingFixtures] = useState<Fixture[] | []>([])


  useEffect(()=> {
    if(fixtures && fixtures.length > 0){
      
      const todayDate = new Date()
      const past = []
      const upcoming = []
      
      for(let i = 0; i < fixtures.length ; i++) {
        const fixtureDate = new Date(fixtures[i].fixture.date)
        todayDate > fixtureDate ? past.push(fixtures[i]) : upcoming.push(fixtures[i])
      }
      setPastFixtures(past.reverse())
      setUpcomingFixtures(upcoming)
    }
  },[fixtures])


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
      
      <FixtureCards fixtures={fixtureView === 'past' ? pastFixtures : upcomingFixtures} displayAmount={2} />

    </div>
  )
}

export default TeamFixtures;