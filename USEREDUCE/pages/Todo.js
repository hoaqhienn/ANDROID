import React, { useState, useEffect } from 'react';
import { View, Text, FlatList } from 'react-native';

export default function Todo({ user }) {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    fetchTodos(user.id);
  }, []);

  const fetchTodos = async (userId) => {
    // Gọi API lấy danh sách todo của user
    const response = await fetch('https://6544aedf5a0b4b04436cbb5a.mockapi.io/api/todo');
    const data = await response.json();

    // Lọc ra các todo của user
    const userTodos = data.filter(todo => todo.userId === userId);
    setTodos(userTodos);
  }

  return (
    <View>
      <FlatList
        data={todos}
        keyExtractor={item => item.id}
        renderItem={({ item }) => <Text>{item.title}</Text>}
      />
    </View>
  );
}