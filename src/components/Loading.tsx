import React from 'react';
import {
  ActivityIndicator,
  StyleSheet,
  Text,
  View,
  ViewStyle,
} from 'react-native';

export const Loading = () => {
  return (
    <View style={styles.loading}>
      <ActivityIndicator size="large" color="tomato" />
    </View>
  );
};

interface Style {
  loading: ViewStyle;
}

const styles = StyleSheet.create<Style>({
  loading: {
    position: 'absolute',
    height: '100%',
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(219, 148, 148, 0.8)',
  },
});
