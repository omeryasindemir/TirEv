import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import Colors from '../basics/Colors';
import CustomText from "../components/CustomText"

export default function Home({ navigation }) {
  return (
    <View style={styles.container}>
      <CustomText style={styles.title}>This is the Home Page</CustomText>
      <Button
        title="Back to Welcome"
        onPress={() => navigation.navigate('Welcome')}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1, alignItems: 'center', justifyContent: 'center'
  },
  title: {
    fontSize: 24, fontWeight: 'bold', marginBottom: 20
  },
});
