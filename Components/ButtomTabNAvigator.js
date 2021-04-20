import React from 'react'
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { Text, View } from 'native-base';
import Home from './Home';
import Notifications from './Notifications';
import HomeStack from './HomeStack';
import Profile from './Profile';

const Tab = createMaterialBottomTabNavigator();

function ButtomTabNAvigator({navigation}) {
  return (
    <Tab.Navigator
      initialRouteName="home"
      activeColor="#fff"
      barStyle={{ backgroundColor: '#4267B2' }}
    >
      <Tab.Screen
        name="home"
        component={HomeStack}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="home" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="Notifications"
        component={Notifications}
        options={{
          tabBarLabel: 'Updates',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="bell" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarLabel: 'Profile',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="account" color={color} size={26} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

export default ButtomTabNAvigator;