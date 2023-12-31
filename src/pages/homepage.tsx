import { useEffect, useState } from "react";
import { Fixture, Player } from "../types/types";
import { getTopGoalContributors} from "../features/homepage/services/getTopGoalContributors";
import { getTopYellows } from "../features/homepage/services/getTopYellows";
import TopGoalContributorsGraph from "../features/homepage/components/topGoalContributorsGraph/topGoalContributorsGraph";
import { getTopReds } from "../features/homepage/services/getTopReds";
import TopCardsGraph from "../features/homepage/components/topCards/topCards";
import { getFixturesByDate } from "../services/getFixturesByDate";
import '../features/homepage/styles.css'
import OvalLoadingSpinner from "../components/ui/ovalLoadingSpinner";
import TopFixtures from "../features/homepage/components/fixtures/topFixtures";
import Top20Leagues from "../features/homepage/components/top20Leagues/top20Leagues";
import YoutubeFootball from "../features/homepage/components/youtubeFootball/youtubeFootball";
import { getTopTeamsFromTop5Leagues } from "../features/homepage/services/getTopTeamsFromTop5Leagues";
import { TeamStanding } from "../features/league/types/types";
import TopTeams from "../features/homepage/components/topTeams/topTeams";
import { TopTeamsType } from "../features/homepage/types/types";

function Homepage () {

  const [topGoalContributors, setTopGoalContributors] = useState<Player[]>([]);
  // const [topDefenders, setTopDefenders] = useState<Player[]>([]);
  const [topYellows, setTopYellows] = useState<Player[]>([])
  const [topReds, setTopReds] = useState<Player[]>([])
  const [topTeams, setTopTeams] = useState<TopTeamsType[] | []>([])
  const [isLoading, setIsLoading] = useState(false)
  const [fixtures, setFixtures] = useState<Fixture[]>([])

  useEffect(()=>{
    
    setIsLoading(true)
    Promise.all([
      getTopGoalContributors(),
      getTopYellows(), 
      getTopReds(), 
      getFixturesByDate(),
      getTopTeamsFromTop5Leagues()
    ])
    .then(([topPlayers, topYellows, topReds, fixtures, topTeams ]) => {
      setTopGoalContributors(topPlayers);
      setTopYellows(topYellows);
      setTopReds(topReds);
      setFixtures(fixtures)
      setTopTeams(topTeams)
      setIsLoading(false)
    })
  },[])

  const haveTopGoalContributors = topGoalContributors && topGoalContributors.length > 0;
  const haveTopReds = topReds && topReds.length > 0;
  const haveTopYellows = topYellows && topYellows.length > 0;

  return (
    <>
    {
      isLoading ? 
      <div className="absolute left-0 flex items-center justify-center flex-grow w-full h-full -translate-y-1/2 top-1/2">
        <OvalLoadingSpinner />
      </div>
      :
      <div className="flex flex-col w-full gap-4 p-2 text-primary">
        <Top20Leagues mobileView={false} />
        {
        fixtures && 
        <TopFixtures fixtures={fixtures} setFixtures={setFixtures} />
        }
        {
        topTeams.length > 0 && 
        <TopTeams topTeams={topTeams}/>
        }
        {
        haveTopGoalContributors && 
        <TopGoalContributorsGraph topGoalContributors={topGoalContributors}/>
        }
        
        <div className="flex flex-col gap-4 md:flex-row">
          {
          haveTopReds &&
            <TopCardsGraph topCards={topYellows} cardType="YELLOW"/>
          }
          {
          haveTopYellows && 
            <TopCardsGraph topCards={topReds} cardType="RED"/>
          }
        </div>
      </div>

    }
    </>
    
  )
}

export default Homepage;