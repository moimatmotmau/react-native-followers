import React from "react";
import { View, Text } from "react-native";
import styled from "styled-components/native";
import { StaticColors } from "../../theme";

type Props = {
  text?: string;
  prefixIcon?: React.ReactNode;
  suffixIcon?: React.ReactNode;
  style?: any;
  disabled?: boolean;
  fontWeight?: number;
  textColor?: string;
  onPress?: () => void;
  textAlign?: "center" | "flex-start" | "flex-end";
};

export const ShareButton = (props: Props) => {
  const {
    text,
    disabled,
    prefixIcon,
    suffixIcon,
    style,
    textColor,
    fontWeight,
    textAlign = "center",
    onPress,
  } = props;
  return (
    <Style.Container style={style} onPress={onPress} disabled={disabled}>
      <Style.View textAlign={textAlign}>
        {prefixIcon && prefixIcon}
        <Style.Text fontWeight={fontWeight} textColor={textColor}>
          {text && text}
        </Style.Text>
        {suffixIcon && suffixIcon}
      </Style.View>
    </Style.Container>
  );
};

const Style = {
  Container: styled.TouchableOpacity`
    width: 100%;
    height: 100%;
    border-radius: 8px;
    justify-content: flex-start;
    background-color: ${StaticColors.primaryButton};
  `,
  View: styled.View<{ textAlign: string }>`
    flex: 1;
    margin: 0 12px;
    flex-direction: row;
    justify-content: ${({ textAlign }) => textAlign};
    align-items: center;
  `,
  Text: styled.Text<{ textColor?: string; fontWeight: number }>`
    color: ${({ textColor }) => textColor || StaticColors.dark};
    font-size: 16px;
    font-weight: ${({ fontWeight }) => fontWeight || 600};
    margin: 0 10px;
  `,
};
