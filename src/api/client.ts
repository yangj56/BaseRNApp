import axios from 'axios';
import {Jokes, JOKES} from '../typing';

const instance = axios.create({
  baseURL: 'https://v2.jokeapi.dev/joke/',
  timeout: 10000,
});

export const fetchJokes = async (
  types: JOKES[],
  pageNumber: number,
): Promise<Jokes> => {
  console.log(`Fetching page ${pageNumber}`);
  const result = await instance.get(types.join(','));
  return result.data;
};
