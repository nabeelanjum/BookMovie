import React from "react";
import {
  ColorValue,
  StyleSheet,
  Text as RNText,
  TextProps,
} from "react-native";

import colors from "../../common/colors";

interface Props extends TextProps {
  bold?: boolean;
  medium?: boolean;
  semiBold?: boolean;
  extraBold?: boolean;
  center?: boolean;
  right?: boolean;
  size?: number;
  color?: ColorValue;
}

const AppText: React.FC<Props> = (props) => {

  const {
    center,
    right,
    style,
    size = 14,
    color = colors.fontPrimary,
    children,
    medium,
    bold,
    semiBold,
    extraBold,
  } = props;

  return (
    <RNText
      {...props}
      style={[
        styles.text,
        center && styles.center,
        right && styles.right,
        medium && styles.medium,
        bold && styles.bold,
        semiBold && styles.semiBold,
        extraBold && styles.extraBold,
        { fontSize: size },
        { color },
        style,
      ]}
    >
      {children}
    </RNText>
  );
};

const styles = StyleSheet.create({
  text: {
  },
  center: {
    textAlign: "center",
  },
  right: {
    textAlign: "right",
  },
  medium: {
  },
  bold: {
  },
  semiBold: {
  },
  extraBold: {
  },
});

export default AppText;
