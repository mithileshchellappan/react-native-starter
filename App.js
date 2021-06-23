import React, { useState } from "react";
import { NavigationContainer, useNavigation } from "@react-navigation/native";
import navigationtheme from "./app/navigation/navigationtheme";
import AppNavigator from "./app/navigation/AppNavigator";
import AppLoading from "expo-app-loading";
import OfflineNotice from "./app/components/OfflineNotice";
import AuthNavigator from "./app/navigation/AuthNavigator";
import AuthContext from "./app/auth/context";
import authStorage from "./app/auth/storage";
import jwtDecode from "jwt-decode";
import { navigationRef } from "./app/navigation/rootNavigation";

export default function App() {
  const [user, setuser] = useState();

  const [isReady, setIsReady] = useState(false);

  const restoreUser = async () => {
    const user = await authStorage.getUser();
    if (user) setuser(user);
  };
  if (!isReady)
    return (
      <AppLoading
        startAsync={restoreUser}
        onFinish={() => setIsReady(true)}
        onError={(error) => {
          console.log(error);
        }}
      />
    );
  
  return (
    <AuthContext.Provider value={{ user, setuser }}>
      <OfflineNotice />
      <NavigationContainer ref={navigationRef} theme={navigationtheme}>
        {/* <AppNavigator /> */}
        {user ? <AppNavigator /> : <AuthNavigator />}
      </NavigationContainer>
    </AuthContext.Provider>
  );
}
