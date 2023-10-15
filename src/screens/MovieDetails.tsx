import React, { useCallback, useEffect, useState } from "react";
import { ImageBackground, ScrollView, StatusBar, StyleSheet, View } from "react-native";

import useMovies from "../hooks/useMovies";
import { getImageUrl, getTrailerId } from "../common/helpers";
import colors from "../common/colors";
import { SCREEN_HEIGHT, fonts } from "../common/constants";
import { AppButton, AppText, GenreChip, Overlay } from "../components";
import { useBottomTabBarHeight } from "@react-navigation/bottom-tabs";

const MovieDetails: React.FC<any> = ({ navigation, route }) => {

  const { params } = route;

  const tabBarHeight = useBottomTabBarHeight();

  const { getMovieDetails } = useMovies();

  const [movieDetails, setMovieDetails] = useState<any>(null);
  const [movieTrailer, setMovieTrailer] = useState("");

  useEffect(() => {
    const fetchMovieDetails = async () => {
      const resp = await getMovieDetails(params?.movieId);
      setMovieDetails(resp);
    }
    fetchMovieDetails();
  }, []);

  useEffect(() => {
    const trailerId = getTrailerId(movieDetails?.videos?.results);
    setMovieTrailer(trailerId);
  }, [movieDetails]);

  const handleWatchTrailer = useCallback(() => {
    navigation.navigate("VideoPlayback", { videoId: movieTrailer });
  }, []);

  return (
    <>
      <StatusBar barStyle="light-content" />

      <ScrollView contentContainerStyle={{ paddingBottom: tabBarHeight }} style={styles.container}>
        <ImageBackground
          source={{ uri: getImageUrl(movieDetails?.poster_path) }}
          style={styles.posterContainer}
        >
          <Overlay />
          <View style={styles.buttonsView}>
            <AppText style={styles.title} color={colors.white}>In Theaters {movieDetails?.release_date}</AppText>
            <AppButton
              label="Get Tickets"
              style={{ width: 240, marginTop: 20 }}
            />
            <AppButton
              onPress={handleWatchTrailer}
              label="Watch Trailer"
              reverse
              style={{ width: 240, marginTop: 10 }}
            />
          </View>
        </ImageBackground>

        <View style={styles.infoView}>
          <>
            <AppText style={[styles.title]}>Genres</AppText>
            <View style={styles.genreChipsView}>
              {movieDetails?.genres?.map((genre: { id: string, name: string }) => (
                <GenreChip key={genre.id} name={genre.name} />
              ))}
            </View>
          </>

          <>
            <AppText style={[styles.title, { marginTop: 25 }]}>Overview</AppText>
            <AppText style={styles.overviewText}>{movieDetails?.overview}</AppText>
          </>
        </View>
      </ScrollView>
    </>

  );
}

export default MovieDetails;

const styles = StyleSheet.create({
  container: {
  },
  posterContainer: {
    height: SCREEN_HEIGHT / 1.8,
    width: "100%",
    justifyContent: "flex-end",
  },
  title: {
    fontFamily: fonts.semiBold,
    fontSize: 18,
  },
  infoView: {
    padding: 20,
  },
  buttonsView: {
    alignItems: "center",
    marginBottom: 30,
  },
  genreChipsView: {
    flexDirection: "row",
    flexWrap: "wrap",
  },
  overviewText: {
    marginTop: 8,
    color: colors.fontSecondary,
  },
});
