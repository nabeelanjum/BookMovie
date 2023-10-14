import React from "react";
import { Image, StyleSheet } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import images from "../assets/images";
import AppText from "../components/shared/AppText";
import colors from "../common/colors";
import { Dashboard, MediaLibrary, More, Watch } from "../screens";
import AppStackNavigation from "./AppStackNavigation";

const Tab = createBottomTabNavigator();

const BottomTabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarStyle: styles.tabBar,
        tabBarIconStyle: { marginBottom: -10 },
        tabBarActiveTintColor: colors.white,
        tabBarInactiveTintColor: colors.tabInactive,
      }}
    >
      <Tab.Screen
        name="Dashboard"
        component={Dashboard}
        options={{
          tabBarIcon: (props) => <Image source={images.dashboard} style={{ tintColor: props.color }} />,
          tabBarLabel: (props) => <AppText style={{ color: props.color, fontSize: 12, fontWeight: props.focused ? "bold" : "normal" }}>{props.children}</AppText>
        }}
      />
      <Tab.Screen
        name="AppStack"
        component={AppStackNavigation}
        options={{
          title: "Watch",
          tabBarIcon: (props) => <Image source={images.watch} style={{ tintColor: props.color }} />,
          tabBarLabel: (props) => <AppText style={{ color: props.color, fontSize: 12, fontWeight: props.focused ? "bold" : "normal" }}>{props.children}</AppText>
        }}
      />
      <Tab.Screen
        name="Library"
        component={MediaLibrary}
        options={{
          tabBarIcon: (props) => <Image source={images.library} style={{ tintColor: props.color }} />,
          tabBarLabel: (props) => <AppText style={{ color: props.color, fontSize: 12, fontWeight: props.focused ? "bold" : "normal" }}>{props.children}</AppText>
        }}
      />
      <Tab.Screen
        name="More"
        component={More}
        options={{
          tabBarIcon: (props) => <Image source={images.more} style={{ tintColor: props.color }} />,
          tabBarLabel: (props) => <AppText style={{ color: props.color, fontSize: 12, fontWeight: props.focused ? "bold" : "normal" }}>{props.children}</AppText>
        }}
      />
    </Tab.Navigator>
  );
}

export default BottomTabNavigator;

const styles = StyleSheet.create({
  tabBar: {
    borderTopRightRadius: 40,
    borderTopLeftRadius: 40,
    borderTopWidth: 0,
    backgroundColor: "#2E2739",
    minHeight: 70,
    paddingBottom: 15,
  }
});
