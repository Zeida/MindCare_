import * as React from 'react';
import Routes from './navigation/NavigatorsIndex';
import { LogBox } from 'react-native';

export default function App() {
  LogBox.ignoreLogs(['Warning: ...', 'Setting a timer', 'AsyncStorage has been...']); 
  LogBox.ignoreAllLogs();
  
  return (
    <Routes />
  );
}
