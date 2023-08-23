export type Player = {
  player: PlayerDetails;
  statistics: PlayerStatistics[];
}

export type Team = {
  id: number;
  logo: string;
  name: string;
  update?: string;
}

export type PlayerDetails = {
  age?: number;
  birth: { 
    date: string, 
    place: string, 
    country: string
  };
  firstname: string;
  height: string;
  id: number;
  injured: boolean;
  lastname: string;
  name: string;
  nationality: string;
  photo: string;
  weight: string;
}

export type PlayerStatistics = {
  
  cards: {
    yellow: number | null;
    yellowred: number | null;
    red: number | null;
  };
  dribbles: {
    attempts: number | null;
    success: number | null;
    past: number | null;
  };
  duels: {
    total: number | null;
    won: number | null;
    
  };
  fouls: {
    drawn: number | null;
    committed: number | null;
  };
  games: {
    appearences: number | null;
    captain: boolean;
    lineups: number | null;
    minutes: number | null;
    number: number | null;
    position: string;
    rating: string | null;
  };
  goals: {
    assists: number | null;
    condeded: number | null;
    saves: number | null;
    total: number | null;

  };
  league: {
    country: string;
    flag: string;
    id: number;
    logo: string;
    name: string;
    season: number;

  };
  passes: {
    accuracy: number | null;
    key: number | null;
    total: number | null;

  };
  penalty: {
    committed: number | null;
    missed: number | null;
    saved: number | null;
    scored: number | null;
    won: number | null;

  };
  shots: {
    on: number | null;
    total: number | null;
  };
  substitutes: {
    bench: number | null;
    in: number | null;
    out: number | null;

  };
  tackles: {
    blocks: number | null;
    interceptions: number | null;
    total: number | null;
  };
  team: {
    id: number;
    logo: string;
    name: string;
  };
}

// export type Lineups = {
//   coach: {
//     id: number;
//     name: string;
//     photo?: string;
//   };
//   formation: string;
//   startXI: {
//     player: LineUpStartXIPlayer;
//   }[]
// }

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
    player : LineUpStartXIPlayer;
  }[];
  substitutes: {
    player : LineUpStartXIPlayer;
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
  photo?: string;
}

export type LineUpSubstitutesPlayer = {
  grid: string | null;
  id: number;
  name: string;
  number : number;
  pos: string;
  photo?: string;
}
