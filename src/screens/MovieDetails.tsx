import React from "react";
import { StyleSheet, View } from "react-native";
import AppText from "../components/shared/AppText";

const MovieDetails: React.FC = () => {
  return (
    <View style={styles.container}>
      <AppText>Coming Soon!</AppText>
    </View>
  );
}

export default MovieDetails;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

});
