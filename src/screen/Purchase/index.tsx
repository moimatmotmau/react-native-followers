import React, { useState } from "react";
import styled from "styled-components/native";
import {
  MaxCoinIcon,
  MediumCoinIcon,
  MinCoinIcon,
  RulesIcon,
} from "../../assets";
import { ShareText } from "../../components";
import { StaticColors } from "../../theme";
import { PurchaseModal } from "./PurchaseModal";
import { PurchaseOffers } from "./PurchaseOffers";

type Props = {};

export const Purchase = (props: Props) => {
  const [showModal, setShowModal] = useState(false);

  const handlePurchase = () => {
    setShowModal(true);
  };

  return (
    <>
      <Style.ScrollView>
        <Style.OfferWrap>
          <PurchaseOffers
            Icon={<MinCoinIcon />}
            cointQuanity="1000"
            price="600"
            onPress={handlePurchase}
          />
          <PurchaseOffers
            Icon={<MediumCoinIcon />}
            cointQuanity="3000"
            price="1500"
            onPress={handlePurchase}
          />
          <PurchaseOffers
            Icon={<MaxCoinIcon />}
            cointQuanity="5000"
            price="2300"
            onPress={handlePurchase}
          />
        </Style.OfferWrap>

        <Style.YourCoinSection>
          <ShareText label="Your TomoCoin" fontSize="24px" fontWeight={600} />
          <ShareText
            label="Current count (tc)"
            fontSize="16px"
            fontWeight={500}
            color={StaticColors.label}
          />
          <Style.YourCoin>
            <ShareText
              label="300"
              fontSize="36px"
              fontWeight={600}
              color={StaticColors.coinColor}
            />
          </Style.YourCoin>
        </Style.YourCoinSection>
        <Style.RulesWrap>
          <Style.RulesTextWrap>
            <RulesIcon />
            <ShareText
              fontWeight={600}
              fontSize="24px"
              label="Rules and terms"
              style={{ marginLeft: 10 }}
            />
          </Style.RulesTextWrap>
          <ShareText
            color={StaticColors.label}
            fontSize="16px"
            fontWeight={400}
            label="掲示板投稿＝５tm、メール送信＝10tm、申請＝５0tm、承認＝５0tm申請は相手に承認された場合に消費。申請後３日以内に承認されなければ返還されます。掲示板投稿、メール、申請はTM保有数を限度とする。TMが５0無いと相手からの申請を承認できません。退会の場合、一切の返金はありませんのでご了承ください。"
          />
        </Style.RulesWrap>
      </Style.ScrollView>
      {showModal && (
        <PurchaseModal
          type="error"
          setShowModal={setShowModal}
          currentCoint={20}
          tcRequred={40}
        />
      )}
    </>
  );
};

const Style = {
  ScrollView: styled.ScrollView`
    padding: 0 20px;
  `,

  OfferWrap: styled.View`
    margin: 10px 0;
  `,
  YourCoinSection: styled.View`
    margin: 15px 0 40px 0;
  `,

  YourCoin: styled.View`
    width: 100%;
    height: 85px;
    border-radius: 8px;
    align-items: center;
    margin-top: 15px;
    justify-content: center;
    border: 1px solid ${StaticColors.label};
  `,
  RulesWrap: styled.View`
    margin-bottom: 20px;
  `,
  RulesTextWrap: styled.View`
    flex-direction: row;
    align-items: center;
    margin-bottom: 15px;
  `,
};
