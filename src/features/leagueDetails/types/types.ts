export type Player = {
  player: {
    age: number;
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
  },
  statistics: {
    cards: {
      yellow: number;
      yellowred: number;
      red: number;
    };
    dribbles: {
      attempts: number;
      success: number;
      past: null; // Update 'any' with the appropriate type if possible
    };
    duels: {
      total: number;
      won: number;
    };
    fouls: {
      drawn: number;
      committed: number;
    };
    games: {
      appearences: number;
      lineups: number;
      minutes: number;
      number: null | number;
      position: string;
    };
    goals: {
      total: number;
      conceded: number;
      assists: number;
      saves: null | number;
    };
    league: {
      id: number;
      name: string;
      country: string;
      logo: string;
      flag: string;
    };
    passes: {
      total: number;
      key: number;
      accuracy: number;
    };
    penalty: {
      won: null | number;
      commited: null | number;
      scored: number;
      missed: number;
      saved: null | number;
    };
    shots: {
      total: number;
      on: number;
    };
    substitutes: {
      in: number;
      out: number;
      bench: number;
    };
    tackles: {
      total: number;
      blocks: number;
      interceptions: number;
    };
    team: {
      id: number;
      logo: string;
      name: string;
      
    };
  }[]
}


export type PlayerStatistics = {
  cards: {
    yellow: number;
    yellowred: number;
    red: number;
  };
  dribbles: {
    attempts: number;
    success: number;
    past: null; // Update 'any' with the appropriate type if possible
  };
  duels: {
    total: number;
    won: number;
  };
  fouls: {
    drawn: number;
    committed: number;
  };
  games: {
    appearences: number;
    lineups: number;
    minutes: number;
    number: null | number;
    position: string;
  };
  goals: {
    total: number;
    conceded: number;
    assists: number;
    saves: null | number;
  };
  league: {
    id: number;
    name: string;
    country: string;
    logo: string;
    flag: string;
  };
  passes: {
    total: number;
    key: number;
    accuracy: number;
  };
  penalty: {
    won: null | number;
    commited: null | number;
    scored: number;
    missed: number;
    saved: null | number;
  };
  shots: {
    total: number;
    on: number;
  };
  substitutes: {
    in: number;
    out: number;
    bench: number;
  };
  tackles: {
    total: number;
    blocks: number;
    interceptions: number;
  };
  team: {
    id: number;
    logo: string;
    name: string;
    
  };
}
