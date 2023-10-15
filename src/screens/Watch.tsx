import React, { useEffect, useState } from "react";
import { FlatList, StyleSheet, View } from "react-native";

import useMovies from "../hooks/useMovies";
import { PosterWithName } from "../components";
import { useBottomTabBarHeight } from "@react-navigation/bottom-tabs";

const Watch: React.FC = ({ navigation }) => {

  const tabBarHeight = useBottomTabBarHeight();

  const { getMoviesList, moviesList } = useMovies();

  const [isLoading, setLoading] = useState(false);

  const getData = async () => {
    setLoading(true);
    await getMoviesList();
    setLoading(false);
  }

  useEffect(() => {
    getData();
  }, []);

  return (
    <View style={styles.container}>
      {/* I know that the list should be paginated and load more data using `onEndReached` but due to limited time not handling that */}
      <FlatList
        data={moviesList}
        keyExtractor={(item) => item.id}
        contentContainerStyle={[styles.listContainer, { paddingBottom: tabBarHeight }]}
        refreshing={isLoading}
        onRefresh={getData}
        renderItem={({ item }) => (
          <PosterWithName
            id={item.id}
            title={item.title}
            posterPath={item.backdrop_path}
            onPress={() => navigation.navigate("Details", { movieId: item.id })}
          />
        )}
      />
    </View>
  );
};

export default Watch;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  listContainer: {
    paddingHorizontal: 15,
    paddingTop: 10,
  }
});
