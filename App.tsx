import { StatusBar } from 'expo-status-bar';
import { ActivityIndicator, SafeAreaView, StyleSheet } from 'react-native';
import { useFonts, Inter_400Regular, Inter_700Bold } from '@expo-google-fonts/inter';

import { Home } from './src/screens/Home';
import { colors } from './src/themes/theme';

export default function App() {
  const [fontsLoaded] = useFonts({
    Inter_400Regular,
    Inter_700Bold
  })

  return (
    <>
      <SafeAreaView style={styles.container}>
        <StatusBar
          translucent
          style='light'
        />
        {
          fontsLoaded ? <Home /> : <ActivityIndicator />
        }
      </SafeAreaView >
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.gray700,
  },
});
