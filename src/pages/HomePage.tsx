import {NativeStackScreenProps} from '@react-navigation/native-stack';
import React, {useState} from 'react';
import {Button, Text, View} from 'react-native';
import {CardPage} from '../components/Card';
import {ErrorPage} from '../components/Error';
import {Loading} from '../components/Loading';
import {useJoke} from '../hooks/useJoke';
import {RootStackParamList} from '../typing';

type Props = NativeStackScreenProps<RootStackParamList, 'Home'>;

export const HomePage = ({navigation}: Props) => {
  const [page, setPage] = useState(0);
  const [jokes, loading, error] = useJoke(page);

  return (
    <>
      <View>
        <Text>Home Page</Text>
        <Button title="Go to Tab" onPress={() => navigation.navigate('Tab')} />
        {jokes.map((data, index) => (
          <CardPage key={`${index}-card`} joke={data} />
        ))}
      </View>
      {loading && <Loading />}
      {!!error && <ErrorPage error={error} />}
    </>
  );
};
