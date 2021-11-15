import {useEffect, useState} from 'react';
import {fetchExchanges} from '../api/client';
import {CoinExchangesData} from '../typing';

export const useExchanges = (): [
  CoinExchangesData | undefined,
  boolean,
  string | undefined,
] => {
  const [exchanges, setExchanges] = useState<CoinExchangesData>();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string>();

  useEffect(() => {
    let timer: NodeJS.Timeout;
    const fetchAPI = async () => {
      try {
        const response = await fetchExchanges();
        setExchanges(response);
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

  return [exchanges, loading, error];
};
