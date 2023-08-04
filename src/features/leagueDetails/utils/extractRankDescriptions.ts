import { TeamStanding } from "../types/types";

export const extractRankDescriptions = (leagueTeamStandings: TeamStanding[]) => {
  //gets all rank descriptions available in team standings, and returns them as string array.
  const descriptionsArr : string[] = []

  leagueTeamStandings.forEach(team => {
    if(team.description && !descriptionsArr.includes(team.description)){
      descriptionsArr.push(team.description)
    }
  });

  return descriptionsArr;

}