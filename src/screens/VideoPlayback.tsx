import React from "react";
import { StyleSheet, View } from "react-native";
import YoutubePlayer, { PLAYER_STATES } from "react-native-youtube-iframe";

import { SCREEN_HEIGHT } from "../common/constants";

const VideoPlayback: React.FC = ({ navigation, route }) => {

  const videoId = route.params?.videoId;

  const handleVideoStateChange = (state: PLAYER_STATES) => {
    if (state === PLAYER_STATES.ENDED) {
      navigation.goBack();
    }
  }

  return (
    <View style={styles.container}>
      <YoutubePlayer
        height={SCREEN_HEIGHT}
        videoId={videoId}
        play
        forceAndroidAutoplay
        onChangeState={handleVideoStateChange}
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
