import React, { useState } from "react";
import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";

export default function Page2({ navigation, route }) {
  const {image, updateImage} = route.params;
  const [currentImage, setCurrentImage] = useState(image);
  const changeImage = (newImage) => {
    setCurrentImage(newImage);
    updateImage(newImage);
  }
  return (
    <View style={styles.container}>
      <View style={styles.viewTop}>
        <Image
          source={currentImage}
          style={{ width: 100, height: 100 }}
          resizeMode="contain"
        />
      </View>
      <View style={styles.viewBot}>
        <View>
          <Text>Chọn một màu bên dưới:</Text>
        </View>
        <View style={styles.choose}>
          <TouchableOpacity
            style={[styles.touch, { backgroundColor: "#C5F1FB" }]}
            onPress={() => {
              changeImage(require("../assets/vs_silver.png"));
            }}
          />

          <TouchableOpacity
            style={[styles.touch, { backgroundColor: "#F30D0D" }]}
            onPress={() => changeImage(require("../assets/vs_red.png"))}
          />

          <TouchableOpacity
            style={[styles.touch, { backgroundColor: "#000000" }]}
            onPress={() => changeImage(require("../assets/vs_black.png"))}
          />

          <TouchableOpacity
            style={[styles.touch, { backgroundColor: "#234896" }]}
            onPress={() => changeImage(require("../assets/vs_blue.png"))}
          />
        </View>

        <View style={styles.btn}>
          <TouchableOpacity
            style={styles.btn1}
            onPress={() => {
              navigation.goBack();
            }}
          >
            <Text style={styles.btn2}>XONG</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-between",
  },
  viewTop: {
    backgroundColor: "red",
  },
  viewBot: {
    backgroundColor: "#C4C4C4",
    padding: 10,
  },
  choose: {
    alignItems: "center",
    justifyContent: "space-between",
  },
  touch: {
    width: 85,
    height: 80,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    margin: 5,
  },
  btn: {
    alignItems: "center",
    paddingTop: 20,
  },
  btn1: {
    backgroundColor: "#4d6dc1",
    width: 326,
    height: 44,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 10,
  },
  btn2: {
    color: "#FFFFFF",
    fontWeight: "bold",
    fontSize: 20,
  },
});
