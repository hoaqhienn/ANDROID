import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TextInput,
} from "react-native";

import { Checkbox } from "antd";

export default function Page1() {
  return (
    <View style={styles.container}>
      <View style={styles.container2}>
        <View>
          <Text style={{ fontSize: 25, fontWeight: "bold", color: "white" }}>
            PASSWORD
            <br />
            GENERATOR
          </Text>
        </View>

        <View>
          <TextInput
            style={{ width: 297, height: 55, backgroundColor: "#151537" }}
          ></TextInput>
        </View>
        <View style={styles.reg}>
          <View>
            <Text style={styles.txt}>Password length</Text>
          </View>
          <View>
            <TextInput
              style={{
                width: 118,
                height: 33,
                backgroundColor: "#FFF",
              }}
            />
          </View>
        </View>
        <View style={styles.reg}>
          <View>
            <Text style={styles.txt}>Include lower case letters</Text>
          </View>
          <View>
            <Checkbox size="large" />
          </View>
        </View>

        <View style={styles.reg}>
          <View>
            <Text style={styles.txt}>Include upcase letters</Text>
          </View>
          <View>
            <Checkbox />
          </View>
        </View>
        <View style={styles.reg}>
          <View>
            <Text style={styles.txt}>Include number</Text>
          </View>
          <View>
            <Checkbox />
          </View>
        </View>
        <View style={styles.reg}>
          <View>
            <Text style={styles.txt}>Include special symbol</Text>
          </View>
          <View>
            <Checkbox />
          </View>
        </View>

        <View>
          <TouchableOpacity
            style={{
              width: 269,
              height: 55,
              backgroundColor: "#3B3B98",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Text style={{ fontSize: 18, fontWeight: 700, color: "#FFF" }}>
              GENERATE PASSWORD
            </Text>
          </TouchableOpacity>
        </View>
      </View>

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    alignItems: "center",
    paddingVertical: 20,
    justifyContent: "space-around",
    backgroundImage: "linear-gradient(#AAC, #AAC)",
  },
  container2: {
    flex: 1,
    alignItems: "center",
    justifyContent: "space-around",
    width: 322,
    backgroundColor: "#23235B",
    borderRadius: 15,
  },
  txt: {
    fontSize: 20,
    fontWeight: 700,
    color: "#FFF",
  },

  reg: {
    width: 300,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
});
