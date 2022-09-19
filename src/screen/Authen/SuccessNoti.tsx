import React from "react";
import { useNavigation } from "@react-navigation/native";
import styled from "styled-components/native";
import { CheckedIcon } from "../../assets";
import { ShareButton, ShareText } from "../../components";
import { StaticColors } from "../../theme";
import { Routes } from "../../constaint";

type Props = {};

export const SuccessNoti = (props: Props) => {
  const navigation = useNavigation();
  return (
    <Style.View>
      <CheckedIcon />
      <Style.Text
        label="Your password has been reset successfully!"
        color={StaticColors.label}
      />
      <Style.Button
        text="Back to Login"
        onPress={() => navigation.navigate(Routes.LOGIN)}
      />
    </Style.View>
  );
};

const Style = {
  View: styled.View`
    flex: 1;
    align-items: center;
    justify-content: center;
    padding: 0 20px;
  `,
  Text: styled(ShareText)`
    font-size: 18px;
    text-align: center;
    line-height: 25px;
    font-weight: lighter;
    margin: 20px 0 40px 0;
  `,
  Button: styled(ShareButton)`
    border: 1px solid ${StaticColors.dark};
    background-color: ${StaticColors.white};
    height: 56px;
  `,
};
