import { Player } from "../../../types/types";

export const returnContributionWidthPct = (player: Player, topGoalContributors:Player[]) => {
    
  const highestContribution = topGoalContributors[0].statistics[0].goals.total + topGoalContributors[0].statistics[0].goals.assists;
  const currentContribution = player.statistics[0].goals.total + player.statistics[0].goals.assists;
  return `${((currentContribution / highestContribution) * 100).toFixed(0)}%`
  
}