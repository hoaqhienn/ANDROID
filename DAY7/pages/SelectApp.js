import React, { useState } from "react";
import { Pressable, TextInput } from "react-native";
import { StyleSheet, Text, View, Image } from "react-native";

export default function App({ navigation }) {
  return (
    <View style={styles.container}>
      <View>
        <Pressable
          onPress={() => {
            navigation.navigate("Login");
          }}
          style={{
            alignItems: "center",
            justifyContent: "center",
            width: 300,
            height: 300,
            borderRadius: 50,
            backgroundColor: "lightyellow",
          }}
        >
          <Image
            source={require("../assets/img1.png")}
            resizeMode="contain"
            style={{ width: 200, height: 200 }}
          />
          <Text style={{ fontSize: 30, fontWeight: 700, color: "orange" }}>
            TODO APP
          </Text>
        </Pressable>
      </View>
      <View style={{ marginTop: 20 }}>
        <Pressable
          style={{
            alignItems: "center",
            justifyContent: "center",
            width: 300,
            height: 300,
            borderRadius: 50,
            backgroundColor: "lightpink",
          }}
        >
          <Image
            source={require("../assets/img2.png")}
            resizeMode="contain"
            style={{ width: 200, height: 200 }}
          />
          <Text style={{ fontSize: 30, fontWeight: 700, color: "white" }}>
            DONUT APP
          </Text>
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "space-around",
    paddingVertical: 50,
  },
});
