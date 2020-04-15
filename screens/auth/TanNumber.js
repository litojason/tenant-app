import React, {Component} from 'react';
import {Text, View, TouchableOpacity} from 'react-native';
import {COLORS, STYLES, DIMENSIONS} from '../../components/styles';
import {TextInput} from 'react-native-gesture-handler';

export default class TanNumber extends Component {
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

          <Text style={STYLES.textTitle}>TAN number</Text>
        </View>

        <View
          style={{
            flex: 1,
            justifyContent: 'space-between',
            padding: 30,
          }}>
          <Text style={STYLES.textNormalGrey}>
            Please enter your TAN no below to complete verification, you could
            find it on your Bank app or contact Bank to help you to get TAN no
          </Text>

          <TextInput
            placeholder="Enter TAN no here"
            style={{
              paddingBottom: 10,
              borderBottomWidth: 0.5,
              borderBottomColor: COLORS.grey,
              color: COLORS.black,
            }}
          />

          <TouchableOpacity
            onPress={() => this.props.navigation.navigate('Home')}
            style={[STYLES.buttonContainer, {marginBottom: 30}]}>
            <Text style={STYLES.buttonText}>Submit</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}
