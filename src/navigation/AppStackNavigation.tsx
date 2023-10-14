import { createStackNavigator } from "@react-navigation/stack";
import { MovieDetails, Search, Watch } from "../screens";

const Stack = createStackNavigator();

const AppStackNavigation = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name={"Watch"} component={Watch} />
      <Stack.Screen name={"Details"} component={MovieDetails} />
      <Stack.Screen name={"Search"} component={Search} />
    </Stack.Navigator>
  );
}

export default AppStackNavigation;
