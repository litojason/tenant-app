import React, {Component} from 'react';
import {Text, View} from 'react-native';

import Login from './screens/auth/Login';
import Register from './screens/auth/Register';
import SetPayment from './screens/auth/SetPayment';
import BankLogin from './screens/auth/BankLogin';
import TanNumber from './screens/auth/TanNumber';

export default class App extends Component {
  render() {
    // return <Login />;
    // return <Register />;
    // return <SetPayment />;
    // return <BankLogin />;
    return <TanNumber />;
  }
}
