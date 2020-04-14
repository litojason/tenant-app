import React, {Component} from 'react';
import {Text, View, Image, TouchableOpacity} from 'react-native';

import {COLORS, DIMENSIONS, STYLES} from '../../components/styles';
import AuthInput from '../../components/AuthInput';

export default class Login extends Component {
  render() {
    return (
      <View style={{flex: 1, backgroundColor: COLORS.white}}>
        <Image
          source={require('../../assets/scenery5.jpg')}
          style={{
            width: DIMENSIONS.width,
            height: DIMENSIONS.height / 2,
            resizeMode: 'cover',
          }}
        />
        <View
          style={{
            position: 'absolute',
            bottom: 0,
            justifyContent: 'center',
            width: DIMENSIONS.width,
            minHeight: DIMENSIONS.height / 2 + 40,
            maxHeight: DIMENSIONS.height,
            padding: 30,
            paddingTop: 40,
            backgroundColor: COLORS.white,
            borderRadius: 40,
          }}>
          <Text style={[STYLES.textTitle, {marginBottom: 30}]}>Welcome</Text>

          <AuthInput placeholder="Email" icon="email-outline" />
          <AuthInput placeholder="Password" icon="key-outline" />

          <TouchableOpacity
            onPress={() => this.props.navigation.navigate('SetPayment')}
            style={[STYLES.buttonContainerOutline, {marginVertical: 10}]}>
            <Text style={STYLES.buttonTextOutline}>Sign in</Text>
          </TouchableOpacity>

          <TouchableOpacity>
            <Text
              style={{
                fontSize: 16,
                fontWeight: 'bold',
                color: COLORS.grey,
                textAlign: 'center',
                marginBottom: 30,
              }}>
              Forgot password?
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => this.props.navigation.navigate('Register')}
            style={STYLES.buttonContainer}>
            <Text style={STYLES.buttonText}>Create Account</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}
