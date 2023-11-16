import React, { useState } from 'react';
import { View, TextInput, Button } from 'react-native';

export default function Login({ onLogin, navigation }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async () => {
    console.log('handleLogin');
    // Gọi API xác thực người dùng
    const user = await fetchUser(username, password);
    
    // Kiểm tra kết quả, nếu đúng chuyển sang trang todo
    if (user) {
      console.log('navigate to Todo');
      onLogin(user);
    }
  };

  return (
    <View>
      <TextInput 
        value={username}
        onChangeText={setUsername} 
        placeholder="Username"
      />
      <TextInput
        value={password}
        onChangeText={setPassword}
        placeholder="Password"
        secureTextEntry
      />
      <Button title="Login" onPress={handleLogin} />
    </View>
  );
}

async function fetchUser(username, password) {
  // Gọi API xác thực người dùng
  const response = await fetch('https://6544aedf5a0b4b04436cbb5a.mockapi.io/api/user');
  const data = await response.json();

  // Tìm user có username và password khớp
  return data.find(user => user.username === username && user.password === password); 
}