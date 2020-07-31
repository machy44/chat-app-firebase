import React from "react";
import { Formik, Field, Form } from "formik";

import { loginValidation } from "../../../utils";

const Login = () => {
  return (
    <Formik
      initialValues={{ name: "", email: "" }}
      validationSchema={loginValidation}
      onSubmit={async (values) => {
        await new Promise((resolve) => setTimeout(resolve, 500));
        alert(JSON.stringify(values, null, 2));
      }}
    >
      <Form>
        <Field name="name" type="text" />
        <Field name="email" type="email" />
        <button type="submit">Submit</button>
      </Form>
    </Formik>
  );
};

export default Login;
