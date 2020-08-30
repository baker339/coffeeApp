import React from "react";
import { Formik } from "formik";

function AppForm({ intitialValues, onSubmit, validationSchema, children }) {
  return (
    <Formik
      initialValues={intitialValues}
      onSubmit={onSubmit}
      validationSchema={validationSchema}
    >
      {() => <>{children}</>}
    </Formik>
  );
}

export default AppForm;
