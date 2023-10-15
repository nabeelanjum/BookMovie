import React from "react";
import { Image } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import IonIcons from "react-native-vector-icons/Ionicons";

import images from "../assets/images";
import AppText from "../components/shared/AppText";
import { Dashboard, MediaLibrary, More } from "../screens";
import AppStackNavigation from "./AppStackNavigation";
import { fonts } from "../common/constants";
import { tabBarConfig, tabRoutes } from "./configs";

const Tab = createBottomTabNavigator();

const TabLabel = (props: any) => {
  return (
    <AppText style={{ color: props.color, fontSize: 11, fontFamily: props.focused ? fonts.semiBold : fonts.regular }}>
      {props.children}
    </AppText>
  );
}

const BottomTabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        ...tabBarConfig,
      }}
      initialRouteName={tabRoutes.Watch}
    >
      <Tab.Screen
        name={tabRoutes.Dashboard}
        component={Dashboard}
        options={{
          tabBarIcon: (props) => <Image source={images.dashboard} style={{ tintColor: props.color }} />,
          tabBarLabel: (props) => <TabLabel {...props} />
        }}
      />
      <Tab.Screen
        name={tabRoutes.Watch}
        component={AppStackNavigation}
        options={{
          title: "Watch",
          tabBarIcon: (props) => <Image source={images.watch} style={{ tintColor: props.color }} />,
          tabBarLabel: (props) => <TabLabel {...props} />,
          headerShown: false,
        }}
      />
      <Tab.Screen
        name={tabRoutes.Library}
        component={MediaLibrary}
        options={{
          tabBarIcon: (props) => <Image source={images.library} style={{ tintColor: props.color }} />,
          tabBarLabel: (props) => <TabLabel {...props} />,
        }}
      />
      <Tab.Screen
        name={tabRoutes.More}
        component={More}
        options={{
          tabBarIcon: (props) => <IonIcons name="list" size={24} color={props.color} />,
          tabBarLabel: (props) => <TabLabel {...props} />,
        }}
      />
    </Tab.Navigator>
  );
}

export default BottomTabNavigator;
