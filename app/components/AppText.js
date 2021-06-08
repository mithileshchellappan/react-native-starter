import React from "react";
import { Text, StyleSheet, Platform } from "react-native";

function AppText(props) {
  return <Text style={styles.text}>{props.children}</Text>;
}

Platform.select({
  ios: { fontSize: 20, fontFamily: "Avenir" },
  android: {
    fontSize: 18,
    fontFamily: "Roboto",
  },
});

const styles = StyleSheet.create({
  text: {
    color: "tomato",
    ...Platform.select({
      ios: { fontSize: 20, fontFamily: "Avenir" },
      android: {
        fontSize: 18,
        fontFamily: "Roboto",
      },
    }),
  },
});
export default AppText;