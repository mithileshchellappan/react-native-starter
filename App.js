import React from "react";
import { NavigationContainer, useNavigation } from "@react-navigation/native";
import navigationtheme from "./app/navigation/navigationtheme";
import AppNavigator from "./app/navigation/AppNavigator";
import { AsyncStorage } from "react-native";
import NetInfo,{useNetInfo} from '@react-native-community/netinfo'

export default function App() {
 const netInfo = useNetInfo();
  const demo = async () => {
    try {
      await AsyncStorage.setItem("person", JSON.stringify({ id: 1 }));
      const value = await AsyncStorage.getItem('person')
      console.log(JSON.parse(value))
    } catch (error) {
      console.log(error)
    }
  };
  demo()
  return (
    <NavigationContainer theme={navigationtheme}>
      <AppNavigator />
    </NavigationContainer>
  );
}
