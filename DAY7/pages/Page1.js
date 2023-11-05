import React, { useState } from "react";
import { Pressable, TextInput } from "react-native";
import { StyleSheet, Text, View, Image } from "react-native";

export default function App({ navigation }) {
  const [email, setEmail] = React.useState("Hien");

  return (
    <View style={styles.container}>
      <Image
        source={require("../assets/img1.png")}
        style={{ width: 270, height: 270 }}
      />
      <Text
        style={{
          fontSize: 24,
          color: "#8353E2",
          fontWeight: 700,
          textAlign: "center",
        }}
      >
        MANAGE YOUR <br /> TASK
      </Text>
      <TextInput
        style={{
          width: 330,
          height: 40,
          borderRadius: 12,
          borderWidth: 1,
          paddingLeft: 10,
          borderColor: "grey",
        }}
        value={email}
        onChangeText={setEmail}
        placeholder="Enter your name"
      />
      <Pressable
        onPress={() => {
          navigation.navigate("P2", { email });
        }}
        style={{
          width: 190,
          height: 44,
          backgroundColor: "#00BDD6",
          borderRadius: 12,
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Text style={{ fontSize: 16, color: "white" }}>GET STARTED</Text>
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
});
