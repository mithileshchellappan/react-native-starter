import React from "react";
import { View, StyleSheet,Image } from "react-native";
import AppText from "./AppText";

function ListItem({ title, subtitle, image }) {
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={image} />
      <View style={styles.secondCont}>
          <AppText style={styles.title}>{title}</AppText>
          <AppText style={styles.subtitle}>{subtitle}</AppText>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
  },
  image: {
    width: 70,
    height: 70,
    borderRadius: 35,
    marginRight:10
  },secondCont:{
      flexDirection:"column"
  },title:{
      fontWeight:"600"
  },subtitle:{
      color:"grey"
  }
});

export default ListItem;
