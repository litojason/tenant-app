import React, {Component} from 'react';
import {View, Text} from 'react-native';
import {createAppContainer, createSwitchNavigator} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import {createBottomTabNavigator} from 'react-navigation-tabs';

import {COLORS, STYLES} from '../components/styles';
import Icon from '../components/Icon';

import Login from '../screens/auth/Login';
import Register from '../screens/auth/Register';
import SetPayment from '../screens/auth/SetPayment';
import BankLogin from '../screens/auth/BankLogin';
import TanNumber from '../screens/auth/TanNumber';

import Home from '../screens/tabs/Home';
import Notification from '../screens/tabs/Notification';
import Payment from '../screens/tabs/Payment';
import Profile from '../screens/tabs/Profile';
import Settings from '../screens/tabs/Settings';

import PayNow from '../screens/PayNow';

const AuthStack = createStackNavigator(
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

const Tabs = createBottomTabNavigator(
  {
    Home: Home,
    Notification: Notification,
    Payment: Payment,
    Profile: Profile,
    Settings: Settings,
  },
  {
    tabBarOptions: {
      showLabel: false,
      activeTintColor: COLORS.main,
      inactiveTintColor: COLORS.grey,
      style: {
        height: 60,
      },
    },
    defaultNavigationOptions: ({navigation}) => ({
      tabBarIcon: ({focused, tintColor}) => {
        const {routeName} = navigation.state;
        let iconName;
        if (routeName === 'Home') {
          iconName = focused ? 'home' : 'home-outline';
        } else if (routeName === 'Notification') {
          iconName = focused ? 'bell-ring' : 'bell-ring-outline';
        } else if (routeName === 'Profile') {
          iconName = focused ? 'account' : 'account-outline';
        } else if (routeName === 'Settings') {
          iconName = focused ? 'settings' : 'settings-outline';
        }
        if (routeName === 'Payment') {
          return (
            <View
              style={{
                alignItems: 'center',
                justifyContent: 'center',
                width: focused ? 60 : 50,
                height: focused ? 60 : 50,
                borderRadius: 20,
                borderBottomLeftRadius: focused ? 0 : 20,
                borderBottomRightRadius: focused ? 0 : 20,
                backgroundColor: COLORS.main,
              }}>
              <Text style={STYLES.textBigWhite}>Pay</Text>
            </View>
          );
        }
        return <Icon name={iconName} size={30} color={tintColor} />;
      },
    }),
  },
);

const MenuStack = createStackNavigator(
  {
    Tabs: Tabs,
    PayNow: PayNow,
  },
  {
    defaultNavigationOptions: {
      headerShown: false,
    },
  },
);

const AppNavigator = createAppContainer(
  createSwitchNavigator(
    {
      AuthStack: AuthStack,
      MenuStack: MenuStack,
    },
    {
      initialRouteName: 'AuthStack',
    },
  ),
);

export default class Navigation extends Component {
  render() {
    return (
      <View style={{flex: 1, backgroundColor: COLORS.white}}>
        <AppNavigator />
      </View>
    );
  }
}
