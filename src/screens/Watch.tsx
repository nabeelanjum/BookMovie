import React, { useEffect, useState } from "react";
import { FlatList, StyleSheet, View } from "react-native";

import useMovies from "../hooks/useMovies";
import PosterWithName from "../components/PosterWithName";

const Watch: React.FC = ({ navigation }) => {

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
      <FlatList
        data={moviesList}
        keyExtractor={(item) => item.id}
        contentContainerStyle={{ paddingHorizontal: 15, paddingVertical: 10 }}
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
  }
});
