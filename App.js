import { StatusBar } from "expo-status-bar";
import React from "react";
import { Appbar } from "react-native-paper";
import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import { Provider as PaperProvider } from "react-native-paper";

export default function App() {

  const handlePress = () => console.log('object')

  return (
    <SafeAreaView style={styles.wow}>
      <Text numberOfLines={1}onPress={handlePress}>
        Hellow World asdadsa asdads adas dd asd asdsad as asdas d asd as dasd
        asd sada sd sad as dasd asd asd asdsadasdsa asd asd asd asdasd asd as
        dsad a
      </Text>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  wow: {
    flex: 1,
    backgroundColor: "dodgerblue",
    alignItems: "center",
    justifyContent: "center",
  },
});
