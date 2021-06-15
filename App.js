import React, { Text } from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Screen from "./app/components/Screen";
import { NavigationContainer } from "@react-navigation/native";
import ListingEditScreen from "./app/screens/ListingEditScreen";
import WelcomeScreen from './app/screens/WelcomeScreen'
const Tweets = () => (
  <Screen>
    <ListingEditScreen />
  </Screen>
);

const TweetDetails = () => (
  <Screen>
    <WelcomeScreen/>
  </Screen>
);

const Stack = createStackNavigator();
const StackNavigator = () => (
  <Stack.Navigator initialRouteName="TweetDetails">
    <Stack.Screen name="Tweets" component={Tweets} />
    <Stack.Screen name="TweetDetails" component={TweetDetails} />
  </Stack.Navigator>
);

export default function App() {
  return (
    <NavigationContainer>
      <StackNavigator />
    </NavigationContainer>
  );
}
