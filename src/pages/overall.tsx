import { useEffect, useState } from "react";
import { top5Leagues } from "../constants/top5Leagues";
import { getLeagueTopScorers } from "../services/getLeagueTopScorers";
import { Player } from "../types/types";
import { ResponsiveBar, ResponsiveBarCanvas } from "@nivo/bar";
import { getTopGoalContributors, getTopPlayers } from "../features/overall/services/getTopGoalContributors";
import { getTopDefenders } from "../features/overall/services/getTopDefenders";
import { getLeagueTopYellows } from "../services/getLeagueTopYellows";
import { getTopYellows } from "../features/overall/services/getTopYellows";
import TopGoalContributorsGraph from "../features/overall/components/topGoalContributorsGraph/topGoalContributorsGraph";
import TopYellowsGraph from "../features/overall/components/topCards/topCards";
import { getTopReds } from "../features/overall/services/getTopReds";
import TopCardsGraph from "../features/overall/components/topCards/topCards";

function Overall () {

  // const [topGoalContributors, setTopGoalContributors] = useState<Player[]>([])
  const [topGoalContributors, setTopGoalContributors] = useState<Player[]>([]);
  const [topDefenders, setTopDefenders] = useState<Player[]>([]);
  const [topYellows, setTopYellows] = useState<Player[]>([])
  const [topReds, setTopReds] = useState<Player[]>([])


  useEffect(()=>{
    getTopGoalContributors().then(topPlayers => setTopGoalContributors(topPlayers))
    getTopYellows().then(topYellows => setTopYellows(topYellows))
    getTopReds().then(topReds => setTopReds(topReds))

    // getTopDefenders().then(topPlayers => setTopDefenders(topPlayers))
  },[])

  useEffect(()=> {
    console.log(topGoalContributors);
    console.log(topYellows);
  },[topGoalContributors, topYellows])

  return (
    <div className="flex flex-col w-full gap-4 p-2 text-primary">
      <TopGoalContributorsGraph topGoalContributors={topGoalContributors}/>
      <div className="flex gap-4">
      <TopCardsGraph topCards={topYellows} cardType="YELLOW"/>
      <TopCardsGraph topCards={topReds} cardType="RED"/>
      </div>
      


    </div>
  )
}

export default Overall;