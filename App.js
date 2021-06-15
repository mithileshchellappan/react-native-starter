import React, { useState, useEffect } from "react";
import { Image } from "react-native";
import Screen from "./app/components/Screen";
import AppButton from "./app/components/AppButton";
import * as ImagePicker from "expo-image-picker";
import ImageInput from "./app/components/ImageInput";
import ImageInputList from "./app/components/ImageInputList";
import { set } from "react-native-reanimated";
import ListingEditScreen from "./app/screens/ListingEditScreen";

const categories = [
  { label: "Furniture", value: 1 },
  { label: "Clothing", value: 2 },
  { label: "Cameras", value: 3 },
];

export default function App() {
  return <ListingEditScreen />;
}
