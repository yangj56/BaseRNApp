import {NativeStackScreenProps} from '@react-navigation/native-stack';
import React from 'react';
import {Button, Text, View} from 'react-native';
import {CoinDataList} from '../components/CoinDataList';
import {ExchangeList} from '../components/ExchangeList';
import {JokeCard} from '../components/JokeCard';
import {useCoinData} from '../hooks/useCoinData';
import {useTypedSelector} from '../hooks/useTypedSelector';
import {useExchanges} from '../hooks/useExchange';
import {useJoke} from '../hooks/useJoke';
import {RootStackParamList} from '../typing';

type Props = NativeStackScreenProps<RootStackParamList, 'Home'>;

export const HomePage = ({navigation}: Props) => {
  const [joke, jokeLoading, jokeError] = useJoke();
  const {market} = useTypedSelector(state => state.coinStore);
  const [exchanges, exchangeLoading, exchangeError] = useExchanges();
  const [coinData, fetchmore, coinLoading, coinError] = useCoinData({
    market,
  });

  return (
    <>
      <View>
        <Text>Home Page</Text>
        <Button title="Go to Tab" onPress={() => navigation.navigate('Tab')} />
        <JokeCard joke={joke} loading={jokeLoading} error={jokeError} />
        <ExchangeList
          exchanges={exchanges}
          loading={exchangeLoading}
          error={exchangeError}
        />
        <CoinDataList
          coinData={coinData}
          fetchmore={fetchmore}
          loading={coinLoading}
          error={coinError}
        />
      </View>
    </>
  );
};
