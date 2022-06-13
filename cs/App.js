import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View, Switch } from 'react-native';
import { ThemeContext } from './src/context/ThemeContext';
export default function App() {
  const [theme, setTheme]=useState ('light');
  return (
    <View style={theme==='light' ? styles.container:[styles.container, {backgroundColor:'#000'}]}>
      <Text>Open up App.js to start working on your app!</Text>
      <StatusBar style="auto" />
      <Switch 
      value={theme==='light'}
      onValueChange={() => setTheme(theme==='light'? 'dark': 'light')}/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
