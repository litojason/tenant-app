import React, {Component} from 'react';
import {View} from 'react-native';
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import {createBottomTabNavigator} from 'react-navigation-tabs';

import {COLORS} from '../components/styles';
import Login from '../screens/auth/Login';
import Register from '../screens/auth/Register';
import SetPayment from '../screens/auth/SetPayment';
import BankLogin from '../screens/auth/BankLogin';
import TanNumber from '../screens/auth/TanNumber';

const Stack = createStackNavigator(
  {
    Login: Login,
    Register: Register,
    SetPayment: SetPayment,
    BankLogin: BankLogin,
    TanNumber: TanNumber,
  },
  {
    defaultNavigationOptions: {
      headerShown: false,
    },
  },
);

// const Tabs = createBottomTabNavigator({});

const App = createAppContainer(Stack);

export default class Navigation extends Component {
  render() {
    return (
      <View style={{flex: 1}}>
        <App />
      </View>
    );
  }
}
