import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import { Fixture } from "../../../../homepage/types/types";
import { getFixturesTeamWinPct } from "../../../utils/getFixturesTeamWinPct";

type H2HWinPctCircleBarAwayProps = {
  headToHeadFixtures: Fixture[];
}

function H2HWinPctCircleBarAway ({headToHeadFixtures} : H2HWinPctCircleBarAwayProps) {
  return (
    <div className="flex flex-col gap-2">
      <CircularProgressbar className="w-16 font-semibold"
      text={`${getFixturesTeamWinPct(headToHeadFixtures, headToHeadFixtures[0].teams.away.id)}%`} 
      value={getFixturesTeamWinPct(headToHeadFixtures, headToHeadFixtures[0].teams.away.id)}
      strokeWidth={12}
      styles={buildStyles({
        rotation: 0,
        textSize: '18px',
        pathTransitionDuration: 1,
        textColor: '#f97316',
        trailColor: '#d6d6d6',
        backgroundColor: '#f97316',
        pathColor: '#f97316'
      })}
      />

      <span className="text-xs font-semibold text-center text-white bg-orange-500 rounded-md">Win %</span>
    </div>
  )
}

export default H2HWinPctCircleBarAway;
