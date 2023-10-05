import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TextInput,
  Image,
} from "react-native";
import { BiSolidStar, BiSolidCamera } from "react-icons/bi";

export default function Page1() {
  return (
    <View style={styles.container}>
      <View style={{ flexDirection: "row" }}>
        <Image
          source={require("../assets/usb.png")}
          style={{ width: 57, height: 52, marginRight: 10 }}
        />
        <Text style={{ fontWeight: "bold", fontSize: "16px" }}>
          USB Bluetooth Music Receiver <br />
          HJX-001-Biến loa thường thành loa <br />
          bluetooh
        </Text>
      </View>

      <View>
        <Text style={{ fontWeight: "bold", fontSize: "18px" }}>
          Cực kỳ hài lòng
        </Text>
      </View>

      <View style={{ flexDirection: "row" }}>
        <BiSolidStar size="39" color="#F2DD1B" />
        <BiSolidStar size="39" color="#F2DD1B" />
        <BiSolidStar size="39" color="#F2DD1B" />
        <BiSolidStar size="39" color="#F2DD1B" />
        <BiSolidStar size="39" color="#F2DD1B" />
      </View>

      <View
        style={{
          width: 293,
          height: 68,
          borderRadius: 5,
          borderWidth: 1,
          borderColor: "#1511EB",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-around",
          paddingRight: 60,
        }}
      >
        <BiSolidCamera size="39" />
        <TouchableOpacity>
          <Text style={{ fontSize: 18, fontWeight: 700 }}>Thêm hình ảnh</Text>
        </TouchableOpacity>
      </View>

      <View
        style={{
          height: 222,
          width: 293,
          borderRadius: 5,
          borderWidth: 1,
          borderColor: "#C4C4C4",
          padding: 10,
        }}
      >
        <TextInput
          style={{ fontSize: 18, fontWeight: 700 }}
          placeholderTextColor={"Grey"}
          multiline
          numberOfLines={5}
          placeholder="Hãy chia sẻ những điều mà bạn thích về sản phẩm"
        />
      </View>

      <View>
        <TouchableOpacity
          style={{
            width: 289,
            height: 41,
            borderWidth: 1,
            borderRadius: 5,
            backgroundColor: "#0D5DB6",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Text style={{ fontSize: 20, fontWeight: "bold", color: "#FFF" }}>
            Gửi
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
    alignItems: "center",
    justifyContent: "space-around",
    backgroundImage: "linear-gradient(to bottom , #FFF, #FFF)",
  },
});
