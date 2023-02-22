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
    background: '#121212',
    btn1: '#009FB7',
    btn2: '#FE4A49'
  }
}

export default AppDarkTheme;