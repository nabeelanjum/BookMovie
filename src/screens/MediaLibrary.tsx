import React from "react";
import { StyleSheet, View } from "react-native";
import { AppText } from "../components";

const MediaLibrary: React.FC = () => {
  return (
    <View style={styles.container}>
      <AppText>Coming Soon!</AppText>
    </View>
  );
}

export default MediaLibrary;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },

});
