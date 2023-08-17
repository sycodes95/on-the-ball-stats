export type Player = {
  player: {
    age?: number;
    birth?: { 
      date: string, 
      place: string, 
      country: string
    };
    firstname?: string;
    height?: string;
    id: number;
    injured?: boolean;
    lastname?: string;
    name?: string;
    nationality?: string;
    photo?: string;
    weight?: string;
  },
  statistics: {
    cards?: {
      yellow: number;
      yellowred: number;
      red: number;
    };
    dribbles?: {
      attempts: number;
      success: number;
      past: null; // Update 'any' with the appropriate type if possible
    };
    duels?: {
      total: number;
      won: number;
    };
    fouls?: {
      drawn: number;
      committed: number;
    };
    games?: {
      appearences: number;
      lineups: number;
      minutes: number;
      number: null | number;
      position: string;
    };
    goals?: {
      total: number;
      conceded: number;
      assists: number;
      saves: null | number;
    };
    league?: {
      id: number;
      name: string;
      country: string;
      logo: string;
      flag: string;
    };
    passes?: {
      total: number;
      key: number;
      accuracy: number;
    };
    penalty?: {
      won: null | number;
      commited: null | number;
      scored: number;
      missed: number;
      saved: null | number;
    };
    shots?: {
      total: number;
      on: number;
    };
    substitutes?: {
      in: number;
      out: number;
      bench: number;
    };
    tackles?: {
      total: number;
      blocks: number;
      interceptions: number;
    };
    team?: {
      id: number;
      logo: string;
      name: string;
    };
  }[]
}

export type Team = {
  id: number;
  logo: string;
  name: string;
  update?: string;
}

export type Lineups = {
  coach: {
    id: number;
    name: string;
    photo?: string;
  };
  formation: string;
  startXI: {
    player: {
      grid: string;
      id: number;
      name: string;
      number: number;
      pos: string;
    }
  }[]
}

export type FixtureStatistics = {
  statistics: {
    type : string,
    value : string | number
  }[];
  team: Team;
};

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
    extratime: { home: null | number; away: null | number; };
    fulltime: { home: null | number; away: null | number; };
    halftime: { home: null | number; away: null | number; };
    penalty: { home: null | number; away: null | number; };
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
    assist: { id : null | number; name: null | string;},
    comments: string | null;
    detail : string | null; 
    player : { id: number, name: string };
    team: {id : number, name: string, logo: string};
    time: { elapsed: null | number };
    type: string
  }[];
  players?: { players: Player[], team : Team }[]
  lineups?: LineUp[]
  statistics?: FixtureStatistics[];
};

export type LineUp = {
  coach: {
    id: number;
    name: string;
    photo: string;
  };
  formation: string;
  startXI: {
    player : {
      grid: string | null;
      id: number;
      name: string;
      number : number;
      pos: string;
    }
  }[];
  substitutes: {
    player : {
      grid: string | null;
      id: number;
      name: string;
      number : number;
      pos: string;
    }
  }[];
  team : {
    colors: {
      goalkeeper: {
        primary: string;
        number: string;
        border: string;
      };
      player: {
        primary: string;
        number: string;
        border: string;
      };
    };
    id: number;
    logo: string;
    name: string;
  }


}

export type LineUpStartXIPlayer = {
  grid: string | null;
  id: number;
  name: string;
  number : number;
  pos: string;
}
