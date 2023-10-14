import { createStackNavigator } from "@react-navigation/stack";
import IonIcons from "react-native-vector-icons/Ionicons";

import { MovieDetails, Search, VideoPlayback, Watch } from "../screens";
import { fonts } from "../common/constants";
import { stackRoutes } from "./configs";
import AppText from "../components/shared/AppText";
import { Pressable } from "react-native";

const Stack = createStackNavigator();

const AppStackNavigation = ({ navigation }) => {
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
      <Stack.Screen
        name={stackRoutes.Watch}
        component={Watch}
        options={{
          headerRight: () => (
            <Pressable onPress={() => navigation.navigate(stackRoutes.Search)} style={{ paddingHorizontal: 15 }}>
              <IonIcons name="search" size={22} />
            </Pressable>
          )
        }}
      />
      <Stack.Screen
        name={stackRoutes.Details}
        component={MovieDetails}
        options={{
          headerTransparent: true,
          title: "",
        }}
      />
      <Stack.Screen
        name={stackRoutes.Search}
        component={Search}
        options={{
          headerShown: false
        }}
      />
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
