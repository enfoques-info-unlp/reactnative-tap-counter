import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';

export default function App() {
  const [count, setCount] = useState(0);

  return (
    <View style={styles.container}>

      <Text style={styles.title}>
        {/* Display different text if count is 0, 1, or 2+ */}
        {count
          ? `You've tapped ${count} time${count == 1 ?  '' : 's'}`
          : 'Tap the button to start counting!'
        }
      </Text>

      <View style={styles.buttonsContainer}>

        {/* If started counting, display button to reset the count */}
        {count > 0 && <Button title="Reset" onPress={() => setCount(0)} />}

        {/* Take previous value and add one */}
        <Button title="Tap me!" onPress={() => setCount(prevCount => prevCount + 1)} />
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    flexDirection: 'column',
    padding: 20,
  },
  buttonsContainer: {
    display: 'flex',
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
  title: {
    fontSize: 30,
    textAlign: 'center',
  },
});
