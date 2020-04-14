import {StyleSheet, Dimensions} from 'react-native';

export const COLORS = {
  main: '#1833ff',
  white: '#ffffff',
  black: '#000000',
  cream: '#ffd3a9',
  grey: '#9b9caa',
  red: 'rgba(247,97,97, 1)',
  lightRed: 'rgba(247,97,97, 0.3)',
  blue: 'rgba(59, 123, 191, 1)',
  lightBlue: 'rgba(59, 123, 191, 0.3)',
  purple: 'rgba(244,96,178, 1)',
  lightPurple: 'rgba(244,96,178, 0.3)',
  green: 'rgba(86,210,44, 1)',
  lightGreen: 'rgba(86,210,44, 0.3)',
};

export const STYLES = StyleSheet.create({
  buttonContainerOutline: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 15,
    backgroundColor: COLORS.white,
    borderWidth: 2,
    borderColor: COLORS.main,
    borderRadius: 10,
  },
  buttonTextOutline: {
    fontSize: 18,
    fontWeight: 'bold',
    color: COLORS.main,
  },
  buttonContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 15,
    backgroundColor: COLORS.main,
    borderRadius: 10,
  },
  buttonText: {
    fontSize: 18,
    // fontWeight: 'bold',
    color: COLORS.white,
  },

  textLogo: {
    fontSize: 24,
    fontWeight: 'bold',
    color: COLORS.main,
  },
  textTitle: {
    fontSize: 18,
    color: COLORS.black,
    letterSpacing: 1,
  },
  textNormal: {
    fontSize: 16,
    color: COLORS.black,
  },
  textNormalGrey: {
    fontSize: 16,
    color: COLORS.grey,
  },
});

export const DIMENSIONS = Dimensions.get('window');
