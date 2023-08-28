import { Link } from "react-router-dom";

function Nav () {

  return (
    <div className="items-center hidden h-full gap-4 text-xs font-semibold text-black  md:flex">
      <Link to='/leagues'>
        LEAGUES
      </Link>
     
      <button className="w-10 ">

      </button>
    </div>
  )
}

export default Nav;