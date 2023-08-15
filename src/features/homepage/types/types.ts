import { FixtureStatistics, Lineups, Player, Team } from "../../../types/types";

export type Fixture = {
  fixture: {
    date: string;
    id: number;
    periods: { first: null | number | string; second: null | number | string };
    referee: null | string;
    status: { long: string; short: string; elapsed: null | number };
    timestamp: number;
    timezone: string;
    venue: {
      id: number;
      name: string;
      city: string;
    };
  }
  
  goals: {
    away: null | number;
    home: null | number;
  };
  league: {
    country: string;
    flag: string;
    id: number;
    logo: string;
    name: string;
    round: string;
    season: number;
  };
  score: {
    extratime: { home: null | number; away: null | number };
    fulltime: { home: null | number; away: null | number };
    halftime: { home: null | number; away: null | number };
    penalty: { home: null | number; away: null | number };
  };
  teams: {
    away: {
      id: number;
      name: string;
      logo: string;
      winner: null | boolean;
    };
    home: {
      id: number;
      name: string;
      logo: string;
      winner: null | boolean;
    };
  };
  events?: {
    assist: { id : null | number , name: null | string},
    comments: string | null;
    detail : string | null; 
    player : { id: number, name: string };
    team: {id : number, name: string, logo: string};
    time: { elapsed: null | number };
    type: string
  }[];
  players?: { players: Player[], team : Team }[]
  lineups?: Lineups[]
  statistics?: FixtureStatistics;
}

//players, lineups, statistics