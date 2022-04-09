import * as React from 'react';
import Routes from './navigation/NavigatorsIndex';
import { LogBox } from 'react-native';

export default function App() {
  LogBox.ignoreLogs(['Warning: ...']); 
  LogBox.ignoreAllLogs();
  return (
    <Routes />
  );
}
