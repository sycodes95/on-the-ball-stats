import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getLeagueTopScorers } from "../features/leagueDetails/services/getLeagueTopScorers";
import { getLeagueInfo } from "../features/leagueDetails/services/getLeagueInfo";
import LeagueHeader from "../features/leagueDetails/components/leagueHeader";
import { League } from "./leagues";
import LeagueTopScorers from "../features/leagueDetails/components/leagueTopScorers";
import { Player } from "../features/leagueDetails/types/types";



function LeagueDetails () {
  const [leaguePlayers, setLeaguePlayers] = useState([])
  const [leagueTopScorers, setLeagueTopScorers] = useState<Player[]>([])
  const [leagueInfo, setLeagueInfo] = useState<League | null>(null)

  const { leagueID } = useParams()
  
  useEffect(()=>{
    
    getLeagueInfo(Number(leagueID))
    .then(data => setLeagueInfo(data.response[0]))
    .catch(err => console.error(err))
    
    getLeagueTopScorers(Number(leagueID))
    .then(data => setLeagueTopScorers(data.response))
    .catch(err => console.error(err))

  },[])

  useEffect(()=>{
    console.log(leagueTopScorers);
  },[leagueTopScorers])

  useEffect(()=>{
    console.log(leagueInfo);
  },[leagueInfo])

  return (
    <div className="flex flex-col w-full text-black">
      {
      leagueInfo && 
      <LeagueHeader leagueInfo={leagueInfo}/>
      }
      <LeagueTopScorers leagueTopScorers={leagueTopScorers} />
      
    </div>
  )
}
export default LeagueDetails;