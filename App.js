import React from "react";
import { NavigationContainer, useNavigation } from "@react-navigation/native";
import navigationtheme from "./app/navigation/navigationtheme";
import AppNavigator from "./app/navigation/AppNavigator";

export default function App() {
  return (
    <NavigationContainer theme={navigationtheme}>
      <AppNavigator />
    </NavigationContainer>
  );
}
