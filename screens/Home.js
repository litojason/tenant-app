import React, {Component} from 'react';
import {
  Text,
  View,
  TouchableOpacity,
  StyleSheet,
  TouchableWithoutFeedback,
  Animated,
} from 'react-native';
import Carousel from 'react-native-snap-carousel';

import {COLORS, STYLES, DIMENSIONS} from '../components/styles';
import Icon from '../components/Icon';

const RANGE_VALUE = 90;
const ANIMATED_VALUE1 = DIMENSIONS.height / 2;
const ANIMATED_VALUE2 = ANIMATED_VALUE1 + RANGE_VALUE;
const ANIMATED_VALUE3 = ANIMATED_VALUE2 + RANGE_VALUE;

const DATAS = [
  {month: 'June', basicRent: 950, paidUpTo: '5 July 2020', oldRentDue: 0},
  {month: 'June', basicRent: 1000, paidUpTo: '5 July 2020', oldRentDue: 0},
  {month: 'July', basicRent: 850, paidUpTo: '5 August 2020', oldRentDue: 0},
  {month: 'July', basicRent: 800, paidUpTo: '5 August 2020', oldRentDue: 0},
];

export default class Home extends Component {
  constructor(props) {
    super(props);

    this.animation1 = new Animated.Value(ANIMATED_VALUE1);
    this.animation2 = new Animated.Value(ANIMATED_VALUE2);
    this.animation3 = new Animated.Value(ANIMATED_VALUE3);
  }

  handleAnimated = (animation, value) => {
    Animated.spring(animation, {
      tension: 3,
      friction: 4,
      toValue: value,
      useNativeDriver: false,
    }).start();
  };

  handleCloseAll = () => {
    this.handleAnimated(this.animation1, ANIMATED_VALUE1);
    this.handleAnimated(this.animation2, ANIMATED_VALUE2);
    this.handleAnimated(this.animation3, ANIMATED_VALUE3);
  };

  handleAnimation1 = () => {
    this.handleAnimated(this.animation1, RANGE_VALUE);
    this.handleAnimated(this.animation2, ANIMATED_VALUE2);
    this.handleAnimated(this.animation3, ANIMATED_VALUE3);
  };

  handleAnimation2 = () => {
    this.handleAnimated(this.animation1, RANGE_VALUE);
    this.handleAnimated(this.animation2, RANGE_VALUE * 2);
    this.handleAnimated(this.animation3, ANIMATED_VALUE3);
  };

  handleAnimation3 = () => {
    this.handleAnimated(this.animation1, RANGE_VALUE);
    this.handleAnimated(this.animation2, RANGE_VALUE * 2);
    this.handleAnimated(this.animation3, RANGE_VALUE * 3);
  };

