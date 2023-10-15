import React from "react";
import { StatusBar, View } from "react-native";
import { Provider } from "react-redux";

import RootNavigation from "./navigation";
import { store } from "./store";
import colors from "./common/colors";

const App: React.FC = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" backgroundColor={colors.white} />
      <View style={{ flex: 1 }}>
        <Provider store={store}>
          <RootNavigation />
        </Provider>
      </View>
    </>
  );
};

export default App;
