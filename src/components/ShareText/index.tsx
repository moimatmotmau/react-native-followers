import React from "react";
import { StyledProps } from "styled-components";
import styled from "styled-components/native";
import { StaticColors } from "../../theme";

type Props = {
  label: string;
  fontSize?: string;
  isPress?: boolean;
  onPress?: () => void;
  color?: string;
  fontWeight?: number;
  style?: StyledProps<any>;
};

export const ShareText = (props: Props) => {
  const { fontSize, label, color, fontWeight, isPress, onPress, style } = props;
  return (
    <>
      <Style.Title
        style={style}
        label={label}
        color={color}
        fontSize={fontSize}
        fontWeight={fontWeight}
        isPress={isPress}
        onPress={onPress}
      >
        {label}
      </Style.Title>
    </>
  );
};

const Style = {
  Title: styled.Text<{
    fontSize?: string;
    color?: string;
    fontWeight?: number | string;
  }>`
    font-weight: ${({ fontWeight }) => fontWeight || "bold"};
    font-size: ${({ fontSize }) => fontSize || "28px"};
    color: ${({ color }) => color || StaticColors.dark};
  `,
};
