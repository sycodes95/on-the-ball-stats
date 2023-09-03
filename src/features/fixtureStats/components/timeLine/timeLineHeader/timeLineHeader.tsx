import { useSelector } from "react-redux";
import { RootState } from "../../../../../store/store";
import { getURLFriendlyString } from "../../../../../utils/getURLFriendlyString";
import TeamLink from "../../../../../components/links/teamLink";

function TimeLineHeader () {

  const { fixture } = useSelector((state : RootState) => state.fixtureStatsSlice)

  return (
    <>
    {
    fixture &&
    <div className="flex items-center justify-center w-full gap-12">
      <TeamLink 
      className="flex justify-end hover:opacity-70"
      teamId={fixture.teams.home.id}
      teamName={getURLFriendlyString(fixture.teams.home.name)}
      >
        <img className="object-contain w-12 h-12" src={fixture.teams.home.logo} alt="" />
      </TeamLink>

      <div className="flex items-center justify-center">
        <span className="font-bold">Timeline</span>
      </div>

      <TeamLink 
      className="flex justify-end hover:opacity-70"
      teamId={fixture.teams.away.id}
      teamName={getURLFriendlyString(fixture.teams.away.name)}
      >
        <img className="object-contain w-12 h-12" src={fixture.teams.away.logo} alt="" />
      </TeamLink>
    </div>
    }
    </>

  )
}

export default TimeLineHeader;