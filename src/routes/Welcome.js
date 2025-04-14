import React from 'react';
import { View, Text, Button, StyleSheet, Image, TouchableOpacity } from 'react-native';
import CustomText from "../components/CustomText"
import Colors from '../basics/Colors';

export default function Welcome({ navigation }) {

  const roomList = [
    {
      id: 1,
      route: "LivingRoom",
      name: "Oturma Odası"
    },
    {
      id: 2,
      route: "BedRoom",
      name: "Yatak Odası"
    },
    {
      id: 3,
      route: "Nursery",
      name: "Çocuk Odası"
    },
    {
      id: 4,
      route: "Kitchen",
      name: "Mutfak"
    },
    {
      id: 5,
      route: "Sink",
      name: "Lavabo"
    }

  ]

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
          display: "flex",
          paddingHorizontal: 16
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

        <View style={{ marginTop: 24 }}>
          <View style={{
            paddingHorizontal: 16,
            display: "flex",
            alignItems: "center",
            gap: 8,
            flexDirection: "row",
            overflowX: "scroll",
            scrollbarWidth: "none",
            msOverflowStyle: "none",
            "&::WebkitScrollbar": {
              display: "none"
            }
          }}>
            {
              roomList?.map((item, i) => (
                <TouchableOpacity key={i} style={{
                  height: 32,
                  backgroundImage: item?.id == 1 ? `linear-gradient(to right, ${Colors.light}, ${Colors.main})` : `linear-gradient(to top, ${Colors.dark3}, ${Colors.dark3})`,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  paddingHorizontal: 16,
                  borderRadius: 16
                }}>
                  <CustomText style={{ fontSize: 14, color: Colors.white }}>{item?.name}</CustomText>
                </TouchableOpacity>
              ))
            }
          </View>

          <View style={{
            paddingHorizontal: 16,
            marginTop: 32
          }}>
            <View style={{
              height: 200,
              width: "100%",
              maxWidth: 360,
              backgroundImage: `linear-gradient(to bottom, ${Colors.box}, ${Colors.gray})`,
              borderRadius: 20,
              borderWidth: 1,
              borderTopColor: Colors.border,
              borderLeftColor: Colors.border,
              borderRightColor: Colors.box,
              borderBottomColor: Colors.box,
              boxShadow: "0px 8px 16px 0px rgba(0,0,0,0.32)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              flexDirection: "row",
              gap: 16,
              position: "relative"
            }}>
              <Image style={{
                height: 128,
                width: 128
              }} source={require("../assets/clouds-and-sun.png")} />

              <View style={{marginLeft: 0}}>
                <CustomText style={{fontSize: 12, color: Colors.text}}>14 Nisan 2025</CustomText>
                <CustomText style={{fontSize: 14, color: Colors.white}}>Güneşli</CustomText>
              </View>

              <View style={{marginRight: 12}}>
                <CustomText style={{fontSize: 45, color: Colors.white}}>24°</CustomText>
              </View>

              <View style={{
                position: "absolute",
                height: 0,
                width: 0,
                left: 96,
                top: 96,
                borderRadius: "50%",
                boxShadow: "0px 0px 64px 32px rgba(255,224,0, 0.32)"
              }}></View>

            </View>
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
    paddingVertical: 16
  },
  text: {
    fontSize: 12,
    color: Colors.white
  },
});
