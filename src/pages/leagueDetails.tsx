import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getLeagueTopScorers } from "../services/getLeagueTopScorers";
import { getLeagueInfo } from "../features/leagueDetails/services/getLeagueInfo";
import LeagueHeader from "../features/leagueDetails/components/leagueHeader/leagueHeader";
import { League } from "./leagues";
import LeagueTopScorers from "../features/leagueDetails/components/leagueTopScorers/leagueTopScorers";
import { TeamStanding } from "../features/leagueDetails/types/types";
import { getLeagueTopAssists } from "../features/leagueDetails/services/getLeagueTopAssists";
import LeagueTopAssists from "../features/leagueDetails/components/leagueTopAssists/leagueTopAssists";
import { getLeagueTeamStandings } from "../features/leagueDetails/services/getLeagueTeamStandings";
import LeagueTeamStandings from "../features/leagueDetails/components/leagueTeamStandings/leagueTeamStandings";
import '../features/leagueDetails/styles/styles.css'
import { Player } from "../types/types";

function LeagueDetails () {
  const [loading, setLoading] = useState(true);
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
      setLeagueTeamStandings(teamStandingsData.response[0].league.standings[0]);
      setLoading(false); // Set loading to false after all fetches are complete
    })
    .catch((err) => console.error(err));
  }, [leagueID]);
  
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
      <LeagueTeamStandings leagueTeamStandings={leagueTeamStandings} leagueID={Number(leagueID)}/>
      <LeagueTopScorers leagueTopScorers={leagueTopScorers} />
      <LeagueTopAssists leagueTopAssists={leagueTopAssists} />
      </>
      }
      
      
    </div>
  )
}
export default LeagueDetails;