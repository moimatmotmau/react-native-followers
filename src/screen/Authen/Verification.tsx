import React, { useState } from "react";
import { StyleSheet } from "react-native";
import OTPInputView from "@twotalltotems/react-native-otp-input";
import styled from "styled-components/native";
import { ShareButton, ShareText } from "../../components";
import { StaticColors } from "../../theme";
import { ArrowRight } from "../../assets";
import { useNavigation } from "@react-navigation/native";
import { Routes } from "../../constaint";

type Props = {};

export const Verification = (props: Props) => {
  const [otp, setOtp] = useState("");

  const natigation = useNavigation();

  const handleVerifi = () => {
    if (otp) {
      natigation.navigate(Routes.RESET_PASSWORD);
    } else {
      return;
    }
  };

  return (
    <Style.View>
      <ShareText
        label="Verification Code"
        color={StaticColors.dark}
        fontWeight={600}
      />
      <ShareText
        label="Enter the OTP code from the phone we just sent you."
        fontSize="14px"
        fontWeight={400}
        style={{ textAlign: "center" }}
        color={StaticColors.label}
      />

      <OTPInputView
        style={{ width: "80%", height: 200 }}
        pinCount={4}
        keyboardAppearance="dark"
        autoFocusOnLoad={false}
        codeInputFieldStyle={styles.underlineStyleBase}
        codeInputHighlightStyle={styles.underlineStyleHighLighted}
        onCodeFilled={(code: any) => {
          setOtp(code);
        }}
      />

      <Style.ButtonWrap>
        <ShareButton
          text="Verfy"
          suffixIcon={<ArrowRight />}
          textColor={StaticColors.white}
          onPress={handleVerifi}
        />
      </Style.ButtonWrap>
    </Style.View>
  );
};

const styles = StyleSheet.create({
  borderStyleBase: {
    width: 45,
    height: 45,
  },

  borderStyleHighLighted: {
    borderColor: "#03DAC6",
  },

  underlineStyleBase: {
    width: 45,
    height: 45,
    color: "#000",

    borderWidth: 0,
    borderBottomWidth: 1,
  },

  underlineStyleHighLighted: {
    borderColor: "#03DAC6",
  },
});

const Style = {
  View: styled.View`
    flex: 1;
    padding: 0 20px;
    align-items: center;
    justify-content: center;
  `,
  ButtonWrap: styled.View`
    height: 56px;
    width: 100%;
  `,
};
