import React, { useRef } from "react";
import { Text, View, Image } from "react-native";
import { FlatList } from "react-native-gesture-handler";
import styled from "styled-components/native";
import { images } from "../../../assets";
import { ShareText } from "../../../components";
import { StaticColors } from "../../../theme";

type Props = {};

const data = [
  { category: "Anime", image: images.CarouselImg_1 },
  { category: "Movie", image: images.CarouselImg_1 },
  { category: "Action", image: images.CarouselImg_1 },
  { category: "Unknow", image: images.CarouselImg_1 },
  { category: "Super", image: images.CarouselImg_1 },
];

const FlatItem = ({ item }: any) => {
  return (
    <View
      style={{
        position: "relative",
        marginHorizontal: 5,
        alignItems: "center",
      }}
    >
      <Image source={item.image} />
      <Text
        style={{
          position: "absolute",
          bottom: 10,
          left: 10,
          color: "white",
          fontSize: 16,
        }}
      >
        {" "}
        {item.category}
      </Text>
    </View>
  );
};

export const HomeCarousel = (props: Props) => {
  const renderItem = ({ item }: any) => {
    return <FlatItem item={item} />;
  };

  return (
    <>
      <ShareText
        label="Joined communities"
        fontSize="24px"
        fontWeight={600}
        color={StaticColors.dark}
      />
      <Style.View>
        <FlatList
          data={data}
          horizontal
          renderItem={renderItem}
          showsHorizontalScrollIndicator={false}
          keyExtractor={(item, index) => item.category + index}
        />
      </Style.View>
    </>
  );
};

const Style = {
  View: styled.View`
    flex: 1;
  `,
};
