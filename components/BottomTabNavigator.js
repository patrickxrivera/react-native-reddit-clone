import React from 'react';
import { Button, Text, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { createStackNavigator, createBottomTabNavigator, TabBarBottom } from 'react-navigation';

import NavScreen from './shared/NavScreen';

const PostsScreen = ({ navigation }) => (
  <NavScreen>
    <Button title="Go to Random" onPress={() => navigation.navigate('Random')} />
    <Button title="Go to Login" onPress={() => navigation.navigate('Login')} />
  </NavScreen>
);

const RandomScreen = ({ navigation }) => (
  <NavScreen>
    <Button title="Go to Posts" onPress={() => navigation.navigate('Posts')} />
    <Button title="Go to Login" onPress={() => navigation.navigate('Login')} />
  </NavScreen>
);

const LoginScreen = () => (
  <NavScreen>
    <Text>Login!</Text>
  </NavScreen>
);

const PostsStack = createStackNavigator(
  {
    Posts: PostsScreen,
    Login: LoginScreen
  },
  {
    initialRouteName: 'Login',
    navigationOptions: ({ navigation }) => ({
      title: navigation.state.routeName
    })
  }
);

const RandomStack = createStackNavigator(
  {
    Random: RandomScreen,
    Login: LoginScreen
  },
  {
    navigationOptions: ({ navigation }) => ({
      title: navigation.state.routeName
    })
  }
);

export default createBottomTabNavigator(
  {
    Posts: PostsStack,
    Random: RandomStack
  },
  {
    navigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ focused, tintColor }) => {
        const { routeName } = navigation.state;

        let iconName;
        console.log(routeName);
        if (routeName === 'Posts') {
          iconName = `ios-paper${focused ? '' : '-outline'}`;
        } else if (routeName === 'Random') {
          iconName = `ios-repeat${focused ? '' : '-outline'}`;
        }

        // You can return any component that you like here! We usually use an
        // icon component from react-native-vector-icons
        return <Ionicons name={iconName} size={25} color={tintColor} />;
      }
    }),
    tabBarPosition: 'bottom',
    tabBarOptions: {
      activeTintColor: 'tomato',
      inactiveTintColor: 'gray'
    },
    animationEnabled: false,
    swipeEnabled: false
  }
);
