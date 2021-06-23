import React from "react";
import { StyleSheet } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import AccountScreen from "../screens/AccountScreen";
import ListingEditScreen from "../screens/ListingEditScreen";
import ListingsScreen from "../screens/ListingsScreen";
import FeedNavigator from "./FeedNavigator";
import AccountNavigator from "./AccountNavigator";
import NewListingButton from "./NewListingButton";
import routes from "./routes";
import useNotification from "../hooks/useNotification";

const Tab = createBottomTabNavigator();

const AppNavigator = () => {
  useNotification(notificationHandler);

  const notificationHandler = (notification)=>
  {
    console.log(notification)
  }

  return (
    <Tab.Navigator
      tabBarOptions={{
        activeBackgroundColor: "white",
        activeTintColor: "red",
        inactiveBackgroundColor: "white",
        inactiveTintColor: "gray",
      }}
    >
      <Tab.Screen
        name={routes.FEED_SCREEN}
        component={FeedNavigator}
        options={{
          tabBarIcon: ({ size, color }) => (
            <MaterialCommunityIcons name="home" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name={routes.LISTING_EDIT_SCREEN}
        component={ListingEditScreen}
        options={({ navigation }) => ({
          title: "Add",
          showLabel: false,
          activeTintColor: "white",
          inactiveTintColor: "white",
          tabBarButton: () => (
            <NewListingButton
              onPress={() => navigation.navigate(routes.LISTING_EDIT_SCREEN)}
            />
          ),
          tabBarIcon: ({ size, color }) => (
            <MaterialCommunityIcons
              name="plus-circle"
              size={size}
              color={color}
            />
          ),
        })}
      />
      <Tab.Screen
        name={routes.ACCOUNT_SCREEN}
        component={AccountNavigator}
        options={{
          tabBarIcon: ({ size, color }) => (
            <MaterialCommunityIcons name="account" size={size} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};
const styles = StyleSheet.create({
  container: {},
});
export default AppNavigator;
