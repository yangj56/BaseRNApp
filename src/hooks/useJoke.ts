import {useState, useEffect} from 'react';
import {fetchJokes} from '../api/client';
import {Jokes, JOKES} from '../typing';

export const useJoke = (): [Jokes | undefined, boolean, string | undefined] => {
  const [jokes, setJokes] = useState<Jokes>();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string>();

  useEffect(() => {
    let timer: NodeJS.Timeout;
    const fetchAPI = async () => {
      try {
        const response = await fetchJokes([JOKES.Christmas, JOKES.Dark]);
        setJokes(response);
        timer = setTimeout(() => {
          setLoading(false);
        }, 1000);
      } catch (err) {
        setError('fetching data failed');
        setLoading(false);
      }
    };
    setLoading(true);
    setError('');
    fetchAPI();
    return () => clearTimeout(timer);
  }, []);

  return [jokes, loading, error];
};
