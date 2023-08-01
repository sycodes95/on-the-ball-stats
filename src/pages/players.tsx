import { useEffect } from "react";
import { getPlayers } from "../features/players/services/getPlayers";

function Players () {
  useEffect(()=> {
    getPlayers()
  },[])
  return (
    <div>

    </div>
  )
}

export default Players;