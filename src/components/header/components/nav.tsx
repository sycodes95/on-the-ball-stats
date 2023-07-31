import { Link } from "react-router-dom";

function Nav () {

  return (
    <div className="flex items-center h-full gap-4 text-sm font-semibold text-emerald-500">
      <button>
        LEAGUES
      </button>
      <button>
        TEAMS
      </button>
      <Link to={`/players`}>
        PLAYERS
      </Link>

      <button>
        COMPARE
      </button>
    </div>
  )
}

export default Nav;