import React from "react";
import { Appbar } from "react-native-paper";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import {
  SafeAreaView,
  StyleSheet,
  Text,
  Dimensions,
  View,
  Image,
  TouchableHighlight,
  Button,
  Alert,
  StatusBar,
  Platform,
} from "react-native";
import AppText from "./app/components/AppText";

export default function App() {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <MaterialCommunityIcons name="email" size={60} color="dodgerblue" />
    </View>
  );
}

const styles = StyleSheet.create({
  wow: {
    flex: 1,
    backgroundColor: "white",
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
});
