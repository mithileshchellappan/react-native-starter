import React, { useState } from "react";
import { Appbar, TextInput } from "react-native-paper";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import { View, Text } from "react-native";
import AppText from "./app/components/AppText";
import AppButton from "./app/components/AppButton";
import WelcomeScreen from "./app/screens/WelcomeScreen";
import Card from "./app/components/Card";
import ListingDetailScreen from "./app/screens/ListingDetailScreen";
import ViewImageScreen from "./app/screens/ViewImageScreen";
import MessagesScreen from "./app/screens/MessagesScreen";
import Screen from "./app/components/Screen";
import Icon from "./app/components/Icon";
import ListItem from "./app/components/ListItem";
import AccountScreen from "./app/screens/AccountScreen";
import ListingsScreen from "./app/screens/ListingsScreen";
export default function App() {
  const [firstName, setfirstName] = useState("");

  return (
    <Screen>
      <TextInput
        secureTextEntry
        placeholder="First Name"
        style={{
          borderBottomColor: "#ccc",
          borderBottomWidth: 1,
        }}
        onChangeText={(text) => setfirstName(text)}
      />
      <Text>{firstName}</Text>
    </Screen>
  );
}
