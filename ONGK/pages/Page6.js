import React, { useState } from 'react';
import {
  Pressable,
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
} from "react-native";
import {data} from '../pages/data';
export default function App({ navigation }) {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const handleSubmit = () => {
    if(!name || !description) {
      alert('Vui lòng nhập đầy đủ thông tin');
      return;
    }

    const newData = {
      title: name,
      description
    };

    data.push(newData);
    alert('Thêm thành công');
    setName('');
    setDescription('');
    navigation.navigate('P2');
  }
  return (
    <View style={styles.container}>
      <View
        style={{
          flexDirection: "row",
          width: "100%",
          padding: 10,
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <View>
          <Pressable onPress={() => navigation.navigate("P1")}>
            <Image
              source={require("../assets/arrow.png")}
              style={{ width: 30, height: 30 }}
            />
          </Pressable>
        </View>
        <View>
          <Text
            style={{
              fontSize: 30,
              fontWeight: 700,
              fontFamily: "Ubuntu",
              color: "red",
            }}
          >
            ADD
          </Text>
        </View>
        <View style={{ flexDirection: "row" }}>
          <Pressable onPress={() => navigation.navigate("P1")}>
            <Text>EDIT</Text>
          </Pressable>
        </View>
      </View>
      <View>
        <Text>NAME</Text>
        <TextInput value={name} onChangeText={(text) => setName(text)} />
        <Text>DESC</Text>
        <TextInput
          value={description}
          onChangeText={(text) => setDescription(text)}
        />
        <Pressable onPress={handleSubmit}>
          <Text>ADD</Text>
        </Pressable>
      </View>
      <View
        style={{
          width: "100%",
          flexDirection: "row",
          justifyContent: "space-around",
          alignItems: "center",
          padding: 10,
        }}
      >
        <Pressable
          onPress={() => {
            navigation.navigate("P1");
          }}
        >
          <Image
            source={require("../assets/home.png")}
            style={{ width: 20, height: 20 }}
          />
          <Text>Home</Text>
        </Pressable>
        <Pressable
          onPress={() => {
            navigation.navigate("P2");
          }}
        >
          <Image
            source={require("../assets/contact.png")}
            style={{ width: 20, height: 20 }}
          />
          <Text>Contact</Text>
        </Pressable>
        <Pressable
          onPress={() => {
            navigation.navigate("P3");
          }}
        >
          <Image
            source={require("../assets/search.png")}
            style={{ width: 20, height: 20 }}
          />
          <Text>Search</Text>
        </Pressable>
        <Pressable
          onPress={() => {
            navigation.navigate("P4");
          }}
        >
          <Image
            source={require("../assets/noti.png")}
            style={{ width: 20, height: 20 }}
          />
          <Text>Notification</Text>
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "start",
    justifyContent: "space-between",
    width: "100%",
  },
});
