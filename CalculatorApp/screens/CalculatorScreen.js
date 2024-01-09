import React, { useState } from "react";
import { View, Text, TextInput, Button } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import {
  add,
  subtract,
  multiply,
  divide,
  selectResult,
} from "../slices/calculatorSlice";

const CalculatorScreen = () => {
  const [input, setInput] = useState("");
  const dispatch = useDispatch();
  const result = useSelector(selectResult);

  const handleOperation = (operator) => {
    const operand = parseFloat(input);
    if (!isNaN(operand)) {
      switch (operator) {
        case "+":
          dispatch(add(operand));
          break;
        case "-":
          dispatch(subtract(operand));
          break;
        case "*":
          dispatch(multiply(operand));
          break;
        case "/":
          dispatch(divide(operand));
          break;
      }
      setInput("");
    }
  };

  return (
    <View style={{ width: "100%" }}>
      <TextInput
        style={{ height: 30 }}
        keyboardType="numeric"
        value={input}
        onChangeText={(text) => setInput(text)}
      />
      <View style={{width: '100%', flexDirection: "row" }}>
        <Button title="+" onPress={() => handleOperation("+")} />
        <Button title="-" onPress={() => handleOperation("-")} />
      </View>
      <View style={{ flexDirection: "row" }}>
        <Button title="*" onPress={() => handleOperation("*")} />
        <Button title="/" onPress={() => handleOperation("/")} />
      </View>
      <Text>Result: {result}</Text>
    </View>
  );
};

export default CalculatorScreen;
