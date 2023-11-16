import React, { useState, useEffect, useRef } from "react";
import { View, Button, TextInput, Pressable, Image, Text } from "react-native";
import { useFocusEffect } from "@react-navigation/native";

export default function Page3({ route, navigation }) {
  const { userId, onTodoAdded } = route.params;
  const [text, setText] = useState("");
  const [user, setUser] = useState({});
  const textInputRef = useRef(null);

  const fetchUser = async () => {
    try {
      const response = await fetch(
        `https://6544aedf5a0b4b04436cbb5a.mockapi.io/api/user/${userId}`
      );
      const userData = await response.json();
      setUser(userData);
    } catch (error) {
      console.error("Error fetching user data:", error);
    }
  };

  useEffect(() => {
    fetchUser();
  }, []);

  useFocusEffect(
    React.useCallback(() => {
      if (textInputRef.current) {
        textInputRef.current.focus();
      }
    }, [])
  );

  const addTodo = async () => {
    const newTodo = {
      title: text,
    };
    try {
      const response = await fetch(
        `https://6544aedf5a0b4b04436cbb5a.mockapi.io/api/user/${userId}/todo`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(newTodo),
        }
      );
      const addedTodo = await response.json();
      setText("");
      if (typeof onTodoAdded === "function") {
        onTodoAdded(); // Execute the callback function
      }
      navigation.goBack();
    } catch (error) {
      console.error("Error adding todo:", error);
    }
  };

  return (
    <View>
      <View>
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
              source={{ uri: user.img }}
            />
          </View>

          <View style={{ alignItems: "center" }}>
            <Text style={{ fontSize: 20, fontWeight: "700" }}>
              Xin chào, {user.fname}
            </Text>
            <Text>Have a nice day!</Text>
          </View>
        </View>
      </View>
      <View>
        <TextInput
          ref={textInputRef}
          style={{ width: 300, height: 50 }}
          value={text}
          onChangeText={setText}
          placeholder="Enter todo"
        />
        <Button
          title="Add"
          onPress={() => {
            addTodo();
          }}
        />
      </View>
    </View>
  );
}
