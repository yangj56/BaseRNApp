import {useState, useEffect} from 'react';
import {fetchJokes} from '../api/client';
import {Jokes, JOKES} from '../typing';

export const useJoke = (
  page: number,
): [Jokes[], boolean, string | undefined] => {
  const [jokes, setJokes] = useState<Jokes[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string>();

  useEffect(() => {
    let timer: NodeJS.Timeout;
    async function fetchMyAPI() {
      try {
        const response = await fetchJokes([JOKES.Christmas, JOKES.Dark], page);
        setJokes(prev => [...prev, response]);
        timer = setTimeout(() => {
          setLoading(false);
        }, 1000);
      } catch (err) {
        setError('fetching data failed');
        setLoading(false);
      }
    }
    setLoading(true);
    setError('');
    fetchMyAPI();
    return () => clearTimeout(timer);
  }, [page]);

  return [jokes, loading, error];
};
