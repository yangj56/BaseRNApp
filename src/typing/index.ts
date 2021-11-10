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
