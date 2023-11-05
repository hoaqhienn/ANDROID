import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  Pressable,
  FlatList,
  SafeAreaView,
  ScrollView,
} from "react-native";

export default function App({ navigation }) {
  const [type, setType] = useState("");
  const onItemPress = (item) => {
    navigation.navigate("P3", { item });
  }
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <View style={{ flexDirection: "row", paddingVertical: 20 }}>
          <Text
            style={{
              textAlign: "center",
              fontSize: 25,
              fontWeight: 700,
              fontFamily: "Ubuntu",
              color: "red",
            }}
          >
            The world's best bike
          </Text>
        </View>

        <View style={{ flexDirection: "row", paddingBottom: 20, justifyContent: 'space-between' }}>
          <Pressable
            style={styles.pressable}
            onPress={() => {
              setType("");
            }}
          >
            <Text style={{color: type === "" ? "red" : "grey"}}>All</Text>
          </Pressable>
          <Pressable
            style={styles.pressable}
            onPress={() => {
              setType("Roadbike");
            }}
          >
            <Text style={{color: type === "Roadbike" ? "red" : "grey"}}>Roadbike</Text>
          </Pressable>
          <Pressable
            style={styles.pressable}
            onPress={() => {
              setType("Mountain");
            }}
          >
            <Text style={{color: type === "Mountain" ? "red" : "grey"}}>Mountain</Text>
          </Pressable>
        </View>
        
        <View style={{ alignItems: "center", justifyContent: "center", marginBottom: 30}}>
          <FlatList
            numColumns={2}
            data={array.filter((item) => type ? item.type === type : true)}
            renderItem={({ item }) => {
              return (
                <View style={{ padding: 5 }}>
                  <Pressable
                    onPress={() => onItemPress(item)}
                  >
                    <View
                      style={{
                        width: 180,
                        height: 220,
                        backgroundColor: "#fdecec",
                        borderRadius: 10,
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                    >
                      <Image
                        source={item.image}
                        style={{ width: 150, height: 150 }}
                        resizeMode="contain"
                      />
                      <Text
                        style={{ fontSize: 20, fontWeight: 400, color: "grey" }}
                      >
                        {item.name}
                      </Text>
                      <View style={{ flexDirection: "row" }}>
                        <Text
                          style={{
                            fontSize: 20,
                            fontWeight: 400,
                            color: "#F7BA83",
                          }}
                        >
                          $
                        </Text>
                        <Text
                          style={{
                            fontSize: 20,
                            fontWeight: 500,
                          }}
                        >
                          {item.price}
                        </Text>
                      </View>
                    </View>
                  </Pressable>
                </View>
              );
            }}
          ></FlatList>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "space-around",
    width: "100%",
  },
  pressable: {
    width: 100,
    height: 30,
    borderRadius: 3,
    borderColor: "red",
    borderWidth: 0.5,
    marginHorizontal: 5,
    justifyContent: "center",
    alignItems: "center",
  },
});

