import React, {Component} from 'react';
import {Text, View, Image, TouchableOpacity} from 'react-native';

import {COLORS, DIMENSIONS, STYLES} from '../../components/styles';
import AuthInput from '../../components/AuthInput';

export default class Register extends Component {
  render() {
    return (
      <View style={{flex: 1, backgroundColor: COLORS.white}}>
        <Image
          source={require('../../assets/scenery5.jpg')}
          style={{
            width: DIMENSIONS.width,
            height: DIMENSIONS.height / 2.5,
            resizeMode: 'cover',
          }}
        />
        <View
          style={{
            position: 'absolute',
            bottom: 0,
            justifyContent: 'center',
            width: DIMENSIONS.width,
            minHeight: DIMENSIONS.height / 2.5 + 40,
            maxHeight: DIMENSIONS.height,
            padding: 30,
            paddingTop: 40,
            backgroundColor: COLORS.white,
            borderRadius: 40,
          }}>
          <Text style={[STYLES.textTitle, {marginBottom: 30}]}>
            Create Account
          </Text>

          <AuthInput placeholder="First Name" icon="account-outline" />
          <AuthInput placeholder="Last Name" icon="account-outline" />
          <AuthInput placeholder="Email" icon="email-outline" />
          <AuthInput placeholder="Password" icon="key-outline" />

          <TouchableOpacity
            onPress={() => this.props.navigation.navigate('SetPayment')}
            style={[STYLES.buttonContainer, {marginTop: 20, marginBottom: 30}]}>
            <Text style={STYLES.buttonText}>Submit</Text>
          </TouchableOpacity>

          <View style={{flexDirection: 'row', alignSelf: 'center'}}>
            <Text
              style={{
                fontSize: 16,
                fontWeight: 'bold',
                color: COLORS.grey,
                marginRight: 5,
              }}>
              Already have an account?
            </Text>
            <TouchableOpacity
              onPress={() => this.props.navigation.navigate('Login')}>
              <Text
                style={{
                  fontSize: 16,
                  fontWeight: 'bold',
                  color: COLORS.main,
                }}>
                Sign in
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  }
}
