import { Player } from "../../features/leagueDetails/types/types";

type PlayerCardProps = {
  player: Player;
}

function PlayerCard ({ player }: PlayerCardProps) {
  return (
    <div className="">
      <img className="w-24" src={player.player.photo} alt="player-photo" />
    </div>
  )
}

export default PlayerCard;