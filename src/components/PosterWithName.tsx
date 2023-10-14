import React from "react";
import { ImageBackground, Pressable, StyleSheet } from "react-native";

import AppText from "./shared/AppText";
import { getImageUrl } from "../common/helpers";
import colors from "../common/colors";

interface Props {
  id: string;
  posterPath: string;
  title: string;
  onPress?: () => void;
}

const PosterWithName: React.FC<Props> = (props) => {

  const {
    posterPath,
    title,
    onPress
  } = props;

  return (
    <Pressable onPress={() => onPress?.()} style={styles.container}>
      <ImageBackground
        source={{ uri: getImageUrl(posterPath) }}
        style={styles.posterContainer}
        resizeMode="cover"
      >
        <AppText style={styles.title}>{title}</AppText>
      </ImageBackground>
    </Pressable>
  );
}

export default PosterWithName;

const styles = StyleSheet.create({
  container: {
    marginVertical: 12,
    borderRadius: 10,
    overflow: "hidden",
  },
  posterContainer: {
    width: "100%",
    height: 200,
    justifyContent: "flex-end",
  },
  title: {
    margin: 20,
    color: colors.white,
    fontSize: 20,
    fontWeight: "bold",
  }
});
