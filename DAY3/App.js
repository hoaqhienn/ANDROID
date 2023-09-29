import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  Image,
  Button,
  TouchableOpacity,
  ImageBackground
} from "react-native";


import Page1 from "./src/pages/Page1.js";
import Page2 from "./src/pages/Page2.js";
import Page3 from "./src/pages/Page3.js";
import Page4 from "./src/pages/Page4.js";
import Page5 from "./src/pages/Page5.js";
import Page6 from "./src/pages/Page6.js";
import Page7 from "./src/pages/Page7.js";
import Page8 from "./src/pages/Page8.js";

export default function App() {
  return (
    // <Page1 />
    // <Page2 />
    // <Page3 />
    // <Page4 />
    // <Page5 />
    // <Page6 />
    // <Page7 />
    <Page8 />
  );
}

const styles = StyleSheet.create({
  container: {
    marginVertical: 50,
    flex: 1,
    alignItems: "center",
    justifyContent: "space-around",
  },

});
