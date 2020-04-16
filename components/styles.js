import {StyleSheet, Dimensions} from 'react-native';

export const COLORS = {
  main: '#1833ff',
  main2: 'rgba(24, 51, 255, 0.8)',
  white: '#ffffff',
  black: '#000000',
  cream: '#ffd3a9',
  grey: '#9b9caa',
  red: 'rgba(247,97,97, 1)',
  lightRed: 'rgba(247,97,97, 0.1)',
  blue: 'rgba(59, 123, 191, 1)',
  lightBlue: 'rgba(59, 123, 191, 0.1)',
  purple: 'rgba(244,96,178, 1)',
  lightPurple: 'rgba(244,96,178, 0.1)',
  green: 'rgba(86,210,44, 1)',
  lightGreen: 'rgba(86,210,44, 0.1)',
};

export const STYLES = StyleSheet.create({
  header: {
    flexDirection: 'row',
    alignItems: 'flex-end',
    justifyContent: 'space-between',
    padding: 20,
  },
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
    color: COLORS.white,
  },
  buttonSmallContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 10,
    backgroundColor: COLORS.main,
    borderRadius: 10,
  },
  buttonSmallText: {
    fontSize: 14,
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

  textBig: {
    fontSize: 16,
    color: COLORS.black,
  },
  textBigWhite: {
    fontSize: 16,
    color: COLORS.white,
  },
  textBigGrey: {
    fontSize: 16,
    color: COLORS.grey,
  },

  textNormal: {
    fontSize: 14,
    color: COLORS.black,
  },
  textNormalWhite: {
    fontSize: 14,
    color: COLORS.white,
  },
  textNormalGrey: {
    fontSize: 14,
    color: COLORS.grey,
  },

  textSmall: {
    fontSize: 12,
    color: COLORS.black,
  },
  textSmallWhite: {
    fontSize: 12,
    color: COLORS.white,
  },
  textSmallGrey: {
    fontSize: 12,
    color: COLORS.grey,
  },
});

export const DIMENSIONS = Dimensions.get('window');
