import React from "react";
import { StyleProp, ViewStyle } from "react-native";
import styled from "styled-components/native";
import { StaticColors } from "../../theme";

interface IShareInput {
  name?: string;
  value?: string;
  placehoder?: string;
  label?: string;
  maxLength?: number;
  error?: string | undefined;
  request?: boolean;
  secureTextEntry?: boolean;
  returnKeyType?: string;
  disable?: boolean;
  touch?: boolean;
  onChangeText?: any;
  style?: StyleProp<ViewStyle>;
  mutiline?: boolean;
  autoCapitalize?: "none" | "sentences" | "words" | "characters" | undefined;
  onEndEditing?: (e: any) => void;
  onBlur?: (e: any) => void;
}

export const ShareInput: React.FC<IShareInput> = (props: any) => {
  const {
    error,
    placehoder,
    name,
    mutiline,
    label,
    disable,
    style,
    request,
    secureTextEntry,
    autoCapitalize,
    value,
    returnKeyType,
    touch = false,
    maxLength,
    onBlur,
    onChangeText,
    onEndEditing,
  } = props;

  const showError = !!error && touch;

  return (
    <Style.View style={style}>
      {!!label && <Style.Text>{label}</Style.Text>}
      <Style.InputWrap>
        <Style.Input
          placeholder={placehoder}
          autoCapitalize={autoCapitalize}
          value={value}
          mutiline={mutiline}
          onChangeText={onChangeText}
          blurOnSubmit={false}
          editable={!disable}
          returnKeyType={returnKeyType || mutiline ? undefined : "done"}
          secureTextEntry={secureTextEntry}
          maxLength={maxLength}
          onEndEditing={onEndEditing}
          onBlur={onBlur}
        />
      </Style.InputWrap>
      {showError && <Style.Error>{error}</Style.Error>}
    </Style.View>
  );
};

const Style = {
  View: styled.View`
    justify-content: center;
    padding-bottom: 10px;
  `,
  InputWrap: styled.View`
    width: 100%;
    max-height: 56px;
    background-color: ${StaticColors.inputBg};
    border-radius: 8px;
    margin-top: 5px;
  `,

  Input: styled.TextInput`
    height: 100%;
    width: 100%;
    padding-left: 10px;
  `,
  Text: styled.Text`
    color: ${StaticColors.text};
  `,
  Error: styled.Text`
    color: ${StaticColors.error};
  `,
};
