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

  const getMovieDetails = useCallback(async (id: string) => {
    const resp = await invokeAPI({
      url: endPoints.details(id),
      // As mentioned in the API docs here: https://developer.themoviedb.org/docs/append-to-response
      // getting videos with this easy and efficient way by adding the param 'append_to_response'
      params: {
        append_to_response: "videos"
      }
    });
    return resp;
  }, []);

  const getMoviesSearchResults = useCallback(async (searchQuery: string) => {
    const resp = await invokeAPI({
      url: endPoints.search,
      params: {
        query: searchQuery
      }
    });
    return resp;
  }, []);

  return {
    getMoviesList,
    moviesList,
    getMovieDetails,
    getMoviesSearchResults,
  };

};

export default useMovies;
