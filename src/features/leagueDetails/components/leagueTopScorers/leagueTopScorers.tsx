import PlayerCard from "../../../../components/ui/playerCard";
import { Player } from "../../types/types";

type LeagueTopScorersProps = {
  leagueTopScorers: Player[]
}

function LeagueTopScorers ({ leagueTopScorers }: LeagueTopScorersProps) {
  return (
    <div className="w-full p-4">
      <p className="text-xl text-black"> TOP SCORERS</p>
      <div className="grid w-full h-full grid-cols-1 p-4 gap-y-1 gap-x-4 md:grid-flow-col md:grid-cols-2 grid-rows-10">
      {
      leagueTopScorers && leagueTopScorers.length &&
      leagueTopScorers.map((player, index) => (
        <PlayerCard 
        number={index + 1}
        teamLogo={player.statistics[0].team.logo}
        playerPhoto={player.player.photo}
        playerName={player.player.name}
        playerID={player.player.id}
        topValue={player.statistics[0].goals.total}
        topValueColor={`text-emerald-500`}
        key={index}/>
      ))
      }
      </div>
    </div>
  )
}

export default LeagueTopScorers;