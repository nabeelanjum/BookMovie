import React from "react";
import { Image, Pressable } from "react-native";
import AppText from "./shared/AppText";

interface Props {
  id: string;
  posterPath: string;
  title: string;
  onPress?: () => void;
}

const PosterWithName: React.FC<Props> = ({
  title,
  posterPath,
  onPress
}) => {
  return (
    <Pressable>
      <AppText>{title}</AppText>
    </Pressable>
  );
}

export default PosterWithName;