  _renderItem = ({item, index}) => {
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
        key={index}
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
            flex: 1,
            flexDirection: 'row',
            alignItems: 'center',
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
          style={[
            STYLES.buttonSmallContainer,
            {backgroundColor: bgButtonColor},
          ]}>
          <Text style={STYLES.buttonSmallText}>Pay Now</Text>
        </TouchableOpacity>
      </View>
    );
  };

  render() {
    return (
      <View style={{flex: 1, backgroundColor: COLORS.main2}}>
        <TouchableWithoutFeedback onPress={this.handleCloseAll}>
          <View
            style={{
              width: DIMENSIONS.width,
              height: DIMENSIONS.height / 2,
              padding: 30,
              paddingTop: 0,
            }}>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-between',
                height: RANGE_VALUE,
              }}>
              <TouchableOpacity
                style={{
                  padding: 3,
                  borderRadius: 10,
                  backgroundColor: COLORS.black,
                }}>
                <Icon name="clock-outline" size={40} color={COLORS.white} />
              </TouchableOpacity>

              <Text style={[STYLES.textTitle, {color: COLORS.white}]}>
                Home
              </Text>

              <TouchableOpacity
                style={{
                  padding: 3,
                  borderRadius: 40,
                  backgroundColor: COLORS.black,
                }}>
                <Icon name="account-outline" size={40} color={COLORS.white} />
              </TouchableOpacity>
            </View>

            <View
              style={{
                flex: 1,
                alignItems: 'center',
                justifyContent: 'center',
                backgroundColor: COLORS.main,
                paddingHorizontal: 30,
                borderRadius: 20,
              }}>
              <Text style={STYLES.textNormalWhite}>Landlord information</Text>

              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  justifyContent: 'space-around',
                  marginVertical: 10,
                  width: '100%',
                }}>
                <TouchableOpacity style={inline.button}>
                  <Icon name="phone" size={24} color={COLORS.main} />
                </TouchableOpacity>

                <TouchableOpacity
                  style={{
                    alignItems: 'center',
                    justifyContent: 'center',
                    width: 70,
                    height: 70,
                    borderRadius: 35,
                    backgroundColor: COLORS.black,
                  }}>
                  <Icon name="account-outline" size={40} color={COLORS.white} />
                </TouchableOpacity>

                <TouchableOpacity style={inline.button}>
                  <Icon name="message" size={20} color={COLORS.main} />
                </TouchableOpacity>
              </View>

              <Text
                style={[
                  STYLES.textBigWhite,
                  {marginBottom: 5, textAlign: 'center'},
                ]}>
                Landlord Name
              </Text>

              <Text style={[STYLES.textNormalGrey, {textAlign: 'center'}]}>
                3178 Camden place, Beaufort, South Carolina SC 29902
              </Text>
            </View>
          </View>
        </TouchableWithoutFeedback>

        <Animated.View style={[inline.menuContainer, {top: this.animation1}]}>
          <TouchableWithoutFeedback onPress={this.handleAnimation1}>
            <View style={{padding: 30}}>
              <Text style={STYLES.textTitle}>Payment</Text>
            </View>
          </TouchableWithoutFeedback>

          <View style={{height: DIMENSIONS.height / 3}}>
            <Carousel
              data={DATAS}
              sliderWidth={DIMENSIONS.width}
              itemWidth={DIMENSIONS.width * 0.7}
              renderItem={this._renderItem}
            />
          </View>
        </Animated.View>

        <Animated.View style={[inline.menuContainer, {top: this.animation2}]}>
          <TouchableWithoutFeedback onPress={this.handleAnimation2}>
            <View style={{padding: 30}}>
              <Text style={STYLES.textTitle}>Complaint</Text>
            </View>
          </TouchableWithoutFeedback>

          <View style={{height: DIMENSIONS.height / 3}}>
            <View
              style={{flex: 1, flexDirection: 'row', paddingHorizontal: 10}}>
              <TouchableOpacity style={inline.complaintContainer}>
                <View style={[inline.button, {elevation: 3}]}>
                  <Icon name="plus" size={30} color={COLORS.main} />
                </View>

                <Text
                  style={[
                    STYLES.textBig,
                    {color: COLORS.main, marginTop: 20, marginBottom: 10},
                  ]}>
                  Add New
                </Text>

                <Text style={[STYLES.textNormalGrey, {textAlign: 'center'}]}>
                  Add a new complaints and send it directly to landlord
                </Text>
              </TouchableOpacity>

              <TouchableOpacity style={inline.complaintContainer}>
                <View style={[inline.button, {elevation: 3}]}>
                  <Text
                    style={{
                      fontSize: 30,
                      fontWeight: 'bold',
                      color: COLORS.black,
                    }}>
                    4
                  </Text>
                </View>

                <Text
                  style={[
                    STYLES.textBig,
                    {color: COLORS.black, marginTop: 20, marginBottom: 10},
                  ]}>
                  Complaints
                </Text>

                <Text style={[STYLES.textNormalGrey, {textAlign: 'center'}]}>
                  These are the one which are already been registered
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </Animated.View>

        <Animated.View style={[inline.menuContainer, {top: this.animation3}]}>
          <TouchableWithoutFeedback onPress={this.handleAnimation3}>
            <View style={{padding: 30}}>
              <Text style={STYLES.textTitle}>Security Deposit</Text>
            </View>
          </TouchableWithoutFeedback>

          <View style={{height: DIMENSIONS.height / 3}}></View>
        </Animated.View>
      </View>
    );
  }
}

const inline = StyleSheet.create({
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: COLORS.white,
    width: 50,
    height: 50,
    borderRadius: 25,
  },
  menuContainer: {
    position: 'absolute',
    bottom: 0,
    backgroundColor: COLORS.white,
    width: DIMENSIONS.width,
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
    borderTopWidth: 3,
    borderLeftWidth: 0.5,
    borderRightWidth: 0.5,
    borderBottomWidth: 0,
    borderColor: COLORS.main2,
  },
  complaintContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 20,
    marginHorizontal: 20,
    backgroundColor: COLORS.lightBlue,
    borderRadius: 20,
  },
});
