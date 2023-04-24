import { DarkTheme } from '@react-navigation/native';

const AppDarkTheme = {
  ...DarkTheme,
  dark: false,
  colors: {
    ...DarkTheme.colors,
    text: '#FE4A49',
    card: '#191919',
    border: '#444859',
    primary: '#f9f9f9',
    background: '#02111B',
    btn1: '#FCFCFC',
    btn2: '#5D737E',
    transparent: '#00000080'
  }
}

export default AppDarkTheme;