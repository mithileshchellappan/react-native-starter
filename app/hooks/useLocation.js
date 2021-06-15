import * as Location from "expo-location";
import { useEffect, useState } from "react";
const useLocation = () => {
  const [location, setlocation] = useState();

  try {
    const getLocation = async () => {
      const { granted } = await Location.requestForegroundPermissionsAsync();
      if (!granted) return;
      const {
        coords: { latitude, longitude },
      } = await Location.getLastKnownPositionAsync();
      setlocation({ latitude, longitude });
    };
    useEffect(() => {
        getLocation();
      }, []);
  } catch (error) {
    console.log(error);
  }

  

  return location;
};

export default useLocation
