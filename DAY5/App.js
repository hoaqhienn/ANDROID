import React, { useState } from "react";
import Page1 from "../DAY5/pages/Page1";
import Page2 from "../DAY5/pages/Page2";

import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="P1"
        screenOptions={{ headerShown: false }}
      >
        <Stack.Screen name="P1" component={Page1} />
        <Stack.Screen name="P2" component={Page2} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
