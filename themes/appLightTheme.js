import { DefaultTheme } from '@react-navigation/native';

const AppLightTheme = {
  ...DefaultTheme,
  dark: true,
  colors: {
    ...DefaultTheme.colors,
    text: '#616161',
    card: '#f9f9f9',
    border: '#9F9F9F',
    primary: '#333333',
    background: '#ffffff',
    button: '#f9f9f9',
    btn2: '#FE4A49'
  }
}

export default AppLightTheme;