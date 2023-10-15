import { BottomTabNavigationOptions } from "@react-navigation/bottom-tabs";

import colors from "../common/colors";
import { fonts } from "../common/constants";

export const tabRoutes = {
  Dashboard: "Dashboard",
  Watch: "WatchStack",
  Library: "Library",
  More: "More",
}

export const stackRoutes = {
  Watch: "Watch",
  Details: "Details",
  Search: "Search",
  VideoPlayback: "VideoPlayback",
}

export const tabBarConfig: BottomTabNavigationOptions = {
  tabBarStyle: {
    borderTopRightRadius: 30,
    borderTopLeftRadius: 30,
    borderTopWidth: 0,
    backgroundColor: "#2E2739",
    minHeight: 80,
    paddingBottom: 20,
  },
  tabBarIconStyle: { marginBottom: -10 },
  tabBarActiveTintColor: colors.white,
  headerTitleAlign: "left",
  headerTitleStyle: {
    fontFamily: fonts.medium,
    fontSize: 18
  }
}
