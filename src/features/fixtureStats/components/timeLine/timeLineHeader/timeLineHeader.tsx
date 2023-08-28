import { useSelector } from "react-redux";
import { RootState } from "../../../../../store/store";
import { Link } from "react-router-dom";
import { getURLFriendlyString } from "../../../../../utils/getURLFriendlyString";

function TimeLineHeader () {

  const { fixture } = useSelector((state : RootState) => state.fixtureStatsSlice)

  return (
    <>
    {
    fixture &&
    <div className="flex items-center justify-center w-full gap-12">
      <Link 
      className="flex justify-end hover:opacity-70"
      to={`/team/${fixture.league.id}/${fixture.teams.home.id}/${getURLFriendlyString(fixture.teams.home.name)}`}>
        <img className="object-contain w-12 h-12" src={fixture.teams.home.logo} alt="" />
      </Link>

      <div className="flex items-center justify-center">
        <span className="font-bold">Timeline</span>
      </div>

      <Link 
      className="flex justify-end hover:opacity-70"
      to={`/team/${fixture.league.id}/${fixture.teams.away.id}/${getURLFriendlyString(fixture.teams.away.name)}`}>
        <img className="object-contain w-12 h-12" src={fixture.teams.away.logo} alt="" />
      </Link>
    </div>
    }
    </>

  )
}

export default TimeLineHeader;