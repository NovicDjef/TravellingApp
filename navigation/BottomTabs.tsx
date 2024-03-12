import { StyleSheet, Platform } from 'react-native';
import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from "react-native-vector-icons/FontAwesome";
import Favorite from '../src/sreens/Favorite/Favorite';
import Ticket from "../src/sreens/Ticket/Ticket"
import Home from '../src/sreens/Home/Home';
import Settings from '../src/sreens/Settings/Settings';
import { regular, semiBold } from '../src/utils/fonts';

const BottomTabNavigator = createBottomTabNavigator();

export default function BottomTab() {
  //   const tabBarHeight = useBottomTabBarHeight();
  return (
    <BottomTabNavigator.Navigator
      screenOptions={{
        tabBarLabelStyle: styles.label,
        headerShown: false,

        headerTitleStyle: styles.header,
        tabBarStyle: [
          styles.tabContainer,
          Platform.OS === 'ios' && {
            shadowOffset: { height: -2, width: 2 },
            shadowOpacity: 0.1,
            shadowRadius: 15,
          },
        ],
        tabBarItemStyle: {
          marginBottom: 7,
        },
        tabBarInactiveTintColor: 'gray',
        tabBarActiveTintColor: '#02b875',
      }}
      safeAreaInsets={{
        bottom: 0,
      }}
    >
         <BottomTabNavigator.Screen
        options={{
          tabBarIcon: ({ focused }) => (
            <Icon
              name="home"
              size={24}
              color={focused ? '#02b875' : 'gray'}
            />
          ),
        }}
        name="Home"
        component={Home}
      />
      <BottomTabNavigator.Screen
        options={{
          tabBarIcon: ({ focused }) => (
            <Icon
              name="ticket"
              size={22}
              color={focused ? '#02b875' : 'gray'}
            />
          ),
        }}
        name="Tickets"
        component={Ticket}
      />
      <BottomTabNavigator.Screen
        name="Favorites"
        component={Favorite}
        options={{
          tabBarIcon: ({ focused }) => (
            <Icon
              name="heart"
              size={22}
              color={focused ? '#02b875' : 'gray'}
            />
          ),
        }}
      />
      <BottomTabNavigator.Screen
        name="Settings"
        component={Settings}
        options={{
          tabBarIcon: ({ focused }) => (
            <Icon
              name="gears"
              size={22}
              color={focused ? '#02b875' : 'gray'}
            />
          ),
        }}
      />
    </BottomTabNavigator.Navigator>
  );
}

const styles = StyleSheet.create({
  header: {
    ...semiBold,
    textTransform: 'capitalize',
  },
  tabContainer: {
    position: 'absolute',
    width: '90%',
    borderRadius: 12,
    left: '5%',
    bottom: 20,
    // backgroundColor: '#121212',
    height: 60,
  },
  label: {
    textTransform: 'capitalize',
    ...regular,
    fontSize: 12,
  },
});