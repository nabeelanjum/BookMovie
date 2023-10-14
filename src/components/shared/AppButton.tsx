import React from "react";
import {
  StyleSheet,
  TextStyle,
  TouchableOpacity,
  TouchableOpacityProps,
} from "react-native";

import AppText from "./AppText";
import colors from "../../common/colors";

interface Props extends TouchableOpacityProps {
  label: string;
  titleStyle?: TextStyle;
  reverse?: boolean;
}

const AppButton: React.FC<Props> = (props) => {
  const {
    label,
    style,
    titleStyle,
    reverse,
  } = props;

  return (
    <TouchableOpacity
      {...props}
      onPress={props.onPress}
      style={[
        styles.button,
        reverse && styles.reverseButton,
        style,
      ]}
    >
      <AppText style={[styles.titleStyle, titleStyle]}>{label}</AppText>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    height: 50,
    width: "100%",
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "center",
    backgroundColor: colors.buttonPrimary,
  },
  reverseButton: {
    backgroundColor: "transparent",
    borderColor: colors.buttonPrimary,
    borderWidth: 1,
  },
  titleStyle: {
    color: colors.white,
    fontSize: 16,
    textAlign: "center",
    fontWeight: "bold",
  },
});

export default AppButton;
