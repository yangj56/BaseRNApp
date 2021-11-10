import React from 'react';
import {View, Text} from 'react-native';
import {Jokes} from '../typing';

type Props = {
  joke: Jokes;
};
export const CardPage = (props: Props) => {
  return (
    <View>
      <Text>{props.joke.category}</Text>
      {props.joke.setup && props.joke.delivery && (
        <>
          <Text>{props.joke.setup}</Text>
          <Text>{props.joke.delivery}</Text>
        </>
      )}
      {props.joke.joke && <Text>{props.joke.joke}</Text>}
    </View>
  );
};
