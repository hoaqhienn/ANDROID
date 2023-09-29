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
        <Text style={{ fontWeight: "bold", fontSize: 20, textAlign: "center" }}>
          REGISTER
        </Text>

        <TextInput style={styles.input} placeholder="Name" />
        <TextInput style={styles.input} placeholder="Phone" />

        <TextInput style={styles.input} placeholder="Email" />

        <View style={styles.pwd}>
          <TextInput style={styles.input2} placeholder="Pasword" />
          <View style={styles.square}>
            <Image
              source={require("../../assets/eye.png")}
              style={{ width: 38, height: 36 }}
            />
          </View>
        </View>

        <TextInput style={styles.input} placeholder="Birthday" />

        <View style={styles.gender}>
          <View style={styles.g1}>
            <TouchableOpacity style={styles.outter}>
              {/* <View style={styles.inner}></View> */}
            </TouchableOpacity>
            <Text>Male</Text>
          </View>
          <View style={styles.g1}>
            <TouchableOpacity style={styles.outter}>
              {/* <View style={styles.inner}></View> */}
            </TouchableOpacity>
            <Text>Female</Text>
          </View>
        </View>

        <View style={styles.button}>
          <TouchableOpacity style={styles.buttonBorder}>
            <Text style={styles.buttonText}>REGISTER</Text>
          </TouchableOpacity>
        </View>

        <Text
          style={{ fontWeight: "normal", fontSize: 14, textAlign: "center" }}
        >
          When you agree to terms and conditions
        </Text>

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
    backgroundColor: "#efe",
    alignItems: "center",
    justifyContent: "space-around",
    paddingVertical: 100,
  },

  input: {
    width: 330,
    height: 54,
    backgroundColor: "#ded",
    padding: 10,
    fontWeight: "bold",
  },

  pwd: {
    flexDirection: "row",
  },

  square: {
    width: 54,
    height: 54,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#ded",
  },

  input2: {
    width: 330 - 54,
    height: 54,
    backgroundColor: "#ded",
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

  outter: {
    width: 25,
    height: 25,
    borderRadius: 15,
    borderWidth: 2,
    justifyContent: "center",
    alignItems: "center",
  },

  inner: {
    width: 15,
    height: 15,
    borderRadius: 10,
    backgroundColor: "black",
  },

  gender: {
    width: 330,
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    padding: 10,
  },

  g1: {
    width: 100,
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
  },
});
