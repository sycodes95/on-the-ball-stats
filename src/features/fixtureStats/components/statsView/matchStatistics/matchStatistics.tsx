import { useState } from "react";
import { Fixture } from "../../../../homepage/types/types";
import { FixtureStatistics } from "../../../../../types/types";
import { translateMatchStatisticTypes } from "../../../constants/constants";

type MatchStatisticsProps = {
  homeTeamStatistics: FixtureStatistics;
  awayTeamStatistics: FixtureStatistics;
}


function MatchStatistics ({homeTeamStatistics, awayTeamStatistics} : MatchStatisticsProps) {

 
  return(
    <div className="flex flex-col items-center justify-center w-full gap-8 p-4 rounded-md text-primary border-slate-300 ">
      <div className="grid w-full grid-cols-3">
        <div className="flex justify-end">
          <img className="object-contain w-12 h-12" src={homeTeamStatistics.team.logo} alt="" />
        </div>

        <div className="flex items-center justify-center">

          <span className="font-bold">Match Statistics</span>
        </div>

        <div className="flex items-center justify-start">
          <img className="object-contain w-12 h-12" src={awayTeamStatistics.team.logo} alt="" />
        </div>
      </div>
      
      <div className="grid justify-center w-full grid-cols-3">

        
        <div className="flex flex-col items-end gap-2">
        {
        homeTeamStatistics.statistics.map((stats, index) => (
          <div className={` font-semibold 
          ${stats.value < awayTeamStatistics.statistics[index].value &&'text-orange-600'}
          ${stats.value > awayTeamStatistics.statistics[index].value && 'text-blue-600'}
          ${stats.value === awayTeamStatistics.statistics[index].value && 'text-primary'}
          flex items-center justify-center w-12 h-6 border rounded-md border-slate-300`} key={index}>
            {stats.value ? stats.value : 0}
          </div>
        ))
        }
        </div>
        <div className="flex flex-col items-center gap-2 ">
        {
        homeTeamStatistics.statistics.map((stats, index) => (
          <div className="flex items-center justify-center w-full h-6" key={index}>
            <div className="flex items-center w-full h-0 border-b border-slate-300"></div>
            <span className="p-2 min-w-max">{translateMatchStatisticTypes[stats.type] ? translateMatchStatisticTypes[stats.type] : stats.type}</span>
            <div className="flex items-center w-full h-0 border-b border-slate-300"></div>

          </div>
        ))
        }
        </div>

        <div className="flex flex-col items-start gap-2">
        {
        awayTeamStatistics.statistics.map((stats, index) => (
          <div className={` font-semibold
          ${stats.value < homeTeamStatistics.statistics[index].value &&'text-orange-600'}
          ${stats.value > homeTeamStatistics.statistics[index].value && 'text-blue-600'}
          ${stats.value === homeTeamStatistics.statistics[index].value && 'text-primary'}
          flex items-center justify-center w-12 h-6 border rounded-md border-slate-300`} key={index}>
            {stats.value ? stats.value : 0}
          </div>
        ))
        }
        </div>
      </div>
    
      
    </div>
  )
}

export default MatchStatistics;