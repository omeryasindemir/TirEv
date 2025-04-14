import React from 'react';
import { View, Text, Button, StyleSheet, Image } from 'react-native';
import CustomText from "../components/CustomText"
import Colors from '../basics/Colors';

export default function Welcome({ navigation }) {
  return (
    <View style={styles.container}>
      <View style={{
        width: "100%",
        maxWidth: "1280px",
        flex: 1
      }}>
        <View style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
          display: "flex"
        }}>
          <View>
          <CustomText style={{
              ...styles.text,
              color: Colors.text,
              marginBottom: 0
            }}>Evine Hoşgeldin</CustomText>
            <CustomText style={{
              ...styles.text,
              fontSize: 20
            }}>Selam, <span style={{ fontWeight: "bold" }}>Nurefşan</span> ✌️</CustomText>

          </View>
          <View style={{
            height: 50,
            width: 50,
            borderRadius: "50%",
            borderWidth: 1,
            borderColor: Colors.border,
            backgroundImage: `linear-gradient(-45deg, ${Colors.border}, ${Colors.gray})`,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            overflow: "hidden"
          }}>
            <View style={{
              height: 20,
              width: 20,
              borderRadius: "50%",
              backgroundImage: `linear-gradient(-45deg, ${Colors.white}, ${Colors.border})`,
              marginBottom: 4,
              marginTop: -8
            }}></View>
            <View style={{
              height: 40,
              width: 40,
              borderRadius: "50%",
              backgroundImage: `linear-gradient(-45deg, ${Colors.white}, ${Colors.border})`,
              marginBottom: -40
            }}></View>
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundImage: `linear-gradient(-45deg, ${Colors.background}, ${Colors.gray})`,
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: 24,
    paddingHorizontal: 32
  },
  text: {
    fontSize: 12,
    color: Colors.white
  },
});
