import { createStackNavigator } from "@react-navigation/stack";
import { MovieDetails, Search, Watch } from "../screens";
import { fonts } from "../common/constants";

const Stack = createStackNavigator();

const AppStackNavigation = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerTitleAlign: "left",
        headerTitleStyle: {
          fontFamily: fonts.regular,
          fontWeight: "500",
          fontSize: 18
        }
      }}
    >
      <Stack.Screen name={"Watch"} component={Watch} />
      <Stack.Screen
        name={"Details"}
        component={MovieDetails}
        options={{
          headerTransparent: true,
          title: ""
        }}
      />
      <Stack.Screen name={"Search"} component={Search} />
    </Stack.Navigator>
  );
}

export default AppStackNavigation;
