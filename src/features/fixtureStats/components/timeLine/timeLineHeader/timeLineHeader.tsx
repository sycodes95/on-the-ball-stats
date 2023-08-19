import { useSelector } from "react-redux";
import { RootState } from "../../../../../store/store";

function TimeLineHeader () {

  const { fixture } = useSelector((state : RootState) => state.fixtureStatsSlice)

  return (
    <>
    {
    fixture &&
    <div className="flex items-center justify-center w-full gap-12">
      <div className="flex justify-end">
        <img className="object-contain w-12 h-12" src={fixture.teams.home.logo} alt="" />
      </div>

      <div className="flex items-center justify-center">
        <span className="font-bold">Timeline</span>
      </div>

      <div className="flex items-center justify-start">
        <img className="object-contain w-12 h-12" src={fixture.teams.away.logo} alt="" />
      </div>
    </div>
    }
    </>

  )
}

export default TimeLineHeader;