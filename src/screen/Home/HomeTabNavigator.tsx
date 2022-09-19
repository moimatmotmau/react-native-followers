import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Community } from "../Community";
import { Account } from "../Account";
import { Routes } from "../../constaint";
import { Home } from ".";
import { GenderTabBarICon } from "../../Routes";

type Props = {};

const Tab = createBottomTabNavigator();

const HomeTabNavigator = (props: Props) => {
  return (
    <Tab.Navigator
      screenOptions={{ headerShown: true, headerTitleAlign: "center" }}
      tabBar={(props) => <GenderTabBarICon {...props} />}
      initialRouteName={Routes.HOME}
    >
      <Tab.Screen name={Routes.HOME} component={Home} />
      <Tab.Screen name={Routes.COMMUNITY} component={Community} />
      <Tab.Screen name={Routes.ACCOUNT} component={Account} />
    </Tab.Navigator>
  );
};

export default HomeTabNavigator;
