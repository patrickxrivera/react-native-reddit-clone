import React from 'react';
import { Button, Text, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { createStackNavigator, createBottomTabNavigator, TabBarBottom } from 'react-navigation';

import NavScreen from '../shared/NavScreen';

const LoginScreen = () => (
  <NavScreen>
    <Text>Login!</Text>
  </NavScreen>
);

export default createStackNavigator({
  Login: LoginScreen
});
