import { useCallback, useState } from "react";

import invokeAPI from "../networking";
import endPoints from "../networking/endPoints";
import { useDispatch, useSelector } from "react-redux";
import { updateMoviesList } from "../store/reducers/movies";

const useMovies = () => {

  const dispatch = useDispatch();

  const moviesList = useSelector((state: any) => state.movies?.list);

  const [movieDetails, setMovieDetails] = useState<any>(null);

  const getMoviesList = useCallback(async () => {
    const resp = await invokeAPI({ url: endPoints.upcomingList });
    if (resp) {
      dispatch(updateMoviesList(resp.results));
    }
  }, []);

  const getMovieDetails = useCallback(async (id: string) => {
    const resp = await invokeAPI({
      url: endPoints.details(id),
      // As mentioned in the API docs here: https://developer.themoviedb.org/docs/append-to-response
      // getting videos with this easy and efficient way by adding the param 'append_to_response'
      params: {
        append_to_response: "videos"
      }
    });
    if (resp) {
      setMovieDetails(resp);
    }
  }, []);

  return {
    getMoviesList,
    moviesList,
    getMovieDetails,
    movieDetails,
  };

};

export default useMovies;
