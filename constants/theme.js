import { Dimensions, Platform, NativeModules } from 'react-native'
import { DefaultTheme } from '@react-navigation/native'

const { width, height } = Dimensions.get('window')
const { StatusBarManager } = NativeModules
const statusbarheight = 20 // Platform.OS === 'ios' ? 20 : StatusBarManager.HEIGHT

export const COLORS = {
  // base colors
  primary: '#00A9A5',
  secondary: '#383F51',
  tertiary: '#EEEEEE',
  quaternary: '#3C4F76',

  // colors
  black: '#1E1F20',
  white: '#EEEEEE',

  lightGray: '#F5F5F6',
  lightGray2: '#F6F6F7',
  lightGray3: '#EFEFF1',
  lightGray4: '#F8F8F9',
  trasnsparent: 'transparent',
  darkgray: '#898C95'
}

export const SIZES = {
  // global sizes
  base: 8,
  font: 14,
  radius: 5,
  padding: 10,
  padding2: 12,

  // icons sizes
  small: 18,
  medium: 20,
  large: 25,

  // font sizes
  largeTitle: 50,
  h1: 26,
  h2: 22,
  h3: 20,
  h4: 18,
  body1: 30,
  body2: 20,
  body3: 16,
  body4: 14,
  body5: 12,

  // app dimension
  width,
  height,
  statusbarheight
}

export const FONTS = {
  largeTitle: { fontFamily: 'Roboto_400Regular', fontSize: SIZES.largeTitle, lineHight: 40 },
  h1: { fontFamily: 'Roboto_900Black', fontSize: SIZES.h1, lineHeight: 36 },
  h2: { fontFamily: 'Roboto_700Bold', fontSize: SIZES.h2, lineHeight: 30 },
  h3: { fontFamily: 'Roboto_700Bold', fontSize: SIZES.h3, lineHeight: 22 },
  h4: { fontFamily: 'Roboto_700Bold', fontSize: SIZES.h4, lineHeight: 22 },
  body1: { fontFamily: 'Roboto_400Regular', fontSize: SIZES.body1, lineHeight: 36 },
  body2: { fontFamily: 'Roboto_400Regular', fontSize: SIZES.body2, lineHeight: 30 },
  body3: { fontFamily: 'Roboto_400Regular', fontSize: SIZES.body3, lineHeight: 22 },
  body4: { fontFamily: 'Roboto_400Regular', fontSize: SIZES.body4, lineHeight: 22 },
  body5: { fontFamily: 'Roboto_400Regular', fontSize: SIZES.body5, lineHeight: 22 }
}

export const STYLES = {
  container: { flex: 1, paddingLeft: SIZES.padding, paddingRight: SIZES.padding },
  cardContainer: {
    marginBottom: SIZES.padding,
    padding: SIZES.padding,
    paddingLeft: SIZES.padding * 2,
    paddingRight: SIZES.padding * 2,
    borderRadius: SIZES.radius,
    backgroundColor: COLORS.primary
  },
  cardTitle: { ...FONTS.h4, color: COLORS.white },
  cardBody: { ...FONTS.body4, color: COLORS.white },
  separator: { marginTop: 5, marginBottom: 5, borderBottomWidth: 0.5 },
  button: {
    height: '50%',
    width: 30,
    marginRight: 20,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: SIZES.radius,
    borderWidth: 2,
    borderColor: COLORS.primary
  },
  theme: { ...DefaultTheme, colors: { ...DefaultTheme.colors, text: COLORS.primary } }
}
const appTheme = { COLORS, SIZES, FONTS, STYLES }

export default appTheme
