import React, {Component} from 'react';
import {Text, View, TouchableOpacity, Image} from 'react-native';
import {COLORS, STYLES, DIMENSIONS} from '../components/styles';
import Icon from '../components/Icon';

export default class PayNow extends Component {
  render() {
    return (
      <View style={{flex: 1, backgroundColor: COLORS.white}}>
        <View style={STYLES.header}>
          <TouchableOpacity onPress={() => this.props.navigation.goBack()}>
            <Icon name="keyboard-backspace" size={36} color={COLORS.grey} />
          </TouchableOpacity>
          <Text style={{fontSize: 24, color: COLORS.black}}>Pay Now</Text>
          <View style={{width: 36, height: 36}} />
        </View>

        <View
          style={{
            flex: 1,
            alignItems: 'center',
            // justifyContent: 'space-between',
            justifyContent: 'space-around',
            // marginTop: 20,
          }}>
          <Image
            source={require('../assets/scenery5.jpg')}
            style={{
              width: DIMENSIONS.width / 1.5,
              height: DIMENSIONS.width / 2,
              resizeMode: 'cover',
            }}
          />

          <View style={{width: DIMENSIONS.width / 1.5}}>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'flex-end',
                marginBottom: 20,
              }}>
              <Text style={[STYLES.textTitle, {flex: 1}]}>To Pay</Text>
              <Text style={[STYLES.textLogo, {flex: 1, color: COLORS.black}]}>
                $
              </Text>
            </View>
            <View style={{flexDirection: 'row', alignItems: 'flex-end'}}>
              <Text style={[STYLES.textTitle, {flex: 1}]}>Bank</Text>
              <Text style={[STYLES.textLogo, {flex: 1, color: COLORS.black}]}>
                Citi Bank
              </Text>
            </View>
          </View>

          <View
            style={{
              alignSelf: 'center',
              width: '100%',
              paddingHorizontal: 20,
            }}>
            <TouchableOpacity
              style={[STYLES.buttonContainer, {marginBottom: 30}]}>
              <Text style={STYLES.buttonText}>Pay Securely</Text>
            </TouchableOpacity>
            <TouchableOpacity style={STYLES.buttonContainerOutline}>
              <Text style={STYLES.buttonTextOutline}>
                Change Payment Method
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  }
}
