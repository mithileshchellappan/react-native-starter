import React from "react";
import { Text } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import Screen from "./app/components/Screen";
import { NavigationContainer, useNavigation } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import ListingEditScreen from "./app/screens/ListingEditScreen";
import WelcomeScreen from "./app/screens/WelcomeScreen";
import AppButton from "./app/components/AppButton";

const Link = () => {
  const navigation = useNavigation();

  return (
    <AppButton
      title="click"
      onPress={() => navigation.navigate("TweetDetails")}
    />
  );
};

const Tweets = ({ navigation }) => (
  <Screen>
    <Text>Tweet </Text>
    <AppButton
      title="View Tweet"
      onPress={() => navigation.navigate("TweetDetails", { id: "1" })}
    />
  </Screen>
);

const Tab = createBottomTabNavigator();
const TabNavigator = () => (
  <Tab.Navigator>
    <Tab.Screen name="Feed" component={Tweets} />
    <Tab.Screen name="Tweet Details" component={TweetDetails} />
  </Tab.Navigator>
);

const TweetDetails = ({ route }) => (
  <Screen>
    <Text>Tweet Details </Text>
  </Screen>
);

const Stack = createStackNavigator();
const StackNavigator = () => (
  <Stack.Navigator
    initialRouteName="Tweets"
    screenOptions={{
      headerStyle: { backgroundColor: "tomato" },
      headerTintColor: "white",
    }}
  >
    <Stack.Screen
      name="Tweets"
      component={Tweets}
      options={{
        headerStyle: { backgroundColor: "dodgerblue" },
        headerTintColor: "white",
        headerShown: true,
      }}
    />
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
