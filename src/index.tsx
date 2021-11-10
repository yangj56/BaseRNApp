import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import * as React from 'react';
import {HomePage} from './pages/HomePage';
import {ProfilePage} from './pages/tab/Profile';
import {SettingPage} from './pages/tab/Setting';
import {BottomTabParamList, RootStackParamList} from './typing';

const RootStack = createNativeStackNavigator<RootStackParamList>();
const BottomTabNavigator = createBottomTabNavigator<BottomTabParamList>();

export const EntryComponent = () => {
  return (
    <RootStack.Navigator>
      <RootStack.Screen name="Home" component={HomePage} />
      <RootStack.Screen name="Tab" component={HomeTab} />
    </RootStack.Navigator>
  );
};

function HomeTab() {
  return (
    <BottomTabNavigator.Navigator>
      <BottomTabNavigator.Screen name="Profile" component={ProfilePage} />
      <BottomTabNavigator.Screen name="Setting" component={SettingPage} />
    </BottomTabNavigator.Navigator>
  );
}
