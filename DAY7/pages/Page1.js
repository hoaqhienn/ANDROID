import React, { useState } from "react";
import {
  Pressable,
  TextInput,
  StyleSheet,
  Text,
  View,
  Image,
} from "react-native";

export default function App({ navigation }) {
  const [username, setUsername] = useState("admin");
  const [password, setPassword] = useState("admin");

  const handleLogin = async () => {
    try {
      const response = await fetch(
        "https://6544aedf5a0b4b04436cbb5a.mockapi.io/api/user"
      );
      const users = await response.json();
      const user = users.find(
        (u) => u.username === username || u.uid === username
      );

      if (user && user.pwd === password) {
        console.log("Login successful");
        navigation.navigate("Home", { userId: user.id });
        console.log(user.id);
      } else {
        console.log("Invalid username or password");
      }
    } catch (error) {
      console.log(error);
    }
  };

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
        style={styles.inputStyles}
        value={username}
        onChangeText={setUsername}
        placeholder="Username"
      />
      <TextInput
        style={styles.inputStyles}
        value={password}
        onChangeText={setPassword}
        placeholder="Password"
      />
      <Pressable
        onPress={async () => await handleLogin()}
        style={styles.pressable}
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
  inputStyles: {
    width: 330,
    height: 40,
    borderRadius: 12,
    borderWidth: 1,
    paddingLeft: 10,
    borderColor: "grey",
  },
  pressable: {
    width: 190,
    height: 44,
    backgroundColor: "#00BDD6",
    borderRadius: 12,
    alignItems: "center",
    justifyContent: "center",
  },
});
