import React from "react";
import { View } from "react-native";

const Overlay: React.FC<{}> = () => (
  <View style={{ position: "absolute", top: 0, bottom: 0, right: 0, left: 0, backgroundColor: "rgba(0, 0, 0, 0.3)" }} />
);

export default Overlay;
