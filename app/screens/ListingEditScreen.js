import React, { useEffect, useState } from "react";

import * as Yup from "yup";
import Screen from "../components/Screen";
import AppForm from "../components/forms/AppForm";
import AppFormField from "../components/AppFormField";
import AppFormPicker from "../components/AppFormPicker";
import SubmitButton from "../components/SubmitButton";

import AppFormImagePicker from "../components/AppFormImagePicker";
import listingsApi from "../api/listings";
import useLocation from "../hooks/useLocation";
import colors from "../config/colors";

const validationSchema = Yup.object().shape({
  title: Yup.string().required().min(1).label("Title"),
  price: Yup.number().required().min(1).max(10000).label("Price"),
  description: Yup.string().label("Description"),
  category: Yup.object().required().nullable().label("Category"),
  images: Yup.array(),
});

const categories = [
  { label: "Furniture", value: 1, backgroundColor: "red", icon: "apps" },
  { label: "GPU", value: 2, backgroundColor: "green", icon: "email" },
  { label: "Camera", value: 3, backgroundColor: "blue", icon: "lock" },
];
function ListingEditScreen() {
  const location = useLocation();
  const handleSubmit = async (listing) => {
    const result = await listingsApi.addListing({ ...listing, location },
      progress=>console.log(progress)
      );
    if(!result.ok){
      return alert('Could not add listing')
    }
    alert('Success')
  };

  return (
    <Screen style={{ backgroundColor: colors.light }}>
      <AppForm
        initialValues={{
          title: "",
          price: "",
          description: "",
          category: null,
          images: [],
        }}
        onSubmit={handleSubmit}
        validationSchema={validationSchema}
      >
        <AppFormImagePicker name="images" />
        <AppFormField maxLength={255} name="title" placeholder="Title" />
        <AppFormField
          keyboardType="numeric"
          maxLength={8}
          name="price"
          placeholder="Price"
        />
        <AppFormPicker
          items={categories}
          name="category"
          placeholder="Category"
          width="50%"
        />
        <AppFormField
          maxLength={600}
          multiline
          name="description"
          numberOfLines={3}
          placeholder="Description"
        />
        <SubmitButton title="Post" />
      </AppForm>
    </Screen>
  );
}

export default ListingEditScreen;
