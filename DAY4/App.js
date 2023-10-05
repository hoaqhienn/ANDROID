import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import Page1 from "./pages/Page1.js";
import Page2 from "./pages/Page2.js";
import Page3 from "./pages/Page3.js";
import Page4 from "./pages/Page4.js";

const Tab = createBottomTabNavigator();
const screenOptions = {
  headerShown: false,
  tabBarActiveTintColor: "red",
  tabBarIconStyle: { display: "none" },
  tabBarLabelPosition: "beside-icon",
  tabBarLabelStyle: {
    fontWeight: "700",
    fontSize: 15,
  },
};

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator screenOptions={screenOptions}>
        <Tab.Screen name="1" component={Page1} />
        <Tab.Screen name="2" component={Page2} />
        <Tab.Screen name="3" component={Page3} />
        <Tab.Screen name="4" component={Page4} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
