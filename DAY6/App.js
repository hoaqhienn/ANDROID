import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import P1 from "/pages/Page1";
import P2 from "/pages/Page2";
import P3 from "/pages/Page3";

export default function App({}) {
  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="P1"
        screenOptions={{ headerShown: false }}
      >
        <Stack.Screen name="P1" component={P1} />
        <Stack.Screen name="P2" component={P2} />
        <Stack.Screen name="P3" component={P3} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
