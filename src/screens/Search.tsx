import React, { useEffect, useMemo, useState } from "react";
import { StyleSheet, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Searchbar } from "react-native-paper";

import AppText from "../components/shared/AppText";
import colors from "../common/colors";

const Search: React.FC = ({ navigation }) => {

  const [searchQuery, setSearchQuery] = useState("");

  const renderHeader = useMemo(() => {
    return (
      <View style={styles.headerContainer}>
        <SafeAreaView edges={["top"]} />
        <Searchbar
          placeholder="Search..."
          value={searchQuery}
          onChangeText={setSearchQuery}
        />
      </View>
    );
  }, [searchQuery]);

  return (
    <>
      {renderHeader}
      <View style={styles.container}>
        <AppText>Coming Soon!</AppText>
      </View>
    </>
  );
}

export default Search;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  headerContainer: {
    backgroundColor: colors.white,
    paddingBottom: 10,
  }

});
