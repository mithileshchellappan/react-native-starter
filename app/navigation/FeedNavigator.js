import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
import ListingDetailScreen from "../screens/ListingDetailScreen";
import ListingsScreen from "../screens/ListingsScreen";
import routes from "./routes";

const Stack = createStackNavigator();

const FeedNavigator = ()=>(
    <Stack.Navigator
    headerMode="float"
    mode="card"
    initialRouteName={routes.FEED_SCREEN}
    screenOptions={{
      headerShown: false,
    }}
  >
    <Stack.Screen
      name={routes.FEED_SCREEN}
      component={ListingsScreen}
      
    />
    <Stack.Screen name={routes.LISTING_DETAILS} component={ListingDetailScreen} />
    </Stack.Navigator>
)

export default FeedNavigator