import React, { useState, useEffect } from "react";
import { View, Text, TextInput, Pressable,
  Image, StyleSheet, } from "react-native";
export default function EditTodoScreen({ route, navigation }) {
  const { userId, todoId } = route.params;
  const [todo, setTodo] = useState({ title: "" });
  const [user, setUser] = useState({});
  
  const fetchTodoDetails = async () => {
    const response = await fetch(
      `https://6544aedf5a0b4b04436cbb5a.mockapi.io/api/user/${userId}/todo/${todoId}`
    );
    const todoDetails = await response.json();
    setTodo(todoDetails);
  };

  const fetchUser = async () => {
    const response = await fetch(
      `https://6544aedf5a0b4b04436cbb5a.mockapi.io/api/user/${userId}`
    );
    const userData = await response.json();
    setUser(userData);
  };

  useEffect(() => {
    fetchTodoDetails();
    fetchUser();
  }, []);

  const handleSaveChanges = async () => {
    await fetch(
      `https://6544aedf5a0b4b04436cbb5a.mockapi.io/api/user/${userId}/todo/${todoId}`,
      {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          title: todo.title,
        }),
      }
    );
    navigation.goBack();
  };

  return (
    <View>
      <View style={styles.header}>
        <Pressable
          onPress={() => navigation.goBack()}
          style={styles.backButton}
        />
        <View style={{ flexDirection: "row" }}>
          <Image
            style={styles.userImage}
            resizeMode="center"
            source={{ uri: user.img }}
            onError={() => console.log("Error loading image")}
          />
        </View>
        <View style={styles.greetingContainer}>
          <Text style={styles.greetingText}>Xin chào, {user.fname}</Text>
          <Text>Have a nice day!</Text>
        </View>
      </View>
      <Text>Edit Todo</Text>
      <TextInput
        value={todo.title || ""}
        onChangeText={(text) =>
          setTodo((prevTodo) => ({ ...prevTodo, title: text }))
        }
        placeholder="Edit Todo Title"
      />
      <Pressable onPress={handleSaveChanges}>
        <Text>Save Changes</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 10,
  },
  backButton: {
    width: 30,
    height: 30,
    backgroundColor: "red",
  },
  userImage: {
    width: 50,
    height: 50,
    borderRadius: 25,
  },
  greetingContainer: {
    alignItems: "center",
  },
  greetingText: {
    fontSize: 20,
    fontWeight: "700",
  },
});
