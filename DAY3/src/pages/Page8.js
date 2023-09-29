import { StatusBar } from "expo-status-bar";
import * as React from "react";
import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import { TextInput } from "react-native-web";
import { useState } from "react";
import { Divider } from "react-native-paper";

export default function Page6() {
  const [mood, setMood] = useState("");

  return (
    <View style={styles.container}>
      <View style={styles.gradient}>
        <Image
          source={require("../../assets/eyeball-309797 1.svg")}
          style={{ width: "140px", height: "140px" }}
        />

        <View style={styles.name}>
          <View style={styles.square}>
            <Image
              source={require("../../assets/user1.png")}
              style={{ width: 30, height: 30 }}
            />
          </View>
          <TextInput
            style={styles.input}
            placeholder="Please input user name"
          />
        </View>

        <View style={styles.name}>
          <View style={styles.square}>
            <Image
              source={require("../../assets/pwd1.png")}
              style={{ width: 30, height: 30 }}
            />
          </View>
          <TextInput style={styles.input} placeholder="Please input password" />
        </View>

        <View style={styles.button}>
          <TouchableOpacity style={styles.buttonBorder}>
            <Text style={styles.buttonText}>LOGIN</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.button}>
          <TouchableOpacity>
            <Text style={{ fontWeight: "bold", fontSize: 18 }}>Register</Text>
          </TouchableOpacity>
          <TouchableOpacity style>
            <Text style={{ fontWeight: "bold", fontSize: 18 }}>
              Forgot Password
            </Text>
          </TouchableOpacity>
        </View>

        <View style={styles.other}>
          <View style={styles.lines} />
          <Text style={{ fontSize: 18 }}>Other Login Methods</Text>
          <View style={styles.lines} />
        </View>

        <View style={styles.button}>
          <TouchableOpacity style={styles.more}>
          <Image
              source={require("../../assets/other1.svg")}
              style={{ width: 74, height: 74 }}
            />
          </TouchableOpacity>
          <TouchableOpacity style={styles.more}>
          <Image
              source={require("../../assets/other2.svg")}
              style={{ width: 74, height: 74 }}
            />
          </TouchableOpacity>
          <TouchableOpacity style={[styles.more, {backgroundColor: "#45a"}]}>
          <Image
              source={require("../../assets/other3.png")}
              style={{ width: 32, height: 45 }}
            />
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
    alignItems: "center",
    alignItems: "center",
    justifyContent: "space-around",
    paddingVertical: 50,
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
    borderBottomWidth: 1,
    borderColor: "#C4C4C4",
  },

  square: {
    width: 30,
    height: 54,
    alignItems: "start",
    justifyContent: "center",
  },

  input: {
    width: 330 - 30,
    height: 54,
    padding: 10,
    color: "#C4C4C4",
  },

  button: {
    marginTop: 10,
    width: "330px",
    flexDirection: "row",
    justifyContent: "space-between",
  },

  buttonBorder: {
    backgroundColor: "#47f",
    width: 330,
    height: 45,
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
  },

  buttonText: {
    color: "white",
    fontWeight: "bold",
    fontSize: 20,
  },

  other: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: 330,
    padding: 10,
  },

  lines: {
    width: 62,
    height: 1,
    backgroundColor: "black",
  },

    more: {
        width: 74,
        height: 74,
        borderRadius: 10,
        alignItems: "center",
        justifyContent: "center",
    },
});
