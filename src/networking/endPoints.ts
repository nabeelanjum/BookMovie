export default {
  upcomingList: "movie/upcoming",
  details: (movieId: string) => `movie/${movieId}`,
  images: (movieId: string) => `movie/${movieId}/images`
}
