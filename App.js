import React, { useState, useEffect } from "react";
import { Image } from "react-native";
import Screen from "./app/components/Screen";
import AppButton from "./app/components/AppButton";
import * as ImagePicker from "expo-image-picker";
import ImageInput from "./app/components/ImageInput";

const categories = [
  { label: "Furniture", value: 1 },
  { label: "Clothing", value: 2 },
  { label: "Cameras", value: 3 },
];

export default function App() {
  const [imageUri, setImageUri] = useState();

  const requestPermission = async () => {
    const { granted } = await ImagePicker.requestMediaLibraryPermissionsAsync();
    if (!granted) alert("Enable permission to access the library");
  };

  useEffect(() => {
    requestPermission();
  }, []);

  const selectImage = async () => {
    try {
      const res = await ImagePicker.launchImageLibraryAsync();
      console.log(res);
      if (!res.cancelled) {
        setImageUri(res.uri);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Screen>
      <ImageInput
        imageUri={imageUri}
        onChangeImage={(uri) => setImageUri(uri)}
      />
    </Screen>
  );
}
