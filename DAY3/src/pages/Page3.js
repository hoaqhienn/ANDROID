import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import { TextInput } from "react-native-web";

export default function Page3() {
  return (
    <View style={styles.container}>
      <Image
        source={require("../../assets/lock.png")}
        style={{ width: 105, height: 117 }}
      />

      <Text style={{ fontWeight: "bold", fontSize: 25, textAlign: "center" }}>
        FORGET
        <br />
        PASSWORD
      </Text>
      <Text style={{ fontWeight: "bold", fontSize: 15, textAlign: "center" }}>
        Provide your account's email for which you
        <br />
        want to reset your password
      </Text>

      <View style={styles.email}>
        {/* <View style={styles.square}></View> */}
        <Image
          source={require("../../assets/email.png")}
          style={{ width: 48, height: 45 }}
        />

        <TextInput style={styles.input} placeholder="Email" />
      </View>

      <View style={styles.button}>
        <TouchableOpacity style={styles.buttonBorder}>
          <Text style={styles.buttonText}>NEXT</Text>
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
    backgroundImage: "linear-gradient(to bottom , White, #00CCF9)",
    alignItems: "center",
    justifyContent: "space-around",
    paddingVertical: 100,
  },

  email: {
    flexDirection: "row",
    backgroundColor: "#C4C4C4",
  },

  square: {
    width: 48,
    height: 45,
    backgroundColor: "#C4C4C4",
  },

  input: {
    width: 305 - 48,
    height: 45,
    backgroundColor: "#C4C4C4",
  },

  button: {
    marginTop: 10,
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-around",
  },

  buttonBorder: {
    backgroundColor: "#E3C000",
    width: 305,
    height: 45,
    alignItems: "center",
    justifyContent: "center",
  },

  buttonText: {
    color: "black",
    fontWeight: "bold",
    fontSize: 20,
  },
});
