import React from "react";
import styled from "styled-components/native";
import { ShareButton, ShareText } from "../../components";
import { StaticColors } from "../../theme";
import { Text } from "react-native";
import { images } from "../../assets";

type Props = {
  type: "error" | "available";
  tcRequred?: string | number;
  currentCoint?: string | number;
  setShowModal: any;
};

export const PurchaseModal = (props: Props) => {
  const { type, tcRequred, currentCoint, setShowModal } = props;

  const submitPurchase = () => {
    alert("you are buying this");
    setShowModal(false);
  };

  const container = (type: string) => {
    if (type === "error") {
      return (
        <Style.Content>
          <Style.ModalErrorBody>
            <Style.ErrorImage source={images.Error} />
            <ShareText
              label={`You need ${tcRequred}tc to post this `}
              fontSize="18px"
              fontWeight={600}
              style={{ marginVertical: 15 }}
            />
            <Style.CurrentCountWrap>
              <ShareText
                label={`Your current tc count: `}
                fontSize="16px"
                fontWeight={400}
                color={StaticColors.label}
              />
              <ShareText
                label={`${currentCoint}`}
                fontSize="24px"
                fontWeight={700}
                color={StaticColors.coinColor}
              />
            </Style.CurrentCountWrap>
          </Style.ModalErrorBody>

          <Style.ModalErrorFooter>
            <Style.Button
              text="Go Back"
              fontWeight={600}
              isUndo
              onPress={() => setShowModal(false)}
              textColor={StaticColors.label}
            />
          </Style.ModalErrorFooter>
        </Style.Content>
      );
    }
    if (type === "available") {
      return (
        <Style.Content>
          <Style.Body>
            <ShareText
              label={`Do you want to spend ${tcRequred}tc on accepting request from Cody Fisher?`}
              color={StaticColors.dark}
              fontSize="18px"
              fontWeight={500}
              style={{ textAlign: "center", lineHeight: 25 }}
            />
            <Style.CurrentCountWrap>
              <ShareText
                label={`Your current tc count:`}
                color={StaticColors.label}
                fontSize="16px"
                fontWeight={400}
              />
              <ShareText
                label={`${currentCoint}`}
                fontSize="24px"
                fontWeight={700}
                color={StaticColors.coinColor}
              />
            </Style.CurrentCountWrap>
          </Style.Body>
          <Style.ButtonWrap>
            <Style.Button
              text="Ok"
              width="130px"
              height="50px"
              style={{ marginRight: 10 }}
              onPress={submitPurchase}
              textColor={StaticColors.white}
            />
            <Style.Button
              text="Cancel"
              width="130px"
              height="50px"
              isUndo
              onPress={() => setShowModal(false)}
            />
          </Style.ButtonWrap>
        </Style.Content>
      );
    }
  };

  return (
    <Style.View>
      <Style.Modal animationType="slide" transparent={true}>
        <Style.ModalContainer>{container(type)}</Style.ModalContainer>
      </Style.Modal>
    </Style.View>
  );
};

const Style = {
  View: styled.View`
    align-items: center;
    justify-content: center;
    width: 100%;
    flex: 1;
  `,
  Modal: styled.Modal``,
  ModalContainer: styled.View`
    align-items: center;
    justify-content: center;
    padding: 0 20px;
    width: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    flex: 1;
  `,

  CurrentCountWrap: styled.View`
    flex-direction: row;
    align-items: center;
    justify-content: center;
  `,

  AvailablePurchase: styled.View`
    align-items: center;
    justify-content: center;
    margin: 30px 25px;
  `,
  Content: styled.View`
    width: 100%;
    background-color: ${StaticColors.white};
    border-radius: 8px;
    padding: 20px 0;
  `,
  Body: styled.View`
    text-align: center;
    padding: 0 20px 40px 20px;
    border-bottom-width: 1px;
    border-style: solid;
    border-color: ${StaticColors.label};
  `,
  ModalErrorBody: styled.View`
    align-items: center;
    justify-content: center;
    border-bottom-width: 1px;
    border-style: solid;
    border-color: ${StaticColors.label};
    padding: 0 20px 40px 20px;
    margin-bottom: 30px;
    width: 100%;
  `,
  ModalErrorFooter: styled.View`
    padding: 0 30px;
    width: 100%;

    height: 56px;
  `,
  ErrorImage: styled.Image`
    width: 48px;
    height: 48px;
  `,
  ButtonWrap: styled.View`
    flex-direction: row;
    align-items: center;
    justify-content: center;
    margin: 30px 20px 0 20px;
  `,
  Button: styled(ShareButton)<{
    isUndo?: boolean;
    width?: string;
    height?: string;
  }>`
    background-color: ${({ isUndo }) =>
      isUndo ? StaticColors.white : StaticColors.primaryButton};
    width: ${({ width }) => (width ? width : "100%")};
    height: ${({ height }) => (height ? height : "100%")};
    border: ${({ isUndo }) =>
      isUndo ? `1px solid ${StaticColors.label}` : "none"};
  `,
};
