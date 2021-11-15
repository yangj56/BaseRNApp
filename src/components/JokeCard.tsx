import React from 'react';
import {View, Text} from 'react-native';
import {Jokes} from '../typing';
import {Card} from './Card';
import {ErrorPage} from './Error';
import {Loading} from './Loading';

type Props = {
  joke?: Jokes;
  error?: string;
  loading?: boolean;
};
export const JokeCard = ({joke, error, loading}: Props) => {
  if (loading) {
    return <Loading text={'Joke API Loading'} />;
  }
  if (!joke) {
    return <Loading text={'Joke State Loading'} />;
  }
  if (error) {
    return <ErrorPage error={error} />;
  }
  return (
    <Card color={'beige'} height={100}>
      <Text>This is joke section</Text>
      <Text>{joke.category}</Text>
      <>
        {joke.setup && joke.delivery && (
          <>
            <Text>{joke.setup}</Text>
            <Text>{joke.delivery}</Text>
          </>
        )}
      </>
      <>{joke.joke && <Text>{joke.joke}</Text>}</>
    </Card>
  );
};
