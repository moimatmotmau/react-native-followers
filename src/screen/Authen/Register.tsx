import React from "react";
import { View, Text } from "react-native";
import styled from "styled-components/native";
import { ArrowRight } from "../../assets";
import { ShareButton, ShareInput, SharePicker } from "../../components";
import { StaticColors } from "../../theme";

type Props = {};

export const Register = (props: Props) => {
  return (
    <Style.View>
      <Style.AccountWrap>
        <Style.TitleWrap>
          <Style.Title>Your SNS accounts</Style.Title>
          <Style.Text>
            Add the accounts you want to increase followers
          </Style.Text>
        </Style.TitleWrap>
        <Style.Input label="Youtube" />
        <Style.Input label="Instagram" />
        <Style.Input label="Twitter" />
        <Style.Input label="Facebook" />
        <Style.Input label="Whatsapp" />
      </Style.AccountWrap>
      <Style.AccountWrap>
        <Style.TitleWrap>
          <Style.Title>Your SNS accounts</Style.Title>
        </Style.TitleWrap>
        <Style.Input label="Email" />
        <Style.Input label="Password" secureTextEntry />
        <Style.Input label="Username" />
        <Style.PickerWrap>
          {/* <Style.Picker
            options={[
              { label: "Male", value: "male" },
              { label: "Female", value: "female" },
            ]}
          />
          <Style.Picker
            options={[
              { label: "1999", value: "1999" },
              { label: "2000", value: "2000" },
            ]}
          /> */}
        </Style.PickerWrap>
        <Style.Input label="Introduction Code" />
        <Style.SubmitBtn
          text="Submit"
          textColor={StaticColors.white}
          suffixIcon={<ArrowRight />}
        />
      </Style.AccountWrap>
    </Style.View>
  );
};

const Style = {
  View: styled.ScrollView`
    flex: 1;
    padding: 0 20px;
  `,
  TitleWrap: styled.View`
    margin: 35px 0 25px 0;
  `,
  Title: styled.Text`
    font-size: 24px;
    color: ${StaticColors.title};
    font-weight: 500;
  `,
  Text: styled.Text`
    font-size: 14px;
    color: ${StaticColors.label};
    margin-bottom: 25px;
  `,

  Input: styled(ShareInput)``,
  AccountWrap: styled.View``,
  PickerWrap: styled.View`
    flex: 1;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 15px;
  `,
  Picker: styled(SharePicker)`
    width: 150px;
  `,
  SubmitBtn: styled(ShareButton)`
    height: 54px;
    margin-bottom: 50px;
  `,
};
