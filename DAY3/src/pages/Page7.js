import { StatusBar } from "expo-status-bar";
import * as React from "react";
import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import { TextInput } from "react-native-web";
import { useState } from "react";

export default function Page6() {
  const [mood, setMood] = useState("");

  return (
    <View style={styles.container}>
      <View style={styles.gradient}>
        <View style={styles.header}>
          <Text style={{ fontWeight: "bold", fontSize: 30}}>
            LOGIN
          </Text>
        </View>

        <View style={styles.name}>
        <View style={styles.square}>
            <Image
              source={require("../../assets/user.png")}
              style={{ width: 32, height: 32 }}
            />
          </View>
          <TextInput style={styles.input1} placeholder="Name" />
  
        </View>

        <View style={styles.pwd}>
        <View style={styles.square}>
            <Image
              source={require("../../assets/pwd.png")}
              style={{ width: 32, height: 32 }}
            />
          </View>
          <TextInput style={styles.input2} placeholder="Pasword" />
          <View style={styles.square}>
            <Image
              source={require("../../assets/eye.png")}
              style={{ width: 38, height: 36 }}
            />
          </View>
        </View>

        <View style={styles.button}>
          <TouchableOpacity style={styles.buttonBorder}>
            <Text style={styles.buttonText}>LOGIN</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.button}>
          <TouchableOpacity style={styles.buttonBorder2}>
            <Text style={styles.buttonText2}>CREATE ACCOUNT</Text>
          </TouchableOpacity>
        </View>

        <StatusBar style="auto" />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "space-around",
  },

  gradient: {
    flex: 1,
    width: "100%",
    backgroundImage: "linear-gradient(to bottom , #FBCB00, #BF9A00)",
    alignItems: "center",
    alignItems: "center",
    justifyContent: "space-around",
    paddingVertical: 100,
  },

    header: {
        flexDirection: "row",
        justifyContent: "start",
        alignItems: "start",
        width: 330,
        padding: 10,
    },


  name: {
    flexDirection: "row",
    backgroundColor: "#ec4",
    borderWidth: 1,
    borderColor: "white",
  },

  pwd: {
    flexDirection: "row",
    backgroundColor: "#ec4",
    borderWidth: 1,
    borderColor: "white",
  },

  square: {
    width: 54,
    height: 54,
    alignItems: "center",
    justifyContent: "center",
  },

  input1: {
    width: 330 - 54,
    height: 54,
    padding: 10,
    fontWeight: "bold",
  },

  input2: {
    width: 330 - 54*2,
    height: 54,
    padding: 10,
    fontWeight: "bold",
  },

  button: {
    marginTop: 10,
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-around",
  },

  buttonBorder: {
    backgroundColor: "#c54",
    width: 330,
    height: 45,
    alignItems: "center",
    justifyContent: "center",
  },

  buttonText: {
    color: "black",
    fontWeight: "bold",
    fontSize: 20,
  },

    button: {
    marginTop: 10,
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-around",
  },

  buttonBorder: {
    backgroundColor: "#000",
    width: 330,
    height: 45,
    alignItems: "center",
    justifyContent: "center",
  },

  buttonText: {
    color: "white",
    fontWeight: "bold",
    fontSize: 20,
  },

  buttonText2: {
    fontWeight: "bold",
    fontSize: 20,
  },

});
