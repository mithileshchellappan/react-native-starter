import React from "react";
import { FlatList } from "react-native";
import ListItem from "../components/ListItem";

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
  return (
    <FlatList
      data={messages}
      keyExtractor={(message) => message.id.toString()}
      renderItem={({ item }) => (
        <ListItem
          title={item.title}
          subtitle={item.description}
          image={item.image}
        />
      )}
    />
  );
}

export default MessagesScreen;
