import * as Notifications from "expo-notifications";
import * as Permissions from "expo-permissions";
import React, { useEffect } from "react";
import auth from "../api/auth";

export default useNotifications = (notificationListener) => {
  useEffect(() => {
    registerForPushNotfications();
    if (notificationListener) {
      Notifications.addPushTokenListener(notificationListener);
    }
  }, []);

  const registerForPushNotfications = async () => {
    try {
      const permission = await Permissions.askAsync(Permissions.NOTIFICATIONS);
      if (!permission.granted) return;

      const token = await Notifications.getExpoPushTokenAsync();
      console.log(token.data);
      auth.registerToken(token.data);
    } catch (error) {
      console.log(error);
    }
  };
};