const array = [
  {
    id: 1,
    image: require("../assets/blue.png"),
    name: "Bike 1",
    price: 700,
    txt1: "30% OFF | 700$",
    txt2: "1000$",
    desc: "It is a very important form of writing as we write almost everything in paragraphs, be it an answer, essay, story, emails, etc.",
    type: "Roadbike",
  },
  {
    id: 2,
    image: require("../assets/red.png"),
    name: "Bike 2",
    price: 700,
    txt1: "30% OFF | 700$",
    txt2: "1000$",
    desc: "It is a very important form of writing as we write almost everything in paragraphs, be it an answer, essay, story, emails, etc.",
    type: "Mountain",
  },
  {
    id: 3,
    image: require("../assets/pink.png"),
    name: "Bike 3",
    price: 700,
    txt1: "30% OFF | 700$",
    txt2: "1000$",
    desc: "It is a very important form of writing as we write almost everything in paragraphs, be it an answer, essay, story, emails, etc.",
    type: "Roadbike",
  },
  {
    id: 4,
    image: require("../assets/red2.png"),
    name: "Bike 4",
    price: 700,
    txt1: "30% OFF | 700$",
    txt2: "1000$",
    desc: "It is a very important form of writing as we write almost everything in paragraphs, be it an answer, essay, story, emails, etc.",
    type: "Roadbike",
  },
  {
    id: 5,
    image: require("../assets/blue.png"),
    name: "Bike 5",
    price: 700,
    txt1: "30% OFF | 700$",
    txt2: "1000$",
    desc: "It is a very important form of writing as we write almost everything in paragraphs, be it an answer, essay, story, emails, etc.",
    type: "Roadbike",
  },
  {
    id: 6,
    image: require("../assets/red.png"),
    name: "Bike 6",
    price: 700,
    txt1: "30% OFF | 700$",
    txt2: "1000$",
    desc: "It is a very important form of writing as we write almost everything in paragraphs, be it an answer, essay, story, emails, etc.",
    type: "Roadbike",
  },
  {
    id: 7,
    image: require("../assets/pink.png"),
    name: "Bike 7",
    price: 700,
    txt1: "30% OFF | 700$",
    txt2: "1000$",
    desc: "It is a very important form of writing as we write almost everything in paragraphs, be it an answer, essay, story, emails, etc.",
    type: "Roadbike",
  },
  {
    id: 8,
    image: require("../assets/red2.png"),
    name: "Bike 8",
    price: 700,
    txt1: "30% OFF | 700$",
    txt2: "1000$",
    desc: "It is a very important form of writing as we write almost everything in paragraphs, be it an answer, essay, story, emails, etc.",
    type: "Moutain",
  },
  {
    id: 9,
    image: require("../assets/blue.png"),
    name: "Bike 9",
    price: 700,
    txt1: "30% OFF | 700$",
    txt2: "1000$",
    desc: "It is a very important form of writing as we write almost everything in paragraphs, be it an answer, essay, story, emails, etc.",
    type: "Roadbike",
  },
  {
    id: 10,
    image: require("../assets/blue.png"),
    name: "Bike 10",
    price: 700,
    txt1: "30% OFF | 700$",
    txt2: "1000$",
    desc: "It is a very important form of writing as we write almost everything in paragraphs, be it an answer, essay, story, emails, etc.",
    type: "Roadbike",
  },
  {
    id: 11,
    image: require("../assets/blue.png"),
    name: "Bike 11",
    price: 700,
    txt1: "30% OFF | 700$",
    txt2: "1000$",
    desc: "It is a very important form of writing as we write almost everything in paragraphs, be it an answer, essay, story, emails, etc.",
    type: "Mountain",
  },
  {
    id: 12,
    image: require("../assets/blue.png"),
    name: "Bike 12",
    price: 700,
    txt1: "30% OFF | 700$",
    txt2: "1000$",
    desc: "It is a very important form of writing as we write almost everything in paragraphs, be it an answer, essay, story, emails, etc.",
    type: "Mountain",
  },
  {
    id: 13,
    image: require("../assets/red.png"),
    name: "Bike 13",
    price: 700,
    txt1: "30% OFF | 700$",
    txt2: "1000$",
    desc: "It is a very important form of writing as we write almost everything in paragraphs, be it an answer, essay, story, emails, etc.",
    type: "Roadbike",
  },
  {
    id: 14,
    image: require("../assets/pink.png"),
    name: "Bike 14",
    price: 700,
    txt1: "30% OFF | 700$",
    txt2: "1000$",
    desc: "It is a very important form of writing as we write almost everything in paragraphs, be it an answer, essay, story, emails, etc.",
    type: "Roadbike",
  },
  {
    id: 15,
    image: require("../assets/blue.png"),
    name: "Bike 15",
    price: 700,
    txt1: "30% OFF | 700$",
    txt2: "1000$",
    desc: "It is a very important form of writing as we write almost everything in paragraphs, be it an answer, essay, story, emails, etc.",
    type: "Mountain",
  },
  {
    id: 16,
    image: require("../assets/red2.png"),
    name: "Bike 12",
    price: 700,
    txt1: "30% OFF | 700$",
    txt2: "1000$",
    desc: "It is a very important form of writing as we write almost everything in paragraphs, be it an answer, essay, story, emails, etc.",
    type: "Mountain",
  },
];
