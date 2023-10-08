import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  TextInput,
} from "react-native";
import React, { useState } from "react";
import { AiFillPlusSquare, AiFillMinusSquare } from "react-icons/ai";

export default function Page4() {
  const cost = 141800;
  const [count, setCount] = useState(1);
  const [textValue, setTextValue] = useState(cost);

  return (
    <View style={styles.container}>
      <View style={styles.child1}>
        <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
          <View>
            <Image
              source={require("../assets/book.png")}
              style={{ width: 104, height: 127 }}
            />
          </View>
          <View>
            <Text style={{ fontWeight: "bold", fontSize: "12px" }}>
              Nguyên hàm tích phân và ứng dụng <br />
              Cung cấp bởi Tiki Trading
            </Text>
            <Text
              style={{ fontWeight: "bold", fontSize: "18px", color: "red" }}
            >
              141.800 đ
            </Text>
            <Text style={{ textDecorationLine: "line-through" }}>
              141.800 đ
            </Text>
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <View
                style={{
                  width: 60,
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "space-between",
                }}
              >
                <TouchableOpacity
                  onPress={() => {
                    if (count > 0) {
                      setCount((prevCount) => prevCount - 1);
                      setTextValue(cost * (count - 1));
                    }
                  }}
                >
                  <AiFillMinusSquare />
                </TouchableOpacity>
                <Text style={{ fontWeight: 700 }}>{count}</Text>
                <TouchableOpacity
                  onPress={() => {
                    setCount((prevCount) => prevCount + 1);
                    setTextValue(cost * (count + 1));
                  }}
                >
                  <AiFillPlusSquare />
                </TouchableOpacity>
              </View>

              <TouchableOpacity>
                <Text
                  style={{
                    fontSize: 12,
                    fontWeight: 700,
                    color: "#134FEC",
                  }}
                >
                  Mua sau
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
        <View style={{ flexDirection: "row", paddingVertical: 10 }}>
          <TouchableOpacity>
            <Text style={{ fontSize: 12, fontWeight: "bold" }}>
              Mã giảm giá đã lưu
            </Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text
              style={{
                paddingLeft: 10,
                fontSize: 12,
                fontWeight: "bold",
                color: "#134FEC",
              }}
            >
              Xem tại đây
            </Text>
          </TouchableOpacity>
        </View>

        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <View
            style={{
              flexDirection: "row",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <TextInput
              style={{
                height: 40,
                width: 200,
                borderRadius: 5,
                paddingLeft: 10,
                borderColor: "gray",
                borderWidth: 1,
              }}
              placeholder="Mã giảm giá"
            />
          </View>
          <View>
            <TouchableOpacity
              style={{
                width: 99,
                height: 45,
                backgroundColor: "#16B",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Text
                style={{ fontWeight: "bold", fontSize: 20, color: "white" }}
              >
                Áp dụng
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>

      <View style={styles.child2}>
        <View style={{ paddingRight: 10 }}>
          <Text style={{ fontWeight: "bold", fontSize: 12, color: "black" }}>
            Bạn có phiếu quà tặng Tiki/Got it/Urbox?
          </Text>
        </View>
        <View>
          <TouchableOpacity>
            <Text
              style={{ fontWeight: "bold", fontSize: 12, color: "#134FEC" }}
            >
              Nhập tại đây?
            </Text>
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.child3}>
        <View>
          <Text style={{ fontWeight: "bold", fontSize: 18, color: "black" }}>
            Tạm tính
          </Text>
        </View>
        <View>
          <Text style={{ fontWeight: "bold", fontSize: 18, color: "#EE0D0D" }}>
            {textValue.toFixed(0).replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,")} đ
          </Text>
        </View>
      </View>

      <View style={styles.child4}>
        <View
          style={{
            width: "100%",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
            marginVertical: 10,
          }}
        >
          <View>
            <Text
              style={{ fontWeight: "bold", fontSize: 18, color: "#808080" }}
            >
              Thành tiền
            </Text>
          </View>
          <View>
            <Text
              style={{ fontWeight: "bold", fontSize: 18, color: "#EE0D0D" }}
            >
              {textValue.toFixed(0).replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,")} đ
            </Text>
          </View>
        </View>
        <View>
          <TouchableOpacity
            style={{
              width: 331,
              height: 45,
              backgroundColor: "#E53935",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Text style={{ fontWeight: "bold", fontSize: 20, color: "#FFF" }}>
              TIẾN HÀNH ĐẶT HÀNG
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
    alignItems: "center",
    justifyContent: "space-between",
    backgroundImage: "linear-gradient(to bottom , #C4C4C4, #C4C4C4)",
  },
  child1: {
    paddingVertical: 20,
    paddingHorizontal: 15,
    width: "100%",
    backgroundImage: "linear-gradient(to bottom , #FFF, #FFF)",
  },

  child2: {
    flexDirection: "row",
    paddingHorizontal: 15,
    paddingVertical: 20,
    width: "100%",
    backgroundImage: "linear-gradient(to bottom , #FFF, #FFF)",
  },

  child3: {
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 15,
    paddingBottom: 20,
    width: "100%",
    backgroundImage: "linear-gradient(to bottom , #FFF, #FFF)",
  },

  child4: {
    marginTop: 100,
    alignItems: "center",
    padding: 15,
    width: "100%",
    backgroundImage: "linear-gradient(to bottom , #FFF, #FFF)",
  },
});
