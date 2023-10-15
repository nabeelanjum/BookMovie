import React, { useCallback, useMemo, useState } from "react";
import { FlatList, StyleSheet, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Searchbar } from "react-native-paper";
import IonIcons from "react-native-vector-icons/Ionicons";

import colors from "../common/colors";
import useMovies from "../hooks/useMovies";
import { stackRoutes } from "../navigation/configs";
import { MovieTile } from "../components";
import { useBottomTabBarHeight } from "@react-navigation/bottom-tabs";

const Search: React.FC = ({ navigation }) => {

  const tabBarHeight = useBottomTabBarHeight();

  const { getMoviesSearchResults } = useMovies();

  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState<any[]>([]);

  const handleSearch = useCallback(async () => {
    const resp = await getMoviesSearchResults(searchQuery);
    setSearchResults(resp?.results);
  }, [searchQuery]);

  const renderHeader = useMemo(() => {
    return (
      <View style={styles.headerContainer}>
        <SafeAreaView edges={["top"]} />
        <View style={styles.headerContentContainer}>
          <TouchableOpacity onPress={() => navigation.goBack()} style={{ width: 50, height: 50, justifyContent: "center", alignItems: "center" }}>
            <IonIcons name="chevron-back" size={24} color={colors.fontPrimary} />
          </TouchableOpacity>
          <Searchbar
            style={{ flex: 1, marginRight: 25 }}
            placeholder="Search..."
            value={searchQuery}
            onChangeText={setSearchQuery}
            onSubmitEditing={handleSearch}
            autoFocus
          />
        </View>
      </View>
    );
  }, [searchQuery]);

  return (
    <>
      {renderHeader}
      <View style={styles.container}>
        <FlatList
          data={searchResults}
          keyExtractor={(item) => item.id}
          contentContainerStyle={{ paddingHorizontal: 15, paddingBottom: tabBarHeight }}
          renderItem={({ item }) => (
            <MovieTile
              movie={item}
              onPress={() => navigation.navigate(stackRoutes.Details, { movieId: item.id })}
            />
          )}
        />
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
  },
  headerContentContainer: {
    flexDirection: "row",
    alignItems: "center",
    paddingBottom: 15,
    paddingTop: 10,
  }
});
