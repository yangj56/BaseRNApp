import React from 'react';
import {View, Text, StyleSheet, ViewStyle} from 'react-native';
import {CoinExchange} from '../typing';
import {ErrorPage} from './Error';

type Props = {
  exchange: CoinExchange;
};
export const ExchangeCard = (props: Props) => {
  return (
    <View style={styles.card}>
      <Text>{props.exchange.name}</Text>
      <Text>{props.exchange.volume_24h}</Text>
      <Text>{props.exchange.website}</Text>
    </View>
  );
};

interface Style {
  card: ViewStyle;
}

const styles = StyleSheet.create<Style>({
  card: {
    marginVertical: 10,
  },
});
