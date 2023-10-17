import React, { useEffect, useState } from "react";
import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import { Rate } from "antd";
import { QuestionCircleOutlined, RightOutlined } from "@ant-design/icons";

export default function Page1({ navigation }) {
  const [image, setImage] = useState(require("../assets/vs_blue.png"));
  const updateImage = (newImage) => {
    setImage(newImage);
  };
  return (
    <View style={styles.container}>
      <View style={styles.img}>
        <Image source={image} style={styles.img2} />
      </View>
      <View>
        <Text style={styles.tittle}>
          Điện thoại Vsmart Joy 3 - Hàng chính hãng
        </Text>
      </View>
      <View style={styles.rate}>
        <View>
          <Rate disabled defaultValue={5} />
        </View>
        <View style={styles.rate2}>
          <Text>(Xem 828 đánh giá)</Text>
        </View>
      </View>
      <View style={styles.price}>
        <View>
          <Text style={styles.price2}>1.790.000 đ</Text>
        </View>
        <View>
          <Text style={styles.price3}>1.790.000 đ</Text>
        </View>
      </View>
      <View style={styles.txt}>
        <Text style={styles.txt2}>Ở ĐÂU RẺ HƠN HOÀN TIỀN</Text>
        <TouchableOpacity>
          <QuestionCircleOutlined />
        </TouchableOpacity>
      </View>
      <View>
        <TouchableOpacity
          style={styles.chooseColor}
          onPress={() => {
            navigation.navigate("P2", { image, updateImage });
          }}
        >
          <Text style={styles.chooseColor2}>4 MÀU - CHỌN MÀU</Text>
          <RightOutlined />
        </TouchableOpacity>

        <View />
      </View>
      <View style={styles.buy}>
        <TouchableOpacity style={styles.buy2}>
          <Text style={styles.buy3}>CHỌN MUA</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingHorizontal: 30,
    justifyContent: "space-around",
  },
  img: {
    width: "100%",
    alignItems: "center",
  },
  img2: {
    width: 301,
    height: 361,
  },
  tittle: {
    fontWeight: 400,
    fontSize: 15,
  },
  rate: {
    flexDirection: "row",
  },
  rate2: {
    marginLeft: 35,
  },
  price: {
    flexDirection: "row",
  },
  price2: {
    fontWeight: 700,
    fontSize: 18,
    color: "#EE0D0D",
  },
  price3: {
    fontWeight: 700,
    fontSize: 15,
    textDecorationLine: "line-through",
    marginLeft: 70,
    color: "#808080",
  },
  txt: {
    flexDirection: "row",
  },
  txt2: {
    fontWeight: 700,
    fontSize: 12,
    color: "#EE0D0D",
    paddingRight: 10,
  },
  chooseColor: {
    width: 326,
    height: 34,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
    borderWidth: 1,
    borderColor: "#808080",
    borderRadius: 10,
  },
  chooseColor2: {
    fontWeight: 400,
    fontSize: 15,
    marginLeft: 65,
  },
  buy: {
    paddingTop: 50,
    paddingBottom: 10,
  },
  buy2: {
    width: 326,
    height: 44,
    backgroundColor: "#EE0D0D",
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
  },
  buy3: {
    fontWeight: 700,
    fontSize: 20,
    color: "#fff",
  },
});
