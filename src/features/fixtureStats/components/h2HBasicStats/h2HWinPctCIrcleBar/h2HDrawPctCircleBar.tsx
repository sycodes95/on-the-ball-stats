import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import { Fixture } from "../../../../homepage/types/types";
import { getFixturesDrawPct } from "../../../utils/getFixturesDrawPct";

type H2HWinPctCircleBarHomeProps = {
  headToHeadFixtures: Fixture[];
}

function H2HDrawPctCircleBar ({headToHeadFixtures} : H2HWinPctCircleBarHomeProps) {
  return (
    <div className="flex flex-col gap-2">
      <CircularProgressbar className="w-16 font-semibold"
      text={`${getFixturesDrawPct(headToHeadFixtures)}%`} 
      value={getFixturesDrawPct(headToHeadFixtures)}
      strokeWidth={12}
      styles={buildStyles({
        rotation: 0,
        textSize: '18px',
        pathTransitionDuration: 1,
        textColor: '#999999',
        trailColor: '#d6d6d6',
        backgroundColor: '#999999',
        pathColor: '#999999'
      })}
      />

      <span className="text-xs font-semibold text-center text-white bg-gray-400 rounded-md">Draw %</span>
    </div>
  )
}

export default H2HDrawPctCircleBar;
