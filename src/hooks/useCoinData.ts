import {useCallback, useEffect, useState} from 'react';
import {fetchCoinData} from '../api/client';
import {CoinData, MARKET} from '../typing';

type Props = {
  market: MARKET;
};

const PAGE_SIZE = 10;

export const useCoinData = (
  props: Props,
): [CoinData[], () => void, boolean, string | undefined] => {
  const [coinData, setCoinData] = useState<CoinData[]>([]);
  const [shouldFetch, setShouldFetch] = useState(true);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string>();
  const [page, setPage] = useState(0);
  const fetchMore = useCallback(() => setShouldFetch(true), []);

  useEffect(() => {
    let timer: NodeJS.Timeout;
    const fetchAPI = async () => {
      if (!shouldFetch) {
        return;
      }
      try {
        const response = await fetchCoinData(PAGE_SIZE, page, props.market);
        setShouldFetch(false);
        setLoading(true);
        setError('');
        setCoinData(prev => [...prev, ...response.markets]);
        setPage(page => page + parseInt(response.next));

        timer = setTimeout(() => {
          setLoading(false);
        }, 1000);
      } catch (err) {
        setError('fetching data failed');
        setLoading(false);
        setShouldFetch(true);
      }
    };

    fetchAPI();
    return () => clearTimeout(timer);
  }, [page, props.market, shouldFetch]);

  return [coinData, fetchMore, loading, error];
};
