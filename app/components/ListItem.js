import React from "react";
import {
  View,
  StyleSheet,
  Image,
  TouchableOpacity,
  TouchableHighlight,
} from "react-native";
import { color } from "react-native-reanimated";
import colors from "../config/colors";
import AppText from "./AppText";
import Swipeable from "react-native-gesture-handler/Swipeable";
function ListItem({
  title,
  subtitle,
  image,
  IconComponent,
  onPress,
  renderRightActions,
}) {
  return (
    <Swipeable renderRightActions={renderRightActions}>
      <TouchableHighlight underlayColor={colors.light} onPress={onPress}>
        <View style={styles.container}>
          {IconComponent }
          {image && <Image style={styles.image} source={image} />}
          <View style={styles.secondCont}>
            <AppText style={styles.title}>{title}</AppText>
            {subtitle&&<AppText style={styles.subtitle}>{subtitle}</AppText>}
          </View>
        </View>
      </TouchableHighlight>
    </Swipeable>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    padding: 14,
    backgroundColor:colors.white
  },
  image: {
    width: 70,
    height: 70,
    borderRadius: 35,
    
  },
  secondCont: {
    flexDirection: "column",
    marginLeft:10,
    justifyContent:"center"

  },
  title: {
    fontWeight: "600",
  },
  subtitle: {
    color: "grey",
  },
});

export default ListItem;
