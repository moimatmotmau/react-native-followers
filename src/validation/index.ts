import * as yup from "yup";

const REQUIRED_MESSAGE = ":name is required";

export const LoginSchema = yup.object().shape({
  email: yup
    .string()
    .required(REQUIRED_MESSAGE.replace(":name", "Email"))
    .test("Email", "This field must be email", (value: any) => {
      const regexEmail = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
      return regexEmail.test(value);
    }),
  password: yup
    .string()
    .required(REQUIRED_MESSAGE.replace(":name", "Password"))
    .min(6, "Password at least 6 characters"),
});

export const RegisterSchema = LoginSchema.shape({
  youtube: yup.string(),
  instagram: yup.string(),
  twitter: yup.string(),
  facebook: yup.string(),
  whatsapp: yup.string(),
  introductionCode: yup.string(),
});

export const ResetPasswordSchema = yup.object().shape({
  password: yup
    .string()
    .required(REQUIRED_MESSAGE.replace(":name", "Password"))
    .min(6, "Password at least 6 characters"),
  confirmPassword: yup
    .string()
    .required(REQUIRED_MESSAGE.replace(":name", "Confirm password"))
    .oneOf([yup.ref("password"), null], "password not match"),
});

export const AddressSchema = yup.object().shape({
  socialMedia: yup
    .string()
    .required(REQUIRED_MESSAGE.replace(":name", "Social Media")),
  address: yup
    .string()
    .required(REQUIRED_MESSAGE.replace(":name", "Address"))
    .test("Email", "This field must be email", (value: any) => {
      const regexEmail = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
      return regexEmail.test(value);
    }),
  arrayAddress: yup.array().of(
    yup.object().shape({
      address: yup
        .string()
        .required(REQUIRED_MESSAGE.replace(":name", "Address")),
    })
  ),
});

export const ProfileSchema = yup.object().shape({
  image: yup.string(),
  profession: yup
    .string()
    .required(REQUIRED_MESSAGE.replace(":name", "Profession")),
  gender: yup.string().required(REQUIRED_MESSAGE.replace(":name", "Gender")),
  birthYear: yup
    .string()
    .required(REQUIRED_MESSAGE.replace(":name", "Birth Year")),
  introduction: yup.string(),
});
