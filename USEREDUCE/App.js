import React, { useReducer } from "react";
import { View, Text, Button } from "react-native";

const initialState = 0;

const reducer = (state, action) => {
  switch (action.type) {
    case "INC":
      return state + 1;
    case "DEC":
      return state - 1;
    default:
      return state;
  }
};

export default function App() {
  const [count, dispatch] = useReducer(reducer, initialState);

  return (
    <View
      style={{
        flex: 1,
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Button title="-" onPress={() => dispatch({ type: "DEC" })} />
      <Text style={{ padding: 10 }}>{count}</Text>
      <Button title="+" onPress={() => dispatch({ type: "INC" })} />
    </View>
  );
}
