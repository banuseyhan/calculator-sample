import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View, Switch } from 'react-native';
import { ThemeContext } from './src/context/ThemeContext';
import {myColor} from './src/styles/color';



export default function App() {
  const [theme, setTheme]=useState ('light');
  return (
    <ThemeContext.Provider value={theme}>
    <View style={theme==='light' ? styles.container:[styles.container, {backgroundColor:'#000'}]}>
     
      <StatusBar style="auto" />
      <Switch 
      value={theme==='light'}
      onValueChange={() => setTheme(theme==='light'? 'dark': 'light')}/>
    </View>
    </ThemeContext.Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: myColor.light,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
