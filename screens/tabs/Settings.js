import React, {Component} from 'react';
import {Text, View} from 'react-native';

import {COLORS} from '../../components/styles';

export default class Settings extends Component {
  render() {
    return (
      <View
        style={{
          flex: 1,
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: COLORS.white,
        }}>
        <Text>Settings</Text>
      </View>
    );
  }
}
