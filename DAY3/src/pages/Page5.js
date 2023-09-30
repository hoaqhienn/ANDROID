import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  Linking,
} from "react-native";
import { TextInput } from "react-native-web";

export default function Page5() {
  return (
    <View style={styles.container}>
      <Text style={{ fontWeight: "bold", fontSize: 20, textAlign: "center" }}>
        LOGIN
      </Text>

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

      <View style={styles.button}>
        <TouchableOpacity style={styles.buttonBorder}>
          <Text style={styles.buttonText}>LOGIN</Text>
        </TouchableOpacity>
      </View>

      <Text style={{ fontWeight: "normal", fontSize: 14, textAlign: "center" }}>
        When you agree to terms and conditions
      </Text>

      {/* Open url */}
      <TouchableOpacity
      // onPress={() => Linking.openURL("https://www.google.com")}
      >
        <Text
          style={{
            fontWeight: "normal",
            fontSize: 14,
            textAlign: "center",
            color: "#74f",
          }}
        >
          Forgot your password?
        </Text>
      </TouchableOpacity>

      <Text style={{ fontWeight: "normal", fontSize: 14, textAlign: "center" }}>
        Or login with
      </Text>

      <View style={styles.loginWith}>
        <TouchableOpacity style={styles.lw1}>
          <Image
            source={require("../../assets/facebook.png")}
            style={{ width: 30, height: 30 }}
          />
        </TouchableOpacity>
        <TouchableOpacity style={styles.lw2}>
          <Image
            source={require("../../assets/zalo.png")}
            style={{ width: 30, height: 30 }}
          />
        </TouchableOpacity>
        <TouchableOpacity style={styles.lw3}>
          <Image
            source={require("../../assets/google.png")}
            style={{ width: 35, height: 35 }}
          />
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

  loginWith: {
    flexDirection: "row",
    justifyContent: "center",
    width: "100%",
  },

  lw1: {
    width: 110,
    height: 45,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#269",
    paddingRight: 10,
    borderRadius: 5,
  },
  lw2: {
    width: 110,
    height: 45,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#19c",
    borderRadius: 5,
  },
  lw3: {
    width: 110,
    height: 45,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 5,
    borderWidth: 1,
    borderColor: "#19c",
  },
});
