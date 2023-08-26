import { Player } from "../../../types/types";

export const returnContributionWidthPct = (player: Player, topGoalContributors:Player[]) => {
    
  const highestContribution = 
  (topGoalContributors[0].statistics[0].goals.total ?? 0)
  + 
  (topGoalContributors[0].statistics[0].goals.assists ?? 0);
  const currentContribution = (player.statistics[0].goals.total ?? 0) + (player.statistics[0].goals.assists ?? 0);
  return `${((currentContribution / highestContribution) * 100).toFixed(0)}%`
  
}