import React from "react";
import { Appbar } from "react-native-paper";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import { View, Text } from "react-native";
import AppText from "./app/components/AppText";
import AppButton from "./app/components/AppButton";
import WelcomeScreen from "./app/screens/WelcomeScreen";
import Card from './app/components/Card'
import ListingDetailScreen from "./app/screens/ListingDetailScreen";
import ViewImageScreen from "./app/screens/ViewImageScreen";
import MessagesScreen from "./app/screens/MessagesScreen";
export default function App() {
  return (
    
      <MessagesScreen/>
    
  );
}
