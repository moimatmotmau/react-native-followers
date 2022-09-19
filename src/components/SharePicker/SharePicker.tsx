import React, { useState } from "react";
import { Picker } from "@react-native-picker/picker";
import { StyleProp } from "react-native";
import styled from "styled-components/native";
import { StaticColors } from "../../theme";
import { ShareText } from "../ShareText";

type IOption = {
  label: string;
  value: string;
};
type Props = {
  style?: StyleProp<any>;
  options: IOption[];
  onValueChange: (value: any, index?: number) => void;
  selectValue: string;
  index?: number;
  label?: string;
};

export const SharePicker = (props: Props) => {
  const { style, options, selectValue, onValueChange, index, label } = props;

  return (
    <Style.Container>
      {label && (
        <ShareText
          label={label}
          fontSize="16px"
          fontWeight={400}
          color={StaticColors.label}
          style={{ paddingBottom: 10 }}
        />
      )}
      <Style.View style={style}>
        <Picker
          selectedValue={selectValue}
          onValueChange={(itemValue) => {
            onValueChange(itemValue, index);
          }}
        >
          {options.map((option) => (
            <Picker.Item
              key={option.value}
              label={option.label}
              value={option.value}
            />
          ))}
        </Picker>
      </Style.View>
    </Style.Container>
  );
};

const Style = {
  Container: styled.View`
    flex: 1;
  `,
  View: styled.View`
    background-color: ${StaticColors.inputBg};
    min-width: 130px;
    height: 56px;
    border-radius: 8px;
  `,
};
