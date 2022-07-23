import { StyleSheet, SafeAreaView } from 'react-native';
import NavigationScreen from './src/screens/NavigationScreen'
export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <NavigationScreen />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,

  },
});
