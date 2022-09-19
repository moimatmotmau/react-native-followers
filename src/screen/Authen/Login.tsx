import React from "react";
import { useFormik } from "formik";

import { useNavigation } from "@react-navigation/native";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";

import styled from "styled-components/native";
import { Logo } from "../../assets/Logo";
import { ShareButton, ShareInput } from "../../components";
import { StaticColors } from "../../theme";
import { Routes } from "../../constaint";
import { LoginSchema } from "../../validation";

type Props = {};
interface ILoginValues {
  email: string;
  password: string;
}

export const Login = (props: Props) => {
  const navigation = useNavigation();

  const initialValues = {
    email: "d@gmail.com",
    password: "123456",
  };

  const {
    values,
    errors,
    touched,
    isSubmitting,
    handleChange,
    handleBlur,
    resetForm,
    setFieldTouched,
    handleSubmit,
  } = useFormik({
    initialValues,
    validationSchema: LoginSchema,
    onSubmit: (values: ILoginValues) => {
      navigation.navigate(Routes.PERSION_INTRO_STEP_FIRST);
    },
  });

  return (
    <KeyboardAwareScrollView style={{ width: "100%" }} enableOnAndroid>
      <Style.Container>
        <Style.Logo />
        <Style.Content>
          <Style.Title>Login</Style.Title>
          <Style.Form>
            <Style.Input
              placehoder="Your email"
              label="Email"
              name="email"
              value={values.email}
              error={errors?.email}
              touch={touched?.email}
              onChangeText={handleChange("email")}
              onBlur={() => setFieldTouched("email")}
            />

            <Style.Input
              placehoder="Password"
              label="Password"
              name="password"
              value={values.password}
              error={errors?.password}
              touch={touched?.password}
              onChangeText={handleChange("password")}
              onBlur={handleBlur("password")}
              secureTextEntry
            />
            <Style.Text
              onPress={() => navigation.navigate(Routes.FORGOT_PASSWORD)}
            >
              Forgot password?
            </Style.Text>
            <Style.ButtonWrap>
              <Style.Button
                text="Login"
                textColor={StaticColors.white}
                onPress={handleSubmit}
              />
            </Style.ButtonWrap>
            <Style.TextOpionWrap>
              <Style.TextOption>
                Don't have an account?{" "}
                <Style.TextOption
                  color={StaticColors.primaryButton}
                  fontWeight="bold"
                  onPress={() => navigation.navigate(Routes.REGISTER)}
                >
                  Register
                </Style.TextOption>
              </Style.TextOption>
            </Style.TextOpionWrap>
          </Style.Form>
        </Style.Content>
      </Style.Container>
    </KeyboardAwareScrollView>
  );
};

const Style = {
  Container: styled.View`
    margin-top: 25%;
    flex: 1;
    width: 100%;
    padding: 0 20px;
    align-items: center;
  `,
  Logo: styled(Logo)`
    margin-bottom: 65px;
  `,
  Content: styled.View`
    width: 100%;
    height: 100%;
  `,
  Title: styled.Text`
    color: ${StaticColors.title};
    font-size: 28px;
    font-weight: bold;
    text-align: center;
  `,
  Form: styled.View`
    flex: 1;
  `,
  Input: styled(ShareInput)``,
  Text: styled.Text`
    color: ${StaticColors.label};
    text-align: right;
  `,
  ButtonWrap: styled.View`
    width: 100%;
    height: 56px;
    margin: 20px 0;
  `,
  Button: styled(ShareButton)`
    background-color: ${StaticColors.primaryButton};
  `,
  TextOpionWrap: styled.View`
    margin-bottom: 20px;
  `,
  TextOption: styled.Text<{ color?: string; fontWeight?: string }>`
    color: ${({ color }) => color || StaticColors.dark};
    font-weight: ${({ fontWeight }) => fontWeight || "400"};
    font-size: 16px;
    text-align: center;
  `,
};
