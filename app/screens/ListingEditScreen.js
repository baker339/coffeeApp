import React from "react";
import { StyleSheet } from "react-native";
import * as Yup from "yup";

import {
  AppForm,
  AppFormField,
  AppFormPicker,
  AppSubmitButton,
} from "../components/forms";
import Screen from "../components/Screen";
import CategoryPickerItem from "../components/CategoryPickerItem";
import defaultStyles from "../config/styles";
import FormImagePicker from "../components/FormImagePicker";
import useLocation from "../hooks/useLocation";
import listingsApi from "../api/listing";

const validationSchema = Yup.object().shape({
  title: Yup.string().required().min(1).label("Title"),
  price: Yup.number().required().min(1).max(10000).label("Price"),
  description: Yup.string().label("Description"),
  category: Yup.object().required().nullable().label("Category"),
  images: Yup.array().min(1, "Please select at least one image"),
});

const categories = [
  {
    label: "Coffee",
    value: 1,
    backgroundColor: defaultStyles.colors.primary,
    icon: "coffee",
  },
  {
    label: "Cafe",
    value: 2,
    backgroundColor: defaultStyles.colors.secondary,
    icon: "store",
  },
  {
    label: "Food",
    value: 3,
    backgroundColor: defaultStyles.colors.primary,
    icon: "food",
  },
];

function ListingEditScreen(props) {
  const location = useLocation();

  const handleSubmit = async (listing) => {
    const result = await listingsApi.addListing({ ...listing, location });
    if (!result) {
      return alert("Could not save the listing");
    }
    alert("Success");
  };

  return (
    <Screen style={styles.container}>
      <AppForm
        intitialValues={{
          title: "",
          price: "",
          description: "",
          category: null,
          images: [],
        }}
        onSubmit={handleSubmit}
        validationSchema={validationSchema}
      >
        <FormImagePicker name="images" />
        <AppFormField maxLength={255} name="title" placeholder="Title" />
        <AppFormField
          keyboardType="numeric"
          maxLength={8}
          name="price"
          placeholder="Price"
          width={120}
        />
        <AppFormPicker
          items={categories}
          name="category"
          numberOfColumns={3}
          PickerItemComponent={CategoryPickerItem}
          placeholder="Category"
          width="50%"
        />
        <AppFormField
          maxLength={255}
          multiline
          name="description"
          numberOfLines={3}
          placeholder="Description"
        />
        <AppSubmitButton title="post" />
      </AppForm>
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default ListingEditScreen;
