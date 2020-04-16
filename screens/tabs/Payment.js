import React, {Component} from 'react';
import {Text, View, TouchableOpacity, FlatList} from 'react-native';

import {COLORS, STYLES, DIMENSIONS} from '../../components/styles';
import {DATAS, _renderItem} from '../../components/PaymentItem';

export default class Payment extends Component {
  render() {
    return (
      <View style={{flex: 1, backgroundColor: COLORS.white}}>
        <View style={STYLES.header}>
          <Text style={{fontSize: 30, color: COLORS.black}}>Payment</Text>
          <TouchableOpacity>
            <Text style={[STYLES.textTitle, {color: COLORS.grey}]}>
              History
            </Text>
          </TouchableOpacity>
        </View>

        <FlatList
          data={DATAS}
          style={{flex: 1}}
          contentContainerStyle={{padding: 20, paddingTop: 0}}
          keyExtractor={(item) => item.id}
          renderItem={({item, index}) =>
            _renderItem(item, index, () =>
              this.props.navigation.navigate('PayNow'),
            )
          }
        />
      </View>
    );
  }
}
