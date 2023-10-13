import React, { useEffect } from "react";
import { FlatList, StyleSheet, View } from "react-native";

import useMovies from "../hooks/useMovies";
import PosterWithName from "../components/PosterWithName";

const Watch = () => {

  const { getMoviesList, moviesList } = useMovies();

  useEffect(() => {
    getMoviesList();
  }, []);

  return (
    <View style={styles.container}>
      <FlatList
        data={moviesList}
        keyExtractor={(item) => item.id}
        contentContainerStyle={{ paddingHorizontal: 15, paddingVertical: 10 }}
        renderItem={({ item }) => (
          <PosterWithName
            id={item.id}
            title={item.title}
            posterPath={item.backdrop_path}
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
  }
});
