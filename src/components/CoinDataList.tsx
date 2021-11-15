import React from 'react';
import {FlatList} from 'react-native';
import {CoinData} from '../typing';
import {Card} from './Card';
import {CoinCard} from './CoinCard';
import {ErrorPage} from './Error';
import {Loading} from './Loading';

type Props = {
  coinData: CoinData[];
  fetchmore?: () => void;
  error?: string;
  loading?: boolean;
};
export const CoinDataList = ({coinData, fetchmore, error, loading}: Props) => {
  if (!coinData) {
    return <Loading text={'CoinData State Loading'} />;
  }
  if (error) {
    return <ErrorPage error={error} />;
  }
  const renderRow = ({item}: {item: CoinData; index: number}) => {
    return <CoinCard coinData={item} />;
  };
  return (
    <Card color={'lightcyan'} height={400}>
      <FlatList
        data={coinData}
        renderItem={renderRow}
        onEndReached={fetchmore}
        keyExtractor={item => item.symbol}
        onEndReachedThreshold={0.9}
      />
    </Card>
  );
};
