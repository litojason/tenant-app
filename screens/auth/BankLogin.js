import React, {Component} from 'react';
import {Text, View, TouchableOpacity} from 'react-native';
import {COLORS, STYLES, DIMENSIONS} from '../../components/styles';

export default class BankLogin extends Component {
  render() {
    return (
      <View style={{flex: 1, backgroundColor: COLORS.white}}>
        <View
          style={{
            width: DIMENSIONS.width,
            height: DIMENSIONS.height / 3,
            paddingHorizontal: 30,
          }}>
          <View style={{flex: 1, justifyContent: 'center'}}>
            <Text style={STYLES.textLogo}>Tenant</Text>
          </View>

          <Text style={STYLES.textTitle}>Bank</Text>
        </View>

        <View
          style={{
            flex: 1,
            justifyContent: 'space-between',
            padding: 30,
          }}>
          <Text style={STYLES.textNormalGrey}>
            Please login to your bank account and enter TAN no followed by it.
          </Text>

          <View style={{}}>
            <TouchableOpacity
              onPress={() => this.props.navigation.navigate('TanNumber')}
              style={[STYLES.buttonContainer, {marginBottom: 30}]}>
              <Text style={STYLES.buttonText}>Login to Bank Account</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => this.props.navigation.goBack()}
              style={STYLES.buttonContainerOutline}>
              <Text style={STYLES.buttonTextOutline}>Cancel</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  }
}
