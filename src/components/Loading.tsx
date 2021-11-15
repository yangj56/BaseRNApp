import React from 'react';
import {
  ActivityIndicator,
  StyleSheet,
  Text,
  View,
  ViewStyle,
} from 'react-native';

type Props = {
  text: string;
};

export const Loading = ({text}: Props) => {
  return (
    <View style={styles.loading}>
      <Text>{text}</Text>
      <ActivityIndicator size="large" color="tomato" />
    </View>
  );
};

interface Style {
  loading: ViewStyle;
}

const styles = StyleSheet.create<Style>({
  loading: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(219, 148, 148, 0.8)',
  },
});
