import React from "react";
import { View, StyleSheet } from "react-native";
import AppText from "../components/AppText";
import ListItem from "../components/ListItem";
import { Image } from "react-native-expo-image-cache";
import colors from "../config/colors";

function ListingDetailScreen({ route }) {
  console.log(route.params.item);
  const item = route.params.item;
  return (
    <View>
      <Image
        style={styles.image}
        uri={item.images[0].url}
        preview={{ uri: item.images[0].thumbnailUrl }}
        tint="light"
      />
      <View style={styles.detailsContainer}>
        <AppText style={styles.title}>{item.title}</AppText>
        <AppText style={styles.price}>${item.price}</AppText>
        <View style={styles.usercontainer}>
          <ListItem
            image={item.images[0].thumbnailUrl}
            title={item.title}
            subtitle="69 listings"
          />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  detailsContainer: {
    padding: 20,
  },
  image: {
    width: "100%",
    height: 300,
  },
  title: {
    fontSize: 24,
    fontWeight: "500",
  },
  price: {
    color: colors.secondary,
    fontWeight: "bold",
    fontSize: 20,
    marginVertical: 10,
  },
  usercontainer: {
    marginVertical: 30,
  },
});

export default ListingDetailScreen;
