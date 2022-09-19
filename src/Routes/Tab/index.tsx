import React from "react";
import { TouchableOpacity, Text } from "react-native";
import styled from "styled-components/native";
import { ComunityIcon, HomeIcon, UserIcon } from "../../assets";
import { StaticColors } from "../../theme";

type Props = {
  state: any;
  descriptors: any;
  navigation: any;
};

const tabBarIcons = [HomeIcon, ComunityIcon, UserIcon];

export const GenderTabBarICon = ({ state, descriptors, navigation }: Props) => {
  return (
    <Style.View>
      {state.routes.map((route: any, index: number) => {
        const { options } = descriptors[route.key];

        const label =
          options.tabBarLabel !== undefined
            ? options.tabBarLabel
            : options.title !== undefined
            ? options.title
            : route.name;

        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: "tabPress",
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate({ name: route.name, merge: true });
          }
        };

        const TabBarIcon = tabBarIcons[index];
        return (
          <TouchableOpacity
            accessibilityRole="button"
            accessibilityState={isFocused ? { selected: true } : {}}
            accessibilityLabel={options.tabBarAccessibilityLabel}
            testID={options.tabBarTestID}
            onPress={onPress}
            key={index}
            style={{
              flex: 1,
              justifyContent: "center",
              alignItems: "center",
              borderTopColor: isFocused
                ? StaticColors.primaryButton
                : undefined,
              borderTopWidth: isFocused ? 2 : undefined,
              borderStyle: "solid",
            }}
          >
            {isFocused ? (
              <TabBarIcon
                color={StaticColors.primaryButton}
                width={28}
                height={28}
              />
            ) : (
              <TabBarIcon width={28} height={28} />
            )}
            <Text
              style={{
                color: isFocused ? StaticColors.primaryButton : "#C6CBCC",
                fontSize: 14,
                marginTop: 5,
                fontWeight: "700",
              }}
            >
              {label}
            </Text>
          </TouchableOpacity>
        );
      })}
    </Style.View>
  );
};

const Style = {
  View: styled.View`
    flex-direction: row;
    justify-content: flex-end;
    height: 70px;
    padding: 0 10px;
  `,
};
