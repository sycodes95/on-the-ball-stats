import { useEffect, useState } from "react";
import { Fixture, Player } from "../types/types";
import { getTopGoalContributors} from "../features/homepage/services/getTopGoalContributors";
import { getTopYellows } from "../features/homepage/services/getTopYellows";
import TopGoalContributorsGraph from "../features/homepage/components/topGoalContributorsGraph/topGoalContributorsGraph";
import { getTopReds } from "../features/homepage/services/getTopReds";
import TopCardsGraph from "../features/homepage/components/topCards/topCards";
import { getFixturesByDate } from "../services/getFixturesByDate";
import Fixtures from "../features/homepage/components/fixtures/fixtures";
import '../features/homepage/styles.css'
import YoutubeFootball from "../features/homepage/components/youtubeFootball/youtubeFootball";
import OvalLoadingSpinner from "../components/ui/ovalLoadingSpinner";

function Homepage () {

  // const [topGoalContributors, setTopGoalContributors] = useState<Player[]>([])
  const [topGoalContributors, setTopGoalContributors] = useState<Player[]>([]);
  const [topDefenders, setTopDefenders] = useState<Player[]>([]);
  const [topYellows, setTopYellows] = useState<Player[]>([])
  const [topReds, setTopReds] = useState<Player[]>([])
  const [isLoading, setIsLoading] = useState(false)
  const [fixtures, setFixtures] = useState<Fixture[]>()

  useEffect(()=>{
    
    setIsLoading(true)
    Promise.all([
      getTopGoalContributors(),
      getTopYellows(), 
      getTopReds(), 
      getFixturesByDate()
    ])
    .then(([topPlayers, topYellows, topReds, fixtures ]) => {
      setTopGoalContributors(topPlayers);
      setTopYellows(topYellows);
      setTopReds(topReds);
      setFixtures(fixtures)
      setIsLoading(false)

    })
    
    
  },[])

  useEffect(()=> {
   
  },[topGoalContributors, topYellows])

  return (
    <>
    {
      isLoading ? 
      <div className="absolute left-0 flex items-center justify-center flex-grow w-full h-full -translate-y-1/2 top-1/2">
        <OvalLoadingSpinner />
      </div>
      :
      <div className="flex flex-col w-full gap-12 p-2 text-primary">
        {
        fixtures && 
        <Fixtures fixtures={fixtures} setFixtures={setFixtures}/>
        }
        <YoutubeFootball />
        <TopGoalContributorsGraph topGoalContributors={topGoalContributors}/>
        <div className="flex flex-col gap-4 md:flex-row">
        <TopCardsGraph topCards={topYellows} cardType="YELLOW"/>
        <TopCardsGraph topCards={topReds} cardType="RED"/>
        </div>
      </div>

    }
    </>
    
  )
}

export default Homepage;