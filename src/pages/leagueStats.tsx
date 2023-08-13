import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getLeagueTopScorers } from "../services/getLeagueTopScorers";
import { getLeagueInfo } from "../features/leagueStats/services/getLeagueInfo";
import LeagueHeader from "../features/leagueStats/components/leagueHeader/leagueHeader";
import { League } from "./leagues";
import LeagueTopScorers from "../features/leagueStats/components/leagueTopScorers/leagueTopScorers";
import { TeamStanding } from "../features/leagueStats/types/types";
import { getLeagueTopAssists } from "../features/leagueStats/services/getLeagueTopAssists";
import LeagueTopAssists from "../features/leagueStats/components/leagueTopAssists/leagueTopAssists";
import { getLeagueTeamStandings } from "../features/leagueStats/services/getLeagueTeamStandings";
import LeagueTeamStandings from "../features/leagueStats/components/leagueTeamStandings/leagueTeamStandings";
import '../features/leagueStats/styles/styles.css'
import { Player } from "../types/types";

function LeagueStats () {
  const [loading, setLoading] = useState(true);
  const [leagueTopScorers, setLeagueTopScorers] = useState<Player[]>([])
  const [leagueTopAssists, setLeagueTopAssists] = useState<Player[]>([])
  const [leagueTeamStandings, setLeagueTeamStandings] = useState<TeamStanding[]>([])
  const [leagueInfo, setLeagueInfo] = useState<League | null>(null)

  const { leagueId } = useParams()

  useEffect(() => {
    Promise.all([
      getLeagueInfo(Number(leagueId)),
      getLeagueTopScorers(Number(leagueId)),
      getLeagueTopAssists(Number(leagueId)),
      getLeagueTeamStandings(Number(leagueId)),
    ])
    .then(([infoData, topScorersData, topAssistsData, teamStandingsData]) => {
      setLeagueInfo(infoData.response[0]);
      setLeagueTopScorers(topScorersData.response);
      setLeagueTopAssists(topAssistsData.response);
      setLeagueTeamStandings(teamStandingsData.response[0].league.standings[0]);
      setLoading(false); // Set loading to false after all fetches are complete
    })
    .catch((err) => console.error(err));
  }, [leagueId]);
  
  useEffect(()=> {
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
      <LeagueTeamStandings leagueTeamStandings={leagueTeamStandings} leagueID={Number(leagueId)}/>
      <LeagueTopScorers leagueTopScorers={leagueTopScorers} />
      <LeagueTopAssists leagueTopAssists={leagueTopAssists} />
      </>
      }
      
      
    </div>
  )
}
export default LeagueStats;