import { StatusBar } from "expo-status-bar";
import React from "react";
import { Appbar } from "react-native-paper";
import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  Image,
  TouchableHighlight,

} from "react-native";
import { Provider as PaperProvider } from "react-native-paper";

export default function App() {
  const handlePress = () => console.log("object");
  console.log(require("./assets/icon.jpg"));
  return (
    <SafeAreaView style={styles.wow}>
      <Text numberOfLines={1} onPress={handlePress}>
        Hellow World
      </Text>
      <TouchableHighlight onPress={handlePress}>
        {/* <Image
          fadeDuration={1000}
          source={{
            height: 600,
            width: 300,
            uri: "https://picsum.photos/600/00",
          }}
        /> */}
        <View style={{width:200,height:70,backgroundColor:"dodgerblue"}}></View>
      </TouchableHighlight>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  wow: {
    flex: 1,
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "center",
  },
});
