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
      winner: null | string;
    };
    home: {
      id: number;
      name: string;
      logo: string;
      winner: null | string;
    };
  };
}