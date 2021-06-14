import React from "react";
import Constants from "expo-constants";
import { SafeAreaView, StyleSheet,View } from "react-native";

function Screen(props) {
  return (
    <View
      style={[styles.screen, props.style, ]}
    >
       {props.children}
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    paddingTop: Constants.statusBarHeight,
    flex: 1,
  },
});

export default Screen;
