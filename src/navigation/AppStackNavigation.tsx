import { createStackNavigator } from "@react-navigation/stack";
import { MovieDetails, Search, VideoPlayback, Watch } from "../screens";
import { fonts } from "../common/constants";
import { stackRoutes } from "./configs";

const Stack = createStackNavigator();

const AppStackNavigation = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerTitleAlign: "left",
        headerTitleStyle: {
          fontFamily: fonts.medium,
          fontSize: 18
        },
      }}
    >
      <Stack.Screen name={stackRoutes.Watch} component={Watch} />
      <Stack.Screen
        name={stackRoutes.Details}
        component={MovieDetails}
        options={{
          headerTransparent: true,
          title: "",
        }}
      />
      <Stack.Screen name={stackRoutes.Search} component={Search} />
      <Stack.Screen
        name={stackRoutes.VideoPlayback}
        component={VideoPlayback}
        options={{
          presentation: "card",
          title: "",
        }}
      />
    </Stack.Navigator>
  );
}

export default AppStackNavigation;
