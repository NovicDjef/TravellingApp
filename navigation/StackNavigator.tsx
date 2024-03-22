import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import BottomTab from './BottomTabs';
import ListDestination from '../src/sreens/Home/ListDestination';
import DetailAgence from '../src/sreens/Home/DetailAgence';
import ReservationScreen from '../src/sreens/Home/pages/ReservationScreen';
import paiement from '../src/sreens/Home/pages/paiement';

const Stack = createNativeStackNavigator();

export default function StackNavigator() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="app" component={BottomTab} />
      <Stack.Screen name="listDestination" component={ListDestination} />
      <Stack.Screen name="DetailAgence" component={DetailAgence} />
      <Stack.Screen name="reservation" component={ReservationScreen} />
      <Stack.Screen name="paiment" component={paiement} />
    </Stack.Navigator>
  );
}