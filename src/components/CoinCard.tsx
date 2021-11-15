import React from 'react';
import {StyleSheet, Text, View, ViewStyle} from 'react-native';
import {CoinData} from '../typing';

type Props = {
  coinData: CoinData;
};

export const CoinCard = ({coinData}: Props) => {
  return (
    <View style={styles.card} accessibilityLabel="coin card">
      <Text>Exchange: {coinData.exchange_id}</Text>
      <Text>Symbol: {coinData.symbol}</Text>
      <Text>Updated At: {coinData.updated_at}</Text>
      <Text>Price: {coinData.price}</Text>
      <Text>Volume: {coinData.volume_24h}</Text>
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
