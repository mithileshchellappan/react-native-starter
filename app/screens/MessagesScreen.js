import React from "react";
import { View, FlatList, StyleSheet, SafeAreaView } from "react-native";
import ListItem from "../components/ListItem";
import Constants from "expo-constants";
import Screen from "../components/Screen";
import ListItemSeparator from "../components/ListItemSeparator";
import ListItemDeleteAction from "../components/ListItemDeleteAction";

const messages = [
  {
    id: 1,
    title: "t1",
    description: "D1",
    image: require("../assets/person.jpg"),
  },
  {
    id: 2,
    title: "t2",
    description: "D2",
    image: require("../assets/person.jpg"),
  },
];

function MessagesScreen() {

    const handleDelete = message=>{
        
    }

  return (
    <Screen>
      <FlatList
        data={messages}
        keyExtractor={(message) => message.id.toString()}
        ItemSeparatorComponent={() => <ListItemSeparator />}
        renderItem={({ item }) => (
          <ListItem
            title={item.title}
            subtitle={item.description}
            image={item.image}
            onPress={() => {
              console.log("Message", item);
            }}
            renderRightActions={() => (
              <ListItemDeleteAction onPress={() => console.log("object")} />
            )}
          />
        )}
      />
    </Screen>
  );
}
const styles = StyleSheet.create({});
export default MessagesScreen;
