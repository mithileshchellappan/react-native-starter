import React from "react";
import { Appbar } from "react-native-paper";
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
import {
  useDimensions,
  useDeviceOrientation,
} from "@react-native-community/hooks";
export default function App() {
  const { landscape } = useDeviceOrientation();
  return (
    <SafeAreaView style={styles.wow}>
      <View
        style={{
          backgroundColor: "dodgerblue",
          width: "100%",
          height: landscape ? "100%" : "30%",
        }}
      ></View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  wow: {
    flex: 1,
    backgroundColor: "white",
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
});
