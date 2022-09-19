import { useFormik } from "formik";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import styled from "styled-components/native";

import { ShareButton, ShareInput, ShareText } from "../../components";
import { StaticColors } from "../../theme";
import { ResetPasswordSchema } from "../../validation";
import { Routes } from "../../constaint";

type Props = {};

interface IValues {
  password: string;
  confirmPassword: string;
}

export const ResetPassword = (props: Props) => {
  const navigation = useNavigation();

  const initialValues = {
    password: "",
    confirmPassword: "",
  };

  const { values, touched, errors, handleBlur, handleSubmit, handleChange } =
    useFormik({
      initialValues,
      validationSchema: ResetPasswordSchema,
      onSubmit: (values: IValues) => {
        alert(values.password + values.confirmPassword);
      },
    });

  return (
    <Style.View>
      <ShareText label="Reset Password" />
      <Style.InputWrap>
        <ShareInput
          label="New password"
          placehoder="Enter your Password"
          secureTextEntry
          value={values.password}
          touch={touched?.password}
          error={errors?.password}
          onBlur={handleBlur("password")}
          onChangeText={handleChange("password")}
          style={{ marginBottom: 10 }}
        />
        <ShareInput
          value={values.confirmPassword}
          touch={touched?.confirmPassword}
          error={errors?.confirmPassword}
          onBlur={handleBlur("confirmPasword")}
          onChangeText={handleChange("confirmPassword")}
          label="Confirm New Password"
          secureTextEntry
          placehoder="Enter your Password again"
        />
      </Style.InputWrap>
      <Style.ButtonWrap>
        <Style.Button
          text="Reset"
          textColor={StaticColors.white}
          onPress={handleSubmit}
        />
        <Style.Button
          bgColor={StaticColors.white}
          text="Back to Login"
          border
          onPress={() => navigation.navigate(Routes.LOGIN as never)}
        />
      </Style.ButtonWrap>
    </Style.View>
  );
};

const Style = {
  View: styled.View`
    flex: 1;
    padding: 0 20px;
    align-items: center;
    justify-content: center;
  `,
  InputWrap: styled.View`
    width: 100%;
    margin-top: 15px;
  `,
  ButtonWrap: styled.View`
    width: 100%;
  `,
  Button: styled(ShareButton)<{ bgColor?: string; border?: boolean }>`
    height: 56px;
    margin-bottom: 15px;
    background-color: ${({ bgColor }) => bgColor || StaticColors.primaryButton};
    border: ${({ border }) =>
      border ? `1px solid ${StaticColors.dark}` : "none"};
  `,
};
