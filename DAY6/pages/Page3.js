import {
  StyleSheet,
  Image,
  Pressable,
  SafeAreaView,
  View,
  Text,
} from "react-native";

export default function App({ navigation, route }) {
  const { item } = route.params;
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.img}>
        <Image
          source={item.image}
          style={{ width: "100%", height: "100%" }}
          resizeMode="center"
        />
      </View>
      <View style={styles.in4}>
        <Text style={{ fontSize: 35, fontWeight: 700 }}>{item.name}</Text>
        <View style={{ flexDirection: "row" }}>
          <Text
            style={{
              fontSize: 25,
              fontWeight: 400,
              color: "grey",
              marginRight: 30,
            }}
          >
            {item.txt1}
          </Text>
          <Text
            style={{
              fontSize: 25,
              fontWeight: 400,
              textDecoration: "line-through",
            }}
          >
            {item.txt2}
          </Text>
        </View>

        <Text
          style={{
            fontSize: 25,
            fontWeight: 400,
          }}
        >
          Description
        </Text>
        <Text
          style={{
            fontSize: 18,
            fontWeight: 400,
            color: "grey",
          }}
        >
          {item.desc}
        </Text>
      </View>
      <View
        style={{
          flexDirection: "row",
          width: "100%",
          paddingHorizontal: 30,
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <View>
          <Image
            source={require("../assets/heart.png")}
            style={{ width: 35, height: 35 }}
          />
        </View>
        <View>
          <Pressable onPress={() => navigation.navigate("P2")}
            style={{
              width: 270,
              height: 50,
              backgroundColor: "#E94141",
              borderRadius: 30,
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Text
              style={{
                textAlign: "center",
                fontSize: 25,
                fontWeight: 400,
                color: "white",
              }}
            >
              Add to card
            </Text>
          </Pressable>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "space-around",
    paddingVertical: 15,
  },
  img: {
    width: 360,
    height: 360,
    backgroundColor: "#fdecec",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 20,
  },
  in4: {
    width: "100%",
    justifyContent: "center",
    alignItems: "start",
    borderRadius: 20,
    padding: 20,
  },
});
