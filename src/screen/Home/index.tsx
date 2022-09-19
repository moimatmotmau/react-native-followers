import React from "react";
import { Image, ImageSourcePropType, Linking } from "react-native";
import styled from "styled-components/native";
import { useNavigation } from "@react-navigation/native";

import {
  ArrowRight,
  CoinIcon,
  FacebookIcon,
  images,
  TwitterIcon,
} from "../../assets";
import { MoveSnap, ShareButton, ShareText } from "../../components";
import { Routes } from "../../constaint";
import { StaticColors } from "../../theme";
import { HomeCarousel } from "./Carousel";

// export * from "./HomeTabNavigator";

type Props = {};

interface IMove {
  title: string;
  text: string;
  image: ImageSourcePropType;
}

interface ILink {
  icon: React.ReactNode;
  text: string;
  type: "link" | "navigate";
  url: string;
}

const dataLinking: ILink[] = [
  {
    icon: <CoinIcon />,
    text: "Purchase TomoCoins",
    type: "navigate",
    url: Routes.PURCHASE,
  },
  {
    icon: <TwitterIcon />,
    text: "Introduce via Twitter",
    type: "link",
    url: "https://twitter.com",
  },
  {
    icon: <FacebookIcon />,
    text: "Introduce via Facebook",
    type: "link",
    url: "https://facebook.com",
  },
];

const dataMovie: IMove[] = [
  {
    title: "Movies",
    text: "2000 members",
    image: images.Movie_1,
  },
  {
    title: "Outdoors",
    text: "2000 members",
    image: images.Movie_2,
  },
  {
    title: "Music",
    text: "2000 members",
    image: images.Movie_3,
  },
  {
    title: "Gaming",
    text: "2000 members",
    image: images.Movie_1,
  },
  {
    title: "Movies",
    text: "2000 members",
    image: images.Movie_2,
  },
  {
    title: "Movies",
    text: "2000 members",
    image: images.Movie_3,
  },
  {
    title: "Movies",
    text: "2000 members",
    image: images.Movie_3,
  },
  {
    title: "Movies",
    text: "2000 members",
    image: images.Movie_3,
  },
];

export const Home = (props: Props) => {
  const navigation = useNavigation();

  const handlePressOption = (item: ILink) => {
    if (item.type === "link") {
      Linking.canOpenURL(item.url).then((supported) => {
        if (supported) {
          Linking.openURL(item.url);
        } else {
          return;
        }
      });
    } else {
      navigation.navigate(item.url as never);
    }
  };

  return (
    <>
      <Style.View>
        <Style.AvatarWrap>
          <Style.Avatar source={images.Avatar} />
          <Style.TitleWrap>
            <ShareText
              label="Hello"
              color={StaticColors.label}
              fontSize="18px"
              fontWeight={400}
            />
            <ShareText
              label="Matsuura Yuki"
              color={StaticColors.dark}
              fontSize="24px"
              fontWeight={600}
            />
          </Style.TitleWrap>
        </Style.AvatarWrap>
        <Style.NotiWrap>
          <Style.SpeakerImage source={images.Speaker} />
          <Style.TextNoti>
            <ShareText
              label="News for you"
              color={StaticColors.primaryButton}
              fontSize="18px"
              fontWeight={700}
            />
            <ShareText
              label="You don’t have enough TomoCoins! Please purchase some in the store."
              color={StaticColors.text}
              fontSize="14px"
              fontWeight={400}
              style={{ lineHeight: 20 }}
            />
          </Style.TextNoti>
        </Style.NotiWrap>

        <HomeCarousel />
        <Style.OtherSection>
          <Style.MovieWrap>
            <MoveSnap dataMoves={dataMovie} sectionName="Other" />

            <Style.Button
              text="See All"
              suffixIcon={<ArrowRight color={StaticColors.primaryButton} />}
              textColor={StaticColors.primaryButton}
              fontWeight={700}
              onPress={() => navigation.navigate(Routes.COMMUNITY as never)}
            />
          </Style.MovieWrap>

          <Style.OptionWrap>
            {dataLinking.map((item: ILink, index: number) => (
              <Style.Button
                key={index}
                style={{ marginBottom: 15 }}
                height="68px"
                backgroundColor="#F6F7F9"
                fontWeight={600}
                onPress={() => handlePressOption(item)}
                prefixIcon={item.icon}
                text={item.text}
                textAlign="flex-start"
              />
            ))}
          </Style.OptionWrap>
        </Style.OtherSection>
      </Style.View>
    </>
  );
};

const Style = {
  View: styled.ScrollView`
    flex: 1;
    padding: 0 20px;
  `,
  AvatarWrap: styled.View`
    align-items: center;
    flex-direction: row;
    margin-bottom: 35px;
    margin-top: 50px;
  `,
  Avatar: styled.Image.attrs({
    resizeMode: "cover",
  })`
    width: 60px;
    height: 60px;
    margin-right: 20px;
  `,
  TitleWrap: styled.View``,
  NotiWrap: styled.View`
    flex-direction: row;
    background-color: ${StaticColors.inputBg};
    padding: 35px 10px;
  `,
  SpeakerImage: styled.Image`
    width: 64px;
    height: 64px;
    margin-right: 15px;
  `,
  TextNoti: styled.View`
    flex: 1;
  `,
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
  Button: styled(ShareButton)<{
    backgroundColor?: string;
    height?: string;
  }>`
    background-color: ${({ backgroundColor }) =>
      backgroundColor || StaticColors.white};
    height: ${({ height }) => height || "56px"};
  `,
  OptionWrap: styled.View`
    margin: 40px 0 60px 0;
  `,
};
