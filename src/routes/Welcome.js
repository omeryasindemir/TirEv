import React from 'react';
import { View, Text, Button, StyleSheet, Image, TouchableOpacity, ScrollView } from 'react-native';
import CustomText from "../components/CustomText"
import Colors from '../basics/Colors';
import { LinearGradient } from 'expo-linear-gradient';

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
      <LinearGradient
        colors={[Colors.gray, Colors.background]}
        style={{ position: "absolute", left: 0, top: 0, bottom: 0, right: 0 }}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
      />
      <View style={{
        width: "100%",
        maxWidth: "1280px",
        flex: 1,
        position: "relative"
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
            }}>Selam, <CustomText style={{ fontWeight: "bold" }}>Nurefşan</CustomText> ✌️</CustomText>

          </View>
          <View style={{
            height: 50,
            width: 50,
            borderRadius: "50%",
            borderWidth: 1,
            borderColor: Colors.border,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            overflow: "hidden"
          }}>
            <LinearGradient
              colors={[Colors.border, Colors.gray]}
              style={{ position: "absolute", left: 0, top: 0, bottom: 0, right: 0 }}
              start={{ x: 0, y: 0 }}
              end={{ x: 1, y: 1 }}
            />
            <View style={{
              height: 20,
              width: 20,
              borderRadius: "50%",
              marginBottom: 4,
              marginTop: -8,
              overflow: "hidden"
            }}>
              <LinearGradient
                colors={[Colors.white, Colors.border]}
                style={{ position: "absolute", left: 0, top: 0, bottom: 0, right: 0 }}
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 1 }}
              />
            </View>
            <View style={{
              height: 40,
              width: 40,
              borderRadius: "50%",
              marginBottom: -40,
              overflow: "hidden"
            }}>
              <LinearGradient
                colors={[Colors.white, Colors.border]}
                style={{ position: "absolute", left: 0, top: 0, bottom: 0, right: 0 }}
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 1 }}
              />
            </View>
          </View>
        </View>

        <View style={{ marginTop: 24 }}>
          <ScrollView horizontal showsHorizontalScrollIndicator={false} style={{
            marginHorizontal: 16
          }}>
            {
              roomList?.map((item, i) => (
                <TouchableOpacity key={i} style={{
                  height: 32,
                  minWidth: 128,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  paddingHorizontal: 16,
                  borderRadius: 16,
                  overflow: "hidden",
                  paddingTop: 3,
                  marginLeft: item?.id != 1 ? 8 : 0
                }}>
                  <LinearGradient
                    colors={item?.id == 1 ? [Colors.light, Colors.main] : [Colors.dark3, Colors.dark3]}
                    style={{ position: "absolute", left: 0, top: 0, bottom: 0, right: 0 }}
                  />
                  <CustomText style={{ fontSize: 14, color: Colors.white }}>{item?.name}</CustomText>
                </TouchableOpacity>
              ))
            }
          </ScrollView>

          <View style={{
            paddingHorizontal: 16,
            marginTop: 32
          }}>

            <View style={{
              height: 200,
              width: "100%",
              maxWidth: 400,
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
              position: "relative",
              overflow: "hidden"
            }}>

              <LinearGradient
                colors={[Colors.box, Colors.gray]}
                style={{ position: "absolute", left: 0, top: 0, bottom: 0, right: 0 }}
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 1 }}
              />

              <Image style={{
                height: 128,
                width: 128
              }} source={require("../assets/clouds-and-sun.png")} />

              <View style={{ marginLeft: 0 }}>
                <CustomText style={{ fontSize: 12, color: Colors.text, marginTop: -4 }}>14 Nisan 2025</CustomText>
                <CustomText style={{ fontSize: 18, color: Colors.white }}>Güneşli</CustomText>
              </View>

              <View style={{ marginRight: 12 }}>
                <CustomText style={{ fontSize: 48, color: Colors.white }}>24°</CustomText>
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

        {/* <TouchableOpacity style={{
          height: 64,
          width: 64,
          borderRadius: "50%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          position: "absolute",
          left: "calc(50% - 32px)",
          bottom: 0,
          boxShadow: "0px 0px 8px 4px rgba(255,224,0, 0.16)",
          overflow: "hidden"
        }}>
          <LinearGradient
            colors={["orange", "#FDDD50"]}
            style={{ position: "absolute", left: 0, top: 0, bottom: 0, right: 0 }}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 1 }}
          />
          <Image style={{
            height: 32,
            width: 32,
            color: Colors.white
          }} source={require("../assets/download.svg")} />
        </TouchableOpacity> */}

      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: 36
  },
  text: {
    fontSize: 12,
    color: Colors.white
  },
});
