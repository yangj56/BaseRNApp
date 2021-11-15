export type RootStackParamList = {
  Home: undefined;
  Tab: undefined;
};

export type BottomTabParamList = {
  Profile: undefined;
  Setting: undefined;
};

export type Jokes = {
  error: boolean;
  category: JOKES;
  type: string;
  setup?: string;
  delivery?: string;
  joke?: string;
  flags: {
    nsfw: boolean;
    religious: boolean;
    political: boolean;
    racist: boolean;
    sexist: boolean;
    explicit: boolean;
  };
  id: number;
  safe: boolean;
  lang: string;
};

export enum JOKES {
  Any = 'Any',
  Misc = 'Misc',
  Programming = 'Programming',
  Dark = 'Dark',
  Pun = 'Pun',
  Spooky = 'Spooky',
  Christmas = 'Christmas',
}

export enum MARKET {
  BINANCE = 'BINANCE',
  COINBASE = 'COINBASE',
  BITTREX = 'BITTREX',
  HUOBIGLOBAL = 'HUOBIGLOBAL',
}

export type CoinData = {
  exchange_id: MARKET;
  symbol: string;
  base_asset: string;
  quote_asset: string;
  price_unconverted: number;
  price: number;
  change_24h: number;
  spread: number;
  volume_24h: number;
  status: string;
  created_at: string;
  updated_at: string;
};

export type CoinMarketData = {
  markets: CoinData[];
  next: string;
};

export type CoinExchange = {
  exchange_id: string;
  name: string;
  website: string;
  volume_24h: number;
};

export type CoinExchangesData = {
  exchanges: CoinExchange[];
};
