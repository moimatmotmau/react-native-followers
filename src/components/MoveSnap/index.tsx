import React from "react";
import { Image, ImageSourcePropType } from "react-native";
import styled from "styled-components/native";
import { StaticColors } from "../../theme";
import { ShareText } from "../ShareText";

interface IMove {
  image?: ImageSourcePropType;
  text?: string;
  title?: string;
}

type Props = {
  dataMoves: IMove[];
  sectionName?: string;
};

export const MoveSnap = (props: Props) => {
  const { dataMoves, sectionName } = props;
  return (
    <Style.OtherSection>
      {sectionName && <ShareText label={sectionName} />}
      <Style.MovieWrap>
        {dataMoves.slice(0, 5).map((item: IMove, index: number) => {
          return (
            <Style.MovieItem key={index}>
              <Image source={item.image} resizeMode="contain" />
              <Style.MoveWrapText>
                <ShareText label={item.title || ""} fontSize="18px" />
                <ShareText
                  label={item.text || ""}
                  fontSize="14px"
                  color={StaticColors.label}
                  fontWeight={400}
                />
              </Style.MoveWrapText>
            </Style.MovieItem>
          );
        })}
      </Style.MovieWrap>
    </Style.OtherSection>
  );
};

const Style = {
  OtherSection: styled.View`
    flex: 1;
    margin-top: 20px;
  `,
  MovieWrap: styled.ScrollView`
    flex: 1;
    margin-top: 20px;
    margin-bottom: 20px;
  `,
  MovieItem: styled.View`
    flex-direction: row;
    align-items: center;
    margin-bottom: 20px;
  `,
  MoveWrapText: styled.View`
    margin-left: 15px;
  `,
};
