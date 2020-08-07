import React from "react";
import { Formik, Field, Form } from "formik";
import { SemanticFormikInputField } from "../../../ui/SemanticFormikInput";

import { loginValidation } from "../../../utils";

const Login = () => {
  return (
    <>
      <h1>Login to chat</h1>
      <Formik
        initialValues={{ email: "", password: "" }}
        // validationSchema={loginValidation}
        onSubmit={async (values) => {
          debugger;
          await new Promise((resolve) => setTimeout(resolve, 500));
          alert(JSON.stringify(values, null, 2));
        }}
      >
        <Form>
          <Field
            name="email"
            type="email"
            label="email"
            component={SemanticFormikInputField}
          />
          <Field
            name="password"
            type="password"
            label="password"
            component={SemanticFormikInputField}
          />
          <button type="submit">Submit</button>
        </Form>
      </Formik>
    </>
  );
};

export default Login;
