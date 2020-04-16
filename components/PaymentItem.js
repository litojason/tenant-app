import React from 'react';
import {Text, View, TouchableOpacity} from 'react-native';
import {COLORS, STYLES, DIMENSIONS} from './styles';

export const DATAS = [
  {
    id: '1',
    month: 'June',
    basicRent: 950,
    paidUpTo: '5 July 2020',
    oldRentDue: 0,
  },
  {
    id: '2',
    month: 'June',
    basicRent: 1000,
    paidUpTo: '5 July 2020',
    oldRentDue: 0,
  },
  {
    id: '3',
    month: 'July',
    basicRent: 850,
    paidUpTo: '5 August 2020',
    oldRentDue: 0,
  },
  {
    id: '4',
    month: 'July',
    basicRent: 800,
    paidUpTo: '5 August 2020',
    oldRentDue: 0,
  },
];

export const _renderItem = (item, index, navigation) => {
  let bgColor;
  let bgButtonColor;
  switch (index % 2) {
    case 0:
      bgColor = COLORS.lightBlue;
      bgButtonColor = COLORS.main;
      break;
    case 1:
      bgColor = COLORS.lightPurple;
      bgButtonColor = COLORS.purple;
      break;
    default:
      bgColor = COLORS.black;
      bgButtonColor = COLORS.black;
  }

  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'space-between',
        backgroundColor: bgColor,
        margin: 10,
        paddingHorizontal: 20,
        paddingVertical: 30,
        borderRadius: 20,
        elevation: 1,
      }}>
      <Text style={STYLES.textTitle}>{item.month}</Text>

      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          marginVertical: 10,
        }}>
        <View style={{flex: 1}}>
          <Text style={STYLES.textNormalGrey}>Basic rent</Text>
          <Text style={[STYLES.textNormalGrey, {marginVertical: 5}]}>
            Paid up to
          </Text>
          <Text style={STYLES.textNormalGrey}>Old rent due</Text>
        </View>

        <View style={{flex: 1}}>
          <Text style={STYLES.textNormal}>${item.basicRent}</Text>
          <Text style={[STYLES.textNormal, {marginVertical: 5}]}>
            {item.paidUpTo}
          </Text>
          <Text style={STYLES.textNormal}>${item.oldRentDue}</Text>
        </View>
      </View>

      <TouchableOpacity
        onPress={navigation}
        style={[STYLES.buttonSmallContainer, {backgroundColor: bgButtonColor}]}>
        <Text style={STYLES.buttonSmallText}>Pay Now</Text>
      </TouchableOpacity>
    </View>
  );
};
