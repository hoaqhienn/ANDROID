import * as React from "react";
import { StyleSheet, Text, View, Image, Pressable } from "react-native";

export default function App({ navigation }) {
  return (
    <View  style={styles.container}>
      <Image
        source={require("../assets/icon.jpg")}
        style={{ width: 300, height: 300 }}
        resizeMode="contain"
      />
      <Text>WELCOME!</Text>
      <Text>Capture and organize...</Text>
      <Pressable
        onPress={() => {

          navigation.navigate("P2");
        }}
      >
        <Text>Press Here!</Text>
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
    paddingVertical: 100,
  },
});
