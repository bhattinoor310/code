
import { StyleSheet, Text, View } from 'react-native';

export default function About() {
  return (
    <View >
      <Text style={styles.container}>About this page</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
       padding:30,

  },
});
