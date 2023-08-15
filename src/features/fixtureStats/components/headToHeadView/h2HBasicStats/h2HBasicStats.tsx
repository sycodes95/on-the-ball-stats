import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import { Fixture } from "../../../../homepage/types/types";
import { getFixturesTeamWinPct } from "../../../utils/getFixturesTeamWinPct";
import { getFixturesDrawPct } from "../../../utils/getFixturesDrawPct";
import H2HWinPctCircleBarHome from "./h2HWinPctCIrcleBar/h2HWinPctCircleBarHome";
import H2HWinPctCircleBarAway from "./h2HWinPctCIrcleBar/h2HWinPctCircleBarAway";
import H2HDrawPctCircleBar from "./h2HWinPctCIrcleBar/h2HDrawPctCircleBar";

type H2HBasicStatsProps = {
  headToHeadFixtures: Fixture[];
}


function H2HBasicStats ({headToHeadFixtures} : H2HBasicStatsProps) {
  return (
    <div className="flex items-center justify-center w-full">
      <div className="flex items-center gap-4">
        <img className="object-contain w-12 h-12" src={headToHeadFixtures[0]?.teams.home.logo} alt="" />
        <H2HWinPctCircleBarHome headToHeadFixtures={headToHeadFixtures}/>

        <H2HDrawPctCircleBar headToHeadFixtures={headToHeadFixtures}/>

        <H2HWinPctCircleBarAway headToHeadFixtures={headToHeadFixtures}/>
        <img className="object-contain w-12 h-12" src={headToHeadFixtures[0].teams.away.logo} alt="" />
      </div>
    </div>
  )
}

export default H2HBasicStats;