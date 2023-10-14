import React from "react";
import { Image, StyleSheet } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Watch from "../screens/Watch";
import images from "../assets/images";
import AppText from "../components/shared/AppText";
import colors from "../common/colors";

const Tab = createBottomTabNavigator();

export function BottomTabNavigator() {
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
        component={Watch}
        options={{
          tabBarIcon: (props) => <Image source={images.dashboard} style={{ tintColor: props.color }} />,
        }}
      />
      <Tab.Screen
        name="Watch"
        component={Watch}
        options={{
          tabBarIcon: (props) => <Image source={images.watch} style={{ tintColor: props.color }} />
        }}
      />
      <Tab.Screen
        name="Library"
        component={Watch}
        options={{
          tabBarIcon: (props) => <Image source={images.library} style={{ tintColor: props.color }} />
        }}
      />
      <Tab.Screen
        name="More"
        component={Watch}
        options={{
          tabBarIcon: (props) => <Image source={images.more} style={{ tintColor: props.color }} />
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
