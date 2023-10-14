import React from "react";
import { StyleSheet, View } from "react-native";
import YoutubePlayer from "react-native-youtube-iframe";

import AppText from "../components/shared/AppText";
import { SCREEN_HEIGHT, SCREEN_WIDTH } from "../common/constants";

const VideoPlayback: React.FC = ({ route }) => {

  const videoId = route.params?.videoId;

  return (
    <View style={styles.container}>
      <YoutubePlayer
        height={SCREEN_HEIGHT}
        // width={SCREEN_WIDTH}
        videoId={videoId}
      />
    </View>
  );
}

export default VideoPlayback;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

});
