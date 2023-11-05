import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  Pressable,
  Image,
  TextInput,
  ScrollView,
} from "react-native";

export default function Home({ route, navigation }) {
  const [todos, setTodos] = useState([]);
  const { email } = route.params;
  const [data, setData] = useState([]);


  useEffect(() => {
    fetch("https://6544aedf5a0b4b04436cbb5a.mockapi.io/api/todo")
      .then((response) => response.json())
      .then((data) => {
        const user = data.find((item) => item.email === email);
        setData(user);
        setTodos(user.todos);
      })
      .catch((error) => {
        console.error("Đã xảy ra lỗi khi lấy dữ liệu:", error);
      });
  }, [route.params.update]);

  return (
    <View style={styles.container}>
      <View
        style={{
          width: "100%",
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          padding: 10,
        }}
      >
        <Pressable
          onPress={() => {
            navigation.goBack();
          }}
          style={{ width: 30, height: 30, backgroundColor: "red" }}
        />

        <View style={{ flexDirection: "row" }}>
          <Image
            style={{ width: 50, height: 50, borderRadius: 25 }}
            resizeMode="center"
            source={{ uri: data.image }}
          />
          <View style={{ paddingLeft: 10, alignItems: "center" }}>
            <Text style={{ fontSize: 20, fontWeight: 700 }}>
              Xin chào, {data.email}
            </Text>
            <Text style={{ fontSize: 16, fontWeight: 700, color: "grey" }}>
              Have a nice day
            </Text>
          </View>
        </View>
      </View>

      <View style={{ marginVertical: 30 }}>
        <TextInput
          style={{
            width: 340,
            height: 40,
            borderWidth: 1,
            borderColor: "grey",
            borderRadius: 5,
            paddingLeft: 60,
          }}
        />

        <Pressable
          style={{
            position: "absolute",
            left: 5,
            top: 5,
            height: 30,
            borderRadius: 5,
            backgroundColor: "#00BDD6",
            padding: 5,
          }}
          onPress={() => {
            alert("Press");
          }}
        >
          <Text style={{ color: "white" }}>Search</Text>
        </Pressable>
      </View>

      <ScrollView style={{height: '50%'}}>
        <View>
          <FlatList
            data={todos}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => {
              return (
                <View
                  style={{
                    width: 340,
                    height: 50,
                    borderRadius: 10,
                    borderWidth: 1,
                    borderColor: "grey",
                    alignItems: "center",
                    marginVertical: 5,
                    justifyContent: "center",
                  }}
                >
                  <View
                    style={{
                      width: "100%",
                      flexDirection: "row",
                      justifyContent: "space-between",
                      paddingHorizontal: 10,
                      alignItems: "center",
                    }}
                  >
                    <Text>{item.text}</Text>
                    <Pressable>
                      <Text>Edit</Text>
                    </Pressable>
                  </View>
                </View>
              );
            }}
          />
        </View>
      </ScrollView>

      <View style={{ marginVertical: 30 }}>
        <Pressable
          style={{
            width: 80,
            height: 80,
            borderRadius: 40,
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: "#00BDD6",
          }}
          onPress={() => {
            navigation.navigate("P3", { email, data, todos });
          }}
        >
          <Text style={{ fontWeight: 700, fontSize: 30, color: "white" }}>
            ADD
          </Text>
        </Pressable>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
  },
});
