import React, { useState } from "react";
import { Text, View, Image, Pressable, TextInput } from "react-native";

export default function App({ route, navigation }) {
  const { email } = route.params;
  const { data } = route.params;
  const [text, setText] = useState("");
  const [todos, setTodos] = useState(todos || []);

  const addTodo = (text) => {
    // Create a new todo object
    const newTodo = {
      id: todos.length + 1,
      text,
      completed: false,
    };

    // Update the todos array with the new todo
    setTodos([...todos, newTodo]);
  };

  return (
    <View style={{ alignItems: "center" }}>
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
      <View>
        <Text style={{ fontWeight: 700, fontSize: 30 }}>ADD YOUR JOB</Text>
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
          value={text}
          onChangeText={setText}
          placeholder="input your job"
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
          <Text style={{ color: "Green" }}>Icon</Text>
        </Pressable>
      </View>
      <View style={{ marginVertical: 30 }}>
        <Pressable
          style={{
            width: 150,
            height: 40,
            borderRadius: 10,
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: "#00BDD6",
          }}
          onPress={() => {
            addTodo(text);

            // Truyền todos mới vào params
            navigation.navigate("P2", {
              email,
              data,
              todos,
            });
          }}
        >
          <Text style={{ fontSize: 24, color: "white" }}>FINISH</Text>
        </Pressable>
      </View>
      <View style={{ marginVertical: 50 }}>
        <Image
          source={require("../assets/img1.png")}
          style={{ width: 200, height: 200 }}
        />
      </View>
    </View>
  );
}
