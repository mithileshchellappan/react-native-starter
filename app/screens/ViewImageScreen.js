import React from "react";
import { Image, StyleSheet, View } from "react-native";

function ViewImageScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.closeIcon}></View>
      <View style={styles.deleteIcon}></View>
      <Image style={styles.image} source={require("../assets/wow.webp")} />
    </View>
  );
}

const styles = StyleSheet.create({
  closeIcon: {
    width: 50,
    height:50,
    backgroundColor: "white",
    position:'absolute',
    top:40,
    left:30
  },
  deleteIcon:{
    width: 50,
    height:50,
    backgroundColor: "green",
    position:'absolute',
    top:40,
    right:30
  },
  container: {
    backgroundColor: "black",
    flex: 1,
  },
  image: {
    width: "100%",
    height: "50%",
  },
});

export default ViewImageScreen;
