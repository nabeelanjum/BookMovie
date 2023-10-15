import { createStackNavigator } from "@react-navigation/stack";
import IonIcons from "react-native-vector-icons/Ionicons";

import { MovieDetails, Search, VideoPlayback, Watch } from "../screens";
import { stackConfig, stackRoutes } from "./configs";
import { Pressable } from "react-native";
import colors from "../common/colors";

const Stack = createStackNavigator();

const AppStackNavigation = ({ navigation }) => {
  return (
    <Stack.Navigator screenOptions={stackConfig}>
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
          headerTintColor: colors.white,
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
          title: "",
        }}
      />
    </Stack.Navigator>
  );
}

export default AppStackNavigation;
