import PlayerCard from "../../../components/ui/playerCard";
import { Player } from "../types/types";

type LeagueTopScorersProps = {
  leagueTopScorers: Player[]
}

function LeagueTopScorers ({ leagueTopScorers }: LeagueTopScorersProps) {
  return (
    <div className="w-full p-4">
      <p className="text-xl font-semibold text-gray-500"> TOP SCORERS</p>
      <div className="flex flex-wrap w-full h-full gap-4 p-4">
      {
      leagueTopScorers && leagueTopScorers.length &&
      leagueTopScorers.map((player, index) => (
        <PlayerCard player={player} key={index}/>
      ))
      }
      </div>
    </div>
  )
}

export default LeagueTopScorers;