import React from "react";
import { Image, Pressable, StyleSheet, View } from "react-native";
import AppText from "../components/shared/AppText";
import { getFormattedDate, getImageUrl } from "../common/helpers";
import { SCREEN_WIDTH, fonts } from "../common/constants";
import colors from "../common/colors";

interface Props {
  movie: any,
  onPress?: () => void;
}

const MovieTile: React.FC<Props> = (props) => {

  const {
    movie,
    onPress,
  } = props;

  return (
    <Pressable onPress={() => onPress?.()} style={styles.container}>
      <Image
        source={{ uri: getImageUrl(movie.backdrop_path) }}
        style={styles.posterImage}
        resizeMode="cover"
      />
      <View style={styles.nameView}>
        <AppText style={styles.title}>{movie.title}</AppText>
        <AppText color={colors.fontSecondary}>Released: {getFormattedDate(movie.release_date)}</AppText>
      </View>
    </Pressable>
  );
}

export default MovieTile;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    marginVertical: 12,
    alignItems: "center",
  },
  posterImage: {
    width: SCREEN_WIDTH / 2.5,
    height: SCREEN_WIDTH / 3.5,
    borderRadius: 10,
    backgroundColor: colors.overlay,
  },
  nameView: {
    flex: 1,
    marginLeft: 15,
  },
  title: {
    fontFamily: fonts.medium,
    fontSize: 17,
  }
});
