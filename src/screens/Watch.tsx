import React, { useEffect } from "react";
import { View } from "react-native";
import invokeAPI from "../networking";
import endPoints from "../networking/endPoints";

const Watch = () => {

  const getMoviesList = async () => {
    const resp = await invokeAPI({ url: endPoints.upcomingList });
  }

  useEffect(() => {
    getMoviesList();
  }, []);

  return (
    <View>

    </View>
  );
};

export default Watch;
