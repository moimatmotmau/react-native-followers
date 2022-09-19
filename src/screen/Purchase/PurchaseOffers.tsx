import React from "react";
import styled from "styled-components/native";
import { ShareText } from "../../components";
import { StaticColors } from "../../theme";

type Props = {
  Icon: React.ReactNode;
  cointQuanity: string;
  price: string;
  onPress?: () => void;
};

export const PurchaseOffers = ({
  Icon,
  cointQuanity,
  price,
  onPress,
}: Props) => {
  return (
    <Style.TouchableOpacity onPress={onPress}>
      <Style.CoinWrap>
        {Icon}
        <ShareText
          label={`${cointQuanity} tc`}
          color={StaticColors.coinColor}
          fontWeight={700}
          style={{ marginLeft: 10 }}
          fontSize="20px"
        />
      </Style.CoinWrap>
      <ShareText
        label={`¥ ${price}`}
        color={StaticColors.dark}
        fontWeight={600}
        fontSize="16px"
      />
    </Style.TouchableOpacity>
  );
};

const Style = {
  TouchableOpacity: styled.TouchableOpacity`
    margin-bottom: 15px;
    height: 75px;
    padding: 0 10px;
    flex: 1;
    width: 100%;
    flex-direction: row;
    border-radius: 8px;
    background-color: ${StaticColors.inputBg};
    align-items: center;
    justify-content: space-between;
  `,
  CoinWrap: styled.View`
    align-items: flex-end;
    flex-direction: row;
  `,
};
