import H2HWinPctCircleBarHome from "./h2HWinPctCIrcleBar/h2HWinPctCircleBarHome";
import H2HWinPctCircleBarAway from "./h2HWinPctCIrcleBar/h2HWinPctCircleBarAway";
import H2HDrawPctCircleBar from "./h2HWinPctCIrcleBar/h2HDrawPctCircleBar";
import { Fixture } from "../../../../../types/types";
import { Link } from "react-router-dom";
import { getURLFriendlyString } from "../../../../../utils/getURLFriendlyString";

type H2HBasicStatsProps = {
  headToHeadFixtures: Fixture[];
}


function H2HBasicStats ({headToHeadFixtures} : H2HBasicStatsProps) {
  return (
    <div className="flex items-center justify-center w-full">
      <div className="flex items-center gap-4">
        <Link className="hover:opacity-70" to={`/team/${headToHeadFixtures[0].league.id}/${headToHeadFixtures[0].teams.home.id}/${getURLFriendlyString(headToHeadFixtures[0].teams.home.name)}`}>
          <img className="object-contain w-12 h-12" src={headToHeadFixtures[0]?.teams.home.logo} alt="home team logo" />
        </Link>
        <H2HWinPctCircleBarHome headToHeadFixtures={headToHeadFixtures}/>

        <H2HDrawPctCircleBar headToHeadFixtures={headToHeadFixtures}/>

        <H2HWinPctCircleBarAway headToHeadFixtures={headToHeadFixtures}/>
        <Link className="hover:opacity-70" to={`/team/${headToHeadFixtures[0].league.id}/${headToHeadFixtures[0].teams.away.id}/${getURLFriendlyString(headToHeadFixtures[0].teams.home.name)}`}>
          <img className="object-contain w-12 h-12" src={headToHeadFixtures[0].teams.away.logo} alt="" />
        </Link>
      </div>
    </div>
  )
}

export default H2HBasicStats;