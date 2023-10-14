import React from "react";
import { StyleSheet, View } from "react-native";
import AppText from "../components/shared/AppText";
import SearchBar from "../components/shared/SearchBar";

const Search: React.FC = () => {
  return (
    <View style={styles.container}>
      <SearchBar onSearch={() => { }} />
      <AppText>Coming Soon!</AppText>
    </View>
  );
}

export default Search;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

});
