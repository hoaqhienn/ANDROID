import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View, FlatList,Pressable,
  Image, TextInput, ScrollView,CheckBox, } from "react-native";
import { useFocusEffect } from "@react-navigation/native";

export default function Home({ route, navigation }) {
  const [user, setUser] = useState({});
  const [todos, setTodos] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [filter, setFilter] = useState("All");

  const { userId } = route.params;

  const fetchUser = async () => {
    const response = await fetch(
      `https://6544aedf5a0b4b04436cbb5a.mockapi.io/api/user/${userId}`
    );
    const user = await response.json();
    setUser(user);
  };

  const fetchTodos = async () => {
    const response = await fetch(
      `https://6544aedf5a0b4b04436cbb5a.mockapi.io/api/user/${userId}/todo`
    );
    const todos = await response.json();
    setTodos(todos);
  };

  const navigateToAddTodo = () => {
    navigation.navigate("P3", {
      userId,
      onTodoAdded: fetchTodos,
    });
  };

  const handleToggleTodo = async (todoId) => {
    const updatedTodos = todos.map((todo) =>
      todo.id === todoId ? { ...todo, status: !todo.status } : todo
    );

    await fetch(
      `https://6544aedf5a0b4b04436cbb5a.mockapi.io/api/user/${userId}/todo/${todoId}`,
      {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          status: updatedTodos.find((todo) => todo.id === todoId).status,
        }),
      }
    );

    setTodos(updatedTodos);
  };

  const handleRemoveTodo = async (todoId) => {
    await fetch(
      `https://6544aedf5a0b4b04436cbb5a.mockapi.io/api/user/${userId}/todo/${todoId}`,
      {
        method: "DELETE",
      }
    );

    const updatedTodos = todos.filter((todo) => todo.id !== todoId);
    setTodos(updatedTodos);
  };

  useEffect(() => {
    fetchUser();
    fetchTodos();
  }, [userId]);

  useFocusEffect(
    React.useCallback(() => {
      fetchTodos();
      if (route.params?.onTodoAdded) {
        route.params.onTodoAdded();
      }
    }, [userId, route.params])
  );

  const filteredTodos = todos.filter((todo) => {
    if (filter === "All") {
      return true;
    } else {
      return todo.status === (filter === "True");
    }
  });

  const searchedTodos = filteredTodos.filter((todo) =>
    todo.title.toLowerCase().includes(searchText.toLowerCase())
  );

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Pressable
          onPress={() => navigation.goBack()}
          style={styles.backButton}
        />
        <View style={styles.userInfoContainer}>
          <Image
            style={styles.userImage}
            resizeMode="center"
            source={{ uri: user.img }}
          />
          <View style={styles.greetingContainer}>
            <Text style={styles.greetingText}>Xin chào, {user.fname}</Text>
            <Text>Have a nice day!</Text>
          </View>
        </View>
      </View>

      <View style={styles.searchContainer}>
        <TextInput
          style={styles.searchInput}
          placeholder="Search..."
          value={searchText}
          onChangeText={(text) => setSearchText(text)}
        />
        <Pressable
          style={styles.searchButton}
          onPress={() => alert("Search: " + searchText)}
        >
          <Text style={styles.searchButtonText}>Search</Text>
        </Pressable>
      </View>

      <View style={styles.filterContainer}>
        {["All", "True", "False"].map((value) => (
          <Pressable
            key={value}
            style={[
              styles.filterButton,
              filter === value && styles.activeFilter,
            ]}
            onPress={() => setFilter(value)}
          >
            <Text>{value}</Text>
          </Pressable>
        ))}
      </View>

      <ScrollView style={styles.scrollView}>
        <FlatList
          data={searchedTodos}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <View style={styles.todoItemContainer}>
              <View style={styles.todoItemContent}>
                <CheckBox
                  value={item.status}
                  onValueChange={() => handleToggleTodo(item.id)}
                />
                <Text
                  style={item.status ? styles.crossedText : styles.normalText}
                >
                  {item.title}
                </Text>
                <View style={styles.todoButtonsContainer}>
                  <Pressable
                    style={styles.todoButton}
                    onPress={() => handleRemoveTodo(item.id)}
                  >
                    <Text style={styles.removeButtonText}>Remove</Text>
                  </Pressable>
                  <Pressable
                    style={styles.todoButton}
                    onPress={() =>
                      navigation.navigate("P4", { userId, todoId: item.id })
                    }
                  >
                    <Text>Edit</Text>
                  </Pressable>
                </View>
              </View>
            </View>
          )}
        />
      </ScrollView>

      <Pressable style={styles.addButton} onPress={navigateToAddTodo}>
        <Text style={styles.addButtonText}>ADD</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  crossedText: {
    textDecorationLine: "line-through",
    color: "gray",
  },

  normalText: {
    color: "black",
  },
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
  },
  userInfoContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  searchContainer: {},
  searchInput: {
    width: "100%",
    height: 40,
    borderWidth: 1,
    borderColor: "grey",
    borderRadius: 5,
    paddingLeft: 60,
  },
  searchButton: {
    position: "absolute",
    left: 5,
    top: 5,
    height: 30,
    borderRadius: 5,
    backgroundColor: "#00BDD6",
    padding: 5,
  },
  searchButtonText: {
    color: "white",
  },
  filterContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginVertical: 10,
    marginBottom: 20,
  },
  filterButton: {
    justifyContent: "center",
    alignItems: "center",
    width: 100,
    height: 30,
    borderRadius: 5,
    borderWidth: 1,
    padding: 5,
    margin: 5,
  },
  todoButtonsContainer: {
    flexDirection: "row",
  },
  todoButton: {
    padding: 5,
    marginHorizontal: 5,
    borderWidth: 0.5,
    borderRadius: 10,
  },
  removeButtonText: {
    color: "red",
  },
  header: {
    width: "100%",
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
  searchInput: {
    width: 340,
    height: 40,
    borderWidth: 1,
    borderColor: "grey",
    borderRadius: 5,
    paddingLeft: 60,
  },
  searchButton: {
    position: "absolute",
    left: 5,
    top: 5,
    height: 30,
    borderRadius: 5,
    backgroundColor: "#00BDD6",
    padding: 5,
  },
  scrollView: {
    flex: 1,
  },
  todoItemContainer: {
    width: 340,
    height: 50,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "grey",
    alignItems: "center",
    marginVertical: 5,
    justifyContent: "center",
  },
  todoItemContent: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 10,
    alignItems: "center",
  },
  addButton: {
    width: 80,
    height: 80,
    borderRadius: 40,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#00BDD6",
  },
  addButtonText: {
    fontWeight: "700",
    fontSize: 30,
    color: "white",
  },
});
