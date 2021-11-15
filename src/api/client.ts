import axios from 'axios';
import {
  CoinExchangesData,
  CoinMarketData,
  Jokes,
  JOKES,
  MARKET,
} from '../typing';

const jokeInstance = axios.create({
  baseURL: 'https://v2.jokeapi.dev/joke/',
  timeout: 10000,
});

const cryptoInstance = axios.create({
  baseURL: 'https://www.cryptingup.com/api/',
  timeout: 10000,
});

export const fetchJokes = async (types: JOKES[]): Promise<Jokes> => {
  const result = await jokeInstance.get(types.join(','));
  return result.data;
};

export const fetchCoinMarket = async (size: number, page: number) => {
  const result = await cryptoInstance.get('markets', {
    params: {
      size,
      page,
    },
  });
  // console.log(result);
};

export const fetchExchanges = async (): Promise<CoinExchangesData> => {
  const result = await cryptoInstance.get('exchanges');
  return result.data;
};

export const fetchCoinData = async (
  size: number,
  page: number,
  market: MARKET,
): Promise<CoinMarketData> => {
  const result = await cryptoInstance.get(`exchanges/${market}/markets`, {
    params: {
      size,
      start: page,
    },
  });
  return result.data;
};
