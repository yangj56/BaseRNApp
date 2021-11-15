import React from 'react';
import {StyleSheet, View, ViewStyle} from 'react-native';

type Props = {
  children: JSX.Element | JSX.Element[];
  color: string;
  height?: number;
};

export const Card = ({children, color, height}: Props) => {
  return <View style={styles(color, height).card}>{children}</View>;
};

interface Style {
  card: ViewStyle;
}

const styles = (color: string, height = 200) =>
  StyleSheet.create<Style>({
    card: {
      height,
      backgroundColor: color,
      marginVertical: 10,
    },
  });
