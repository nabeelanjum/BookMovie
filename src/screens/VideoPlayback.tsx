import React from "react";
import { StyleSheet, View } from "react-native";
import YoutubePlayer from "react-native-youtube-iframe";

import { SCREEN_HEIGHT } from "../common/constants";

const VideoPlayback: React.FC = ({ route }) => {

  const videoId = route.params?.videoId;

  return (
    <View style={styles.container}>
      <YoutubePlayer
        height={SCREEN_HEIGHT}
        videoId={videoId}
        play
        forceAndroidAutoplay
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
