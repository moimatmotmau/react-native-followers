import React from "react";
import { useNavigation } from "@react-navigation/native";

import styled from "styled-components/native";
import { ShareButton, ShareInput } from "../../components";
import { StaticColors } from "../../theme";
import { ArrowRight } from "../../assets";
import { Routes } from "../../constaint";

type Props = {};

export const ForgotPassword = (props: Props) => {
  const navigation = useNavigation();

  return (
    <Style.View>
      <Style.Title>Forgot Password</Style.Title>
      <Style.Text>
        Enter your email and we’ll send the instruction to you
      </Style.Text>
      <Style.Form>
        <Style.Input placehoder="Your Email" label="Email" />
        <Style.ButtonWrap>
          <Style.SubmitBtn
            text="Submit"
            textColor={StaticColors.white}
            suffixIcon={<ArrowRight />}
            onPress={() => navigation.navigate(Routes.VERIFICATION)}
          />
        </Style.ButtonWrap>
        <Style.ButtonWrap>
          <Style.BackBtn
            text="Back to login"
            onPress={() => navigation.navigate(Routes.LOGIN)}
          />
        </Style.ButtonWrap>
      </Style.Form>
    </Style.View>
  );
};

const Style = {
  View: styled.View`
    flex: 1;
    align-items: center;
    justify-content: center;
    background-color: ${StaticColors.white};
    padding: 0 20px;
  `,
  Title: styled.Text`
    font-size: 28px;
    font-weight: bold;
    margin-bottom: 6px;
    color: ${StaticColors.text};
  `,
  Text: styled.Text`
    font-size: 14px;
    color: ${StaticColors.label};
    text-align: center;
  `,
  Form: styled.View`
    width: 100%;
    margin-top: 25px;
  `,
  Input: styled(ShareInput)`
    margin-bottom: 30px;
  `,
  ButtonWrap: styled.View`
    width: 100%;
    height: 54px;
    margin-bottom: 15px;
  `,
  SubmitBtn: styled(ShareButton)``,
  BackBtn: styled(ShareButton)`
    background-color: ${StaticColors.white};
    border: 1px solid ${StaticColors.dark};
  `,
};
