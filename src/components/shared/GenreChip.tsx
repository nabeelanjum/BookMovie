import React from "react";
import { StyleSheet, View } from "react-native";
import colors from "../../common/colors";
import AppText from "./AppText";
import { fonts } from "../../common/constants";

interface Props {
  name: string;
  color?: string;
}

const GenreChip: React.FC<Props> = ({ name }) => {
  return (
    <View style={styles.container}>
      <AppText style={styles.name}>{name}</AppText>
    </View>
  );
}

export default GenreChip;

const styles = StyleSheet.create({
  container: {
    borderRadius: 100,
    paddingVertical: 4,
    paddingHorizontal: 10,
    backgroundColor: colors.tabInactive,
    marginRight: 5,
    marginTop: 10,
  },
  name: {
    color: colors.white,
    fontFamily: fonts.semiBold,
  }
});
