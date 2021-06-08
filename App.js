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
  Button,
  Alert

} from "react-native";
import { Provider as PaperProvider } from "react-native-paper";

export default function App() {
  const handlePress = () => console.log("object");
  console.log(require("./assets/icon.jpg"));
  return (
    <SafeAreaView style={styles.wow}>
      <Button color="orange" title="wow" onPress={()=>Alert.alert('wow','message',[
        {text:'Nope',onPress:()=>console.log('nope')},
        {text:'Yes',onPress:()=>console.log('yes')}
      ])}/>
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
