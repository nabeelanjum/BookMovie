import React, { useCallback, useMemo, useState } from "react";
import { FlatList, StyleSheet, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Searchbar } from "react-native-paper";

import colors from "../common/colors";
import useMovies from "../hooks/useMovies";
import MovieTile from "../components/MovieTile";
import { stackRoutes } from "../navigation/configs";

const Search: React.FC = ({ navigation }) => {

  const { getMoviesSearchResults } = useMovies();

  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState<any[]>([]);

  const handleSearch = useCallback(async () => {
    const resp = await getMoviesSearchResults(searchQuery);
    console.warn(resp);
    setSearchResults(resp?.results);
  }, [searchQuery]);

  const renderHeader = useMemo(() => {
    return (
      <View style={styles.headerContainer}>
        <SafeAreaView edges={["top"]} />
        <Searchbar
          placeholder="Search..."
          value={searchQuery}
          onChangeText={setSearchQuery}
          onSubmitEditing={handleSearch}
        />
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
          contentContainerStyle={{ paddingHorizontal: 15 }}
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
    paddingBottom: 10,
  }
});
