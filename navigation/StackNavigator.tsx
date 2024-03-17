import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import BottomTab from './BottomTabs';
import ListDestination from '../src/sreens/Home/ListDestination';
import Sieges from '../src/sreens/Home/pages/Sierge';

const Stack = createNativeStackNavigator();

export default function StackNavigator() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="app" component={BottomTab} />
      <Stack.Screen name="listDestination" component={ListDestination} />
      <Stack.Screen name="Siege" component={Sieges} />
    </Stack.Navigator>
  );
}