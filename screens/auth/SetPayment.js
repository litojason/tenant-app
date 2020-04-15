import React, {Component} from 'react';
import {Text, View, TouchableOpacity} from 'react-native';

import {COLORS, STYLES, DIMENSIONS} from '../../components/styles';
import Icon from '../../components/Icon';

const DATAS = [
  {
    title: 'Bank',
    icon: 'bank',
    color: COLORS.lightRed,
    activeColor: COLORS.red,
  },
  {
    title: 'Paypal',
    icon: 'paypal',
    color: COLORS.lightBlue,
    activeColor: COLORS.blue,
  },
  {
    title: 'Stripe',
    icon: 'code-string',
    color: COLORS.lightPurple,
    activeColor: COLORS.purple,
  },
  {
    title: 'Cash',
    icon: 'cash',
    color: COLORS.lightGreen,
    activeColor: COLORS.green,
  },
];

export default class SetPayment extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selected: '',
    };
  }

  handlePress = (value) => {
    this.setState({selected: value});
  };

  render() {
    const {selected} = this.state;
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

          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
            }}>
            <Text style={STYLES.textTitle}>Set payment</Text>
            {selected ? (
              <TouchableOpacity
                onPress={() => this.props.navigation.navigate('BankLogin')}
                style={{
                  backgroundColor: COLORS.main,
                  paddingHorizontal: 10,
                  paddingVertical: 5,
                  borderRadius: 10,
                }}>
                <Text
                  style={[
                    STYLES.textTitle,
                    {fontWeight: 'bold', color: COLORS.white},
                  ]}>
                  Continue
                </Text>
              </TouchableOpacity>
            ) : (
              <View
                style={{
                  // backgroundColor: COLORS.grey,
                  paddingHorizontal: 10,
                  paddingVertical: 5,
                  borderRadius: 10,
                }}>
                <Text
                  style={[
                    STYLES.textTitle,
                    {fontWeight: 'bold', color: COLORS.grey},
                  ]}>
                  Continue
                </Text>
              </View>
            )}
          </View>
        </View>

        <View
          style={{
            flexDirection: 'row',
            flexWrap: 'wrap',
            flex: 1,
            padding: 15,
          }}>
          {DATAS.map((item, index) => (
            <TouchableOpacity
              activeOpacity={0.7}
              key={index}
              onPress={() => this.handlePress(item.title)}
              style={{
                alignItems: 'center',
                justifyContent: 'center',
                width: DIMENSIONS.width / 2 - 45,
                height: DIMENSIONS.height / 3 - 55,
                margin: 15,
                backgroundColor:
                  this.state.selected === item.title
                    ? item.activeColor
                    : item.color,
                borderRadius: 20,
              }}>
              <Icon name={item.icon} size={80} color={COLORS.black} />
              <Text
                style={{
                  marginTop: 20,
                  fontSize: 16,
                  color:
                    this.state.selected === item.title
                      ? COLORS.white
                      : COLORS.black,
                }}>
                {item.title}
              </Text>
            </TouchableOpacity>
          ))}
        </View>
      </View>
    );
  }
}
