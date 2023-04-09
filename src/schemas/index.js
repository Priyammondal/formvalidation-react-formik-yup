import * as yup from "yup";

const passwordRules = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{5,}$/;

export const registrationSchema = yup.object().shape({
  name: yup
    .string()
    .min(3, "Username must be at least 3 characters long")
    .required("Required"),
  email: yup.string().email("Please enter a valid email").required("Required"),
  password: yup
    .string()
    .min(5)
    .matches(passwordRules, { message: "Please create a stronger password" })
    .required("Required"),
  confirm_password: yup
    .string()
    .oneOf([yup.ref("password"), null], "Passwords must match")
    .required("Required"),
  terms: yup.boolean().oneOf([true], "Please accept the terms of service"),
  age: yup.number().positive().integer().required("Required"),
  jobtitle: yup
    .string()
    .oneOf(
      ["QA", "seo", "softwareEngineer", "contentwriter", "graphic"],
      "Invalid Job Type"
    )
    .required("Required"),
  gender: yup.string().oneOf(["male", "female", "other"]).required("Required"),
});
