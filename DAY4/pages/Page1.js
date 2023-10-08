import React, { useState } from "react";
import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TextInput,
} from "react-native";
import { BiSolidUser, BiLockAlt, BiSolidShow } from "react-icons/bi";

export default function Page1() {
  return (
    <View style={styles.container}>
      <View
        style={{
          justifyContent: "start",
          width: "100%",
        }}
      >
        <Text style={{ fontSize: 40, fontWeight: "bold" }}>LOGIN</Text>
      </View>

      <View>
        <View
          style={{
            height: 54,
            width: 330,
            borderWidth: 1,
            borderColor: "white",
            flexDirection: "row",
            alignItems: "center",
          }}
        >
          <BiSolidUser style={{ height: 32, width: 32, marginLeft: 10 }} />
          <TextInput style={{ marginLeft: 10 }} placeholder="Name" />
        </View>
        <View
          style={{
            height: 54,
            width: 330,
            borderWidth: 1,
            borderColor: "white",
            flexDirection: "row",
            alignItems: "center",
            marginTop: 15,
          }}
        >
          <BiLockAlt style={{ height: 32, width: 32, marginLeft: 10 }} />
          <TextInput
            style={{ marginLeft: 10, width: 230 }}
            placeholder="Password"
          />
          <BiSolidShow style={{ height: 32, width: 32 }} />
        </View>
      </View>

      <View>
        <TouchableOpacity
          style={{
            backgroundColor: "#060000",
            width: 330,
            height: 45,
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Text style={{ fontSize: 20, fontWeight: "bold", color: "white" }}>
            LOGIN
          </Text>
        </TouchableOpacity>
      </View>

      <View>
        <TouchableOpacity>
          <Text style={{ fontSize: 20, fontWeight: "bold" }}>
            Forgot your password?
          </Text>
        </TouchableOpacity>
      </View>

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    paddingVertical: 100,
    alignItems: "center",
    justifyContent: "space-around",
    backgroundImage: "linear-gradient(to bottom , #FBCB00, #BF9A00)",
  },
});
