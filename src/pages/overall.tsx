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

function Overall () {

  // const [topGoalContributors, setTopGoalContributors] = useState<Player[]>([])
  const [topGoalContributors, setTopGoalContributors] = useState<Player[]>([]);
  const [topDefenders, setTopDefenders] = useState<Player[]>([]);


  useEffect(()=>{
    getTopGoalContributors().then(topPlayers => setTopGoalContributors(topPlayers))
    getTopYellows()
    // getTopDefenders().then(topPlayers => setTopDefenders(topPlayers))
  },[])

  useEffect(()=> {
    console.log(topGoalContributors);
    console.log(topDefenders);
  },[topGoalContributors, topDefenders])

  return (
    <div className="flex flex-col w-full gap-4 p-2 text-primary">
      <TopGoalContributorsGraph topGoalContributors={topGoalContributors}/>
    </div>
  )
}

export default Overall;