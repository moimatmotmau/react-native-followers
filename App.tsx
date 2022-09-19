import "react-native-gesture-handler";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, View } from "react-native";
import {
  Login,
  Register,
  ForgotPassword,
  Verification,
  ResetPassword,
  SuccessNoti,
  PersionIntroStepFirst,
  PersionIntroStepSecond,
  Home,
  Purchase,
  Account,
  Community,
} from "./src/screen";
import { Routes } from "./src/constaint";
import React from "react";
import HomeTabNavigator from "./src/screen/Home/HomeTabNavigator";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <View style={styles.container}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName={Routes.HOME_TAB_NAVIGATOR}>
          <Stack.Group
            screenOptions={(route) => {
              return {
                headerShown: true,
                headerTitleAlign: "center",
              };
            }}
          >
            <Stack.Screen name={Routes.REGISTER} component={Register} />
            <Stack.Screen
              name={Routes.VERIFICATION}
              component={Verification}
              options={{ headerTitle: "" }}
            />
            <Stack.Screen name={Routes.PURCHASE} component={Purchase} />
          </Stack.Group>

          <Stack.Group screenOptions={{ headerShown: false }}>
            <Stack.Screen
              name={Routes.LOGIN}
              component={Login}
              options={{
                headerTitleAlign: "center",
                headerShown: false,
              }}
            />
            <Stack.Screen
              name={Routes.FORGOT_PASSWORD}
              component={ForgotPassword}
            />
            <Stack.Screen
              name={Routes.RESET_PASSWORD}
              component={ResetPassword}
            />
            <Stack.Screen name={Routes.SUCCESS_NOTI} component={SuccessNoti} />
            <Stack.Screen
              name={Routes.PERSION_INTRO_STEP_FIRST}
              component={PersionIntroStepFirst}
            />
            <Stack.Screen
              name={Routes.PERSION_INTRO_STEP_SECOND}
              component={PersionIntroStepSecond}
            />

            <Stack.Screen
              name={Routes.HOME_TAB_NAVIGATOR}
              component={HomeTabNavigator}
            />
          </Stack.Group>
        </Stack.Navigator>

        {/* <Tab.Navigator
          initialRouteName={Routes.HOME}
          tabBar={(props) => <GenderTabBarICon {...props} />}
        >
          <Tab.Group>
            <Tab.Screen name={Routes.HOME} component={Home} />
            <Tab.Screen name={Routes.COMMUNITY} component={Community} />
            <Tab.Screen name={Routes.ACCOUNT} component={Account} />
          </Tab.Group>
        </Tab.Navigator> */}
      </NavigationContainer>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
