import React from "react";
import { useFormikContext } from "formik";

import AppPicker from "./AppPicker";
import ErrorMessage from "./ErrorMessage";

function AppFormPicker({ items, name,PickerItemComponent, placeholder,width,numberOfColumns }) {
  const { errors, setFieldValue, touched, values } = useFormikContext();
  return (
    <>
      <AppPicker
        items={items}
        onSelectItem={(item) => setFieldValue(name, item)}
        placeholder={placeholder}
        PickerItemComponent={PickerItemComponent}
        selectedItem={values[name]}
        width={width}
        numberOfColumns={numberOfColumns}
      >
        <ErrorMessage error={errors[name]} visible={touched[name]} />
      </AppPicker>
    </>
  );
}

export default AppFormPicker; 
