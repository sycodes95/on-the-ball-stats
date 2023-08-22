import { Link } from "react-router-dom";

function Nav () {

  return (
    <div className="flex items-center h-full gap-4 text-xs font-semibold text-gray-700">
      <Link to='/leagues'>
        LEAGUES
      </Link>
      {/* <Link to={`/teams`}>
        TEAMS
      </Link>
      <Link to={`/players`}>
        PLAYERS
      </Link> */}

      <button>
        COMPARE
      </button>
    </div>
  )
}

export default Nav;