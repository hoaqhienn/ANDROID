import * as React from "react";
import { StyleSheet, Text, View, Image, Pressable } from "react-native";

export default function App({ navigation }) {
  return (
    <View style={styles.container}>
      <Text
        style={{
          textAlign: "center",
          fontSize: 26,
          fontWeight: 400,
          fontFamily: "VT323",
        }}
      >
        A premium online store for
        <br />
        sporter and their stylish choice
      </Text>
      <View style={styles.img}>
        <Image
          source={require("../assets/blue.png")}
          style={{ width: 300, height: 300 }}
          resizeMode="center"
        />
      </View>

      <Text
        style={{
          textAlign: "center",
          fontSize: 26,
          fontWeight: 700,
          fontFamily: "Ubuntu",
        }}
      >
        POWER BIKE
        <br />
        SHOP
      </Text>
      <Pressable
        onPress={() => navigation.navigate("P2")}
        style={{
          width: 340,
          height: 60,
          backgroundColor: "#E94141",
          borderRadius: 30,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Text
          style={{
            textAlign: "center",
            fontSize: 27,
            fontWeight: 400,
            fontFamily: "VT323",
            color: "white",
          }}
        >
          Get Started
        </Text>
      </Pressable>
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
  img: {
    width: 360,
    height: 360,
    backgroundColor: "#fdecec",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 50,
  },
});
