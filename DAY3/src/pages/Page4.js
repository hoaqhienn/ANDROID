import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { TextInput } from "react-native-web";

export default function Page4() {
  return (
    <View style={styles.container}>
      <Text style={{ fontWeight: "bold", fontSize: 60, textAlign: "center" }}>
        CODE
      </Text>

      <Text style={{ fontWeight: "bold", fontSize: 20, textAlign: "center" }}>
        VERIFICATION
      </Text>
      <Text style={{ fontWeight: "bold", fontSize: 15, textAlign: "center" }}>
        Enter onetime password sent on
        <br />
        ++849092605789
      </Text>

      <View style={styles.email}>
        <TextInput style={styles.input} placeholder="" />
        <TextInput style={styles.input} placeholder="" />
        <TextInput style={styles.input} placeholder="" />
        <TextInput style={styles.input} placeholder="" />
        <TextInput style={styles.input} placeholder="" />
        <TextInput style={styles.input} placeholder="" />
      </View>

      <View style={styles.button}>
        <TouchableOpacity style={styles.buttonBorder}>
          <Text style={styles.buttonText}>VERIFY CODE</Text>
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
  },

  input: {
    width: 50,
    height: 50,
    borderWidth: 1,
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
