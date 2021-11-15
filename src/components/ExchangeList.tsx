import React from 'react';
import {ScrollView, StyleSheet, View, ViewStyle} from 'react-native';
import {CoinExchangesData} from '../typing';
import {Card} from './Card';
import {ErrorPage} from './Error';
import {ExchangeCard} from './ExchangeCard';
import {Loading} from './Loading';

type Props = {
  exchanges?: CoinExchangesData;
  error?: string;
  loading?: boolean;
};

export const ExchangeList = ({exchanges, loading, error}: Props) => {
  if (loading) {
    return <Loading text={'Exchanges API Loading'} />;
  }
  if (!exchanges) {
    return <Loading text={'Exchanges State Loading'} />;
  }
  if (error) {
    return <ErrorPage error={error} />;
  }
  return (
    <Card color={'tomato'}>
      <ScrollView>
        {exchanges.exchanges.map(item => (
          <ExchangeCard exchange={item} key={`${item.exchange_id}`} />
        ))}
      </ScrollView>
    </Card>
  );
};
