import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import CustomText from "../components/CustomText"

export default function Welcome({ navigation }) {
  return (
    <View style={styles.container}>
      <CustomText style={styles.title}>Welcome to My App!</CustomText>
      <Button
        title="Go to Home"
        onPress={() => navigation.navigate('Home')}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1, alignItems: 'center', justifyContent: 'center',
  },
  title: {
    fontSize: 24, fontWeight: 'bold', marginBottom: 20,
  },
});
