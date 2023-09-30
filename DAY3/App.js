import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import Page1 from "./src/pages/Page1.js";
import Page2 from "./src/pages/Page2.js";
import Page3 from "./src/pages/Page3.js";
import Page4 from "./src/pages/Page4.js";
import Page5 from "./src/pages/Page5.js";
import Page6 from "./src/pages/Page6.js";
import Page7 from "./src/pages/Page7.js";
import Page8 from "./src/pages/Page8.js";

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
        <Tab.Screen name="5" component={Page5} />
        <Tab.Screen name="6" component={Page6} />
        <Tab.Screen name="7" component={Page7} />
        <Tab.Screen name="8" component={Page8} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
