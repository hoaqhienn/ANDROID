import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import SelectApp from "/pages/SelectApp";
import P1 from "/pages/Page1";
import P2 from "/pages/Page2";
import P3 from "/pages/Page3";
import P4 from "/pages/Page4";

export default function App({}) {
  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="SelectApp"
        screenOptions={{ headerShown: false }}
      >
        <Stack.Screen name="Home" component={P2} />
        <Stack.Screen name="Login" component={P1} />
        <Stack.Screen name="SelectApp" component={SelectApp} />
        <Stack.Screen name="P3" component={P3} />
        <Stack.Screen name="P4" component={P4} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}



