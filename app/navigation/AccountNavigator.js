import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
import AccountScreen from "../screens/AccountScreen";
import MessagesScreen from "../screens/MessagesScreen";
import routes from "./routes";
const Stack = createStackNavigator();
const AccountNavigator = () => (
  <Stack.Navigator
    initialRouteName={routes.ACCOUNT_SCREEN}
   
  >
    <Stack.Screen name={routes.ACCOUNT_SCREEN} component={AccountScreen} options={{headerShown:false}} />
    <Stack.Screen name={routes.MESSAGES_SCREEN} component={MessagesScreen} />
  </Stack.Navigator>
);

export default AccountNavigator;
