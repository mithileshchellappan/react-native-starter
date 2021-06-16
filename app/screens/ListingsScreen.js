import React from "react";
import { FlatList, StyleSheet } from "react-native";
import { TouchableWithoutFeedback } from "react-native-gesture-handler";
import Card from "../components/Card";
import Screen from "../components/Screen";
import colors from "../config/colors";
import routes from "../navigation/routes";

const listings = [
  {
    id: 1,
    title: "Redder",
    price: 100,
    image: require("../assets/jacket.jpg"),
  },
  {
    id: 2,
    title: "Awesome Couch ",
    price: 1000,
    image: require("../assets/couch.jpg"),
  },
];

function ListingsScreen({ navigation }) {
  console.log("navigation", navigation);
  return (
    <Screen style={styles.screen}>
      <FlatList
        data={listings}
        keyExtractor={(listing) => listing.id.toString()}
        renderItem={({ item }) => (
          <Card
            onPress={() =>
              navigation.navigate(routes.LISTING_DETAILS, {
                item,
              })
            }
            title={item.title}
            subTitle={"$" + item.price}
            image={item.image}
          />
        )}
      />
    </Screen>
  );
}
const styles = StyleSheet.create({
  screen: {
    padding: 15,
    backgroundColor: colors.light,
  },
});
export default ListingsScreen;
