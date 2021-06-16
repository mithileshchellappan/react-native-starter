import React from "react";
import { StyleSheet, TouchableOpacity, View } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import colors from "../config/colors";

function NewListingButton({onPress}) {
  return (
      <TouchableOpacity onPress={onPress}>

    <View style={styles.container}>
      <MaterialCommunityIcons name="plus-circle" size={35} color={colors.white} />
    </View>
      </TouchableOpacity>
  );
}
const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.primaryColor,
    height: 80,
    width: 80,
    borderRadius: 40,
    bottom: 20,
    borderColor: colors.white,
    borderWidth: 10,
    alignItems: "center",
    justifyContent: "center",
  },
});
export default NewListingButton;
