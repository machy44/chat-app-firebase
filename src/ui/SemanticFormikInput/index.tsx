import React from "react";
import { Form, Input } from "semantic-ui-react";
import { FieldProps } from "formik";

export const SemanticFormikInputField: React.FC<
  FieldProps & { label: string }
> = ({ field: { name, value }, form: { setFieldValue }, label, ...props }) => {
  return (
    <Form.Field>
      <label>{label}</label>
      <Input
        type="text"
        value={value}
        onChange={(event) => {
          setFieldValue(name, event.target.value);
        }}
        {...props}
      />
    </Form.Field>
  );
};
