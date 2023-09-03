import H2HWinPctCircleBarHome from "./h2HWinPctCIrcleBar/h2HWinPctCircleBarHome";
import H2HWinPctCircleBarAway from "./h2HWinPctCIrcleBar/h2HWinPctCircleBarAway";
import H2HDrawPctCircleBar from "./h2HWinPctCIrcleBar/h2HDrawPctCircleBar";
import { Fixture } from "../../../../../types/types";
import { Link } from "react-router-dom";
import { getURLFriendlyString } from "../../../../../utils/getURLFriendlyString";
import TeamLink from "../../../../../components/links/teamLink";

type H2HBasicStatsProps = {
  headToHeadFixtures: Fixture[];
}


function H2HBasicStats ({headToHeadFixtures} : H2HBasicStatsProps) {
  return (
    <div className="flex items-center justify-center w-full">
      <div className="flex items-center gap-4">
        <TeamLink 
        className="hover:opacity-70" 
        teamId={headToHeadFixtures[0].teams.home.id}
        teamName={getURLFriendlyString(headToHeadFixtures[0].teams.home.name)}
        >
          <img className="object-contain w-12 h-12" src={headToHeadFixtures[0]?.teams.home.logo} alt="home team logo" />
        </TeamLink>

        <H2HWinPctCircleBarHome headToHeadFixtures={headToHeadFixtures}/>

        <H2HDrawPctCircleBar headToHeadFixtures={headToHeadFixtures}/>

        <H2HWinPctCircleBarAway headToHeadFixtures={headToHeadFixtures}/>
        <TeamLink 
        className="hover:opacity-70" 
        teamId={headToHeadFixtures[0].teams.away.id}
        teamName={getURLFriendlyString(headToHeadFixtures[0].teams.away.name)}
        >
          <img className="object-contain w-12 h-12" src={headToHeadFixtures[0]?.teams.away.logo} alt="home team logo" />
        </TeamLink>
      </div>
    </div>
  )
}

export default H2HBasicStats;