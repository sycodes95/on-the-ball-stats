import { useEffect, useState } from "react";
import { top5Leagues } from "../constants/top5Leagues";
import { getLeagueTopScorers } from "../services/getLeagueTopScorers";
import { Player } from "../types/types";
import { ResponsiveBar, ResponsiveBarCanvas } from "@nivo/bar";
import { getTopGoalContributors, getTopPlayers } from "../features/homepage/services/getTopGoalContributors";
import { getTopDefenders } from "../features/homepage/services/getTopDefenders";
import { getLeagueTopYellows } from "../services/getLeagueTopYellows";
import { getTopYellows } from "../features/homepage/services/getTopYellows";
import TopGoalContributorsGraph from "../features/homepage/components/topGoalContributorsGraph/topGoalContributorsGraph";
import TopYellowsGraph from "../features/homepage/components/topCards/topCards";
import { getTopReds } from "../features/homepage/services/getTopReds";
import TopCardsGraph from "../features/homepage/components/topCards/topCards";
import { getFixturesFromTop20Leagues } from "../features/homepage/services/getFIxturesFromTop20Leagues";
import { getFixturesByDate, getLeagueFixtures } from "../services/getFixturesByDate";
import Fixtures from "../features/homepage/components/fixtures/fixtures";
import { Fixture } from "../features/homepage/types/types";
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


  useEffect(()=>{
    
    setIsLoading(true)
    Promise.all([
      getTopGoalContributors(),
      getTopYellows(), 
      getTopReds(), 
    ])
    .then(([topPlayers, topYellows, topReds ]) => {
      setTopGoalContributors(topPlayers);
      setTopYellows(topYellows);
      setTopReds(topReds);
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
      <div className="flex flex-col w-full gap-4 p-2 text-primary">
        <Fixtures />
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