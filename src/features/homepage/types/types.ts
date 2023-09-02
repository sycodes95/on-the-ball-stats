import { TeamStanding } from "../../league/types/types"


export type TopTeamsType = {
  country : string,
  flag: string,
  id: number,
  logo: string,
  name: string,
  season: number,
  standings: TeamStanding[][];
}