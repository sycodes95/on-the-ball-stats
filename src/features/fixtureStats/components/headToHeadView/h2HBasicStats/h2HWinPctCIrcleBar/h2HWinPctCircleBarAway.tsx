import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import { getFixturesTeamWinPct } from "../../../../utils/getFixturesTeamWinPct";
import { Fixture } from "../../../../../../types/types";

type H2HWinPctCircleBarAwayProps = {
  headToHeadFixtures: Fixture[];
}

function H2HWinPctCircleBarAway ({headToHeadFixtures} : H2HWinPctCircleBarAwayProps) {
  return (
    <div className="flex flex-col items-center gap-2">
      <CircularProgressbar className="w-10 font-semibold md:w-16"
      text={`${getFixturesTeamWinPct(headToHeadFixtures, headToHeadFixtures[0].teams.away.id)}%`} 
      value={getFixturesTeamWinPct(headToHeadFixtures, headToHeadFixtures[0].teams.away.id)}
      strokeWidth={12}
      styles={buildStyles({
        rotation: 0,
        textSize: '18px',
        pathTransitionDuration: 1,
        textColor: '#f97316',
        trailColor: '#C4BCA7',
        backgroundColor: '#f97316',
        pathColor: '#f97316'
      })}
      />

      <span className="p-1 text-xs font-semibold text-center text-white bg-orange-500 rounded-md">Win %</span>
    </div>
  )
}

export default H2HWinPctCircleBarAway;
