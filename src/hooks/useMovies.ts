import { useCallback } from "react";

import invokeAPI from "../networking";
import endPoints from "../networking/endPoints";
import { useDispatch, useSelector } from "react-redux";
import { updateMoviesList } from "../store/reducers/movies";

const useMovies = () => {

  const dispatch = useDispatch();

  const moviesList = useSelector((state: any) => state.movies?.list);

  const getMoviesList = useCallback(async () => {
    const resp = await invokeAPI({ url: endPoints.upcomingList });
    if (resp) {
      dispatch(updateMoviesList(resp.results));
    }
  }, []);

  return {
    getMoviesList,
    moviesList,
  };

};

export default useMovies;
