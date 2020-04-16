import React, {Component} from 'react';
import {Text, View, TextInput} from 'react-native';

import {COLORS, STYLES} from './styles';
import Icon from './Icon';

export default class AuthInput extends Component {
  render() {
    return (
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          width: '100%',
          marginBottom: 20,
          paddingBottom: 10,
          borderBottomWidth: 0.5,
          borderBottomColor: COLORS.grey,
        }}>
        <Icon name={this.props.icon} size={20} color={COLORS.grey} />
        <TextInput
          placeholder={this.props.placeholder}
          placeholderTextColor={COLORS.grey}
          keyboardType={this.props.keyboardType}
          secureTextEntry={this.props.secureTextEntry}
          style={[
            STYLES.textNormal,
            {flex: 1, margin: 0, marginLeft: 10, padding: 0},
          ]}
        />
      </View>
    );
  }
}
