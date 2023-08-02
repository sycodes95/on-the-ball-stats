import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getLeagueTopScorers } from "../features/leagueDetails/services/getLeagueTopScorers";
import { getLeagueInfo } from "../features/leagueDetails/services/getLeagueInfo";
import LeagueHeader from "../features/leagueDetails/components/leagueHeader";
import { League } from "./leagues";
import LeagueTopScorers from "../features/leagueDetails/components/leagueTopScorers";
import { Player, TeamStanding } from "../features/leagueDetails/types/types";
import { getLeagueTopAssists } from "../features/leagueDetails/services/getLeagueTopAssists";
import LeagueTopAssists from "../features/leagueDetails/components/leagueTopAssists";
import { getLeagueTeamStandings } from "../features/leagueDetails/services/getLeagueTeamStandings";
import LeagueTeamStandings from "../features/leagueDetails/components/leagueTeamStandings";

function LeagueDetails () {
  const [loading, setLoading] = useState(true);
  const [leaguePlayers, setLeaguePlayers] = useState([])
  const [leagueTopScorers, setLeagueTopScorers] = useState<Player[]>([])
  const [leagueTopAssists, setLeagueTopAssists] = useState<Player[]>([])
  const [leagueTeamStandings, setLeagueTeamStandings] = useState<TeamStanding[]>([])
  const [leagueInfo, setLeagueInfo] = useState<League | null>(null)

  const { leagueID } = useParams()

  useEffect(() => {
    Promise.all([
      getLeagueInfo(Number(leagueID)),
      getLeagueTopScorers(Number(leagueID)),
      getLeagueTopAssists(Number(leagueID)),
      getLeagueTeamStandings(Number(leagueID)),
    ])
      .then(([infoData, topScorersData, topAssistsData, teamStandingsData]) => {
        setLeagueInfo(infoData.response[0]);
        setLeagueTopScorers(topScorersData.response);
        setLeagueTopAssists(topAssistsData.response);
        setLeagueTeamStandings(teamStandingsData.response[0].league.standings);
        setLoading(false); // Set loading to false after all fetches are complete
      })
      .catch((err) => console.error(err));
  }, []);
  
  // useEffect(()=>{
    
  //   getLeagueInfo(Number(leagueID))
  //   .then(data => setLeagueInfo(data.response[0]))
  //   .catch(err => console.error(err))
    
  //   getLeagueTopScorers(Number(leagueID))
  //   .then(data => setLeagueTopScorers(data.response))
  //   .catch(err => console.error(err))

  //   getLeagueTopAssists(Number(leagueID))
  //   .then(data => setLeagueTopAssists(data.response))
  //   .catch(err => console.error(err))

  //   getLeagueTeamStandings(Number(leagueID))
  //   .then(data => setLeagueTeamStandings(data.response[0].league.standings))
  //   .catch(err => console.error(err))


  // },[])



  // useEffect(()=>{
  //   console.log(leagueTopScorers);
  // },[leagueTopScorers])

  // useEffect(()=>{
  //   console.log(leagueInfo);
  // },[leagueInfo])
  useEffect(()=> {
    console.log(leagueTeamStandings);
  },[leagueTeamStandings])
  return (
    <div className="flex flex-col w-full pb-16 text-black">
      {
      loading &&
      <div className="text-black">LOADING</div>
      }
      {
      !loading && leagueInfo && 
      <LeagueHeader leagueInfo={leagueInfo}/>
      }
      {
      !loading &&
      <>
      <LeagueTeamStandings leagueTeamStandings={leagueTeamStandings}/>
      <LeagueTopScorers leagueTopScorers={leagueTopScorers} />
      <LeagueTopAssists leagueTopAssists={leagueTopAssists} />
      </>
      }
      
      
    </div>
  )
}
export default LeagueDetails;