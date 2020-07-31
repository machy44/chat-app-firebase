import * as Yup from "yup";

export const loginValidation = Yup.object().shape({
  name: Yup.string()
    .min(2, "Your name is too short")
    .required("Please enter your full name"),
  email: Yup.string()
    .email("The email is incorrect")
    .required("Please enter your email"),
});
