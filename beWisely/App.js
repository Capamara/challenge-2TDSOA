import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, Text } from 'react-native';
import Profile from './src/pages/Profile/Profile';

export default function App() {
  return (
    <SafeAreaView>
      <StatusBar/>
      <Profile/>
    </SafeAreaView>
  );
}

