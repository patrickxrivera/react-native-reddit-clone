import React from 'react';
import { Button, Text, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { createStackNavigator, createBottomTabNavigator, TabBarBottom } from 'react-navigation';

import LoginScreen from './components/Login';
import { navigationOptionsBuilder } from './shared/utils';

const RootStack = createStackNavigator({ Login: LoginScreen }, navigationOptionsBuilder);

const App = () => <RootStack />;

export default App;
