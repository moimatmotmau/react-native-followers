import React from "react";
import styled from "styled-components/native";
import { Logo } from "../../../assets";
import { ShareText } from "../../../components";
import { StaticColors } from "../../../theme";

type Props = {
  children: any;
};

export const BoardHeaderWrap = (props: Props) => {
  return (
    <Style.ScrollView>
      <Style.View>
        <Logo />
        <Style.Text
          label="Getting started"
          fontSize="18px"
          color={StaticColors.label}
          fontWeight={500}
        />
        <ShareText
          label="Personal Introduction"
          fontSize="28px"
          color={StaticColors.dark}
          fontWeight={600}
        />
        {props.children}
      </Style.View>
    </Style.ScrollView>
  );
};

const Style = {
  ScrollView: styled.ScrollView`
    flex: 1;
  `,
  View: styled.View`
    flex: 1;
    padding: 60px 20px 0 20px;
  `,
  Text: styled(ShareText)`
    margin-top: 30px;
    margin-bottom: 10px;
  `,
};
