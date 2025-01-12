import { useMovieContext } from "@/context/MovieContext";
import MovieCard from "./MovieCard";

export default function MovieList() {
    const {movies, selectMovie} = useMovieContext() 
  return <div className="grid grid-cols-3 gap-4 p-4 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 xl:grid-cols-8">
    {movies.map((movie) => (
        <MovieCard
          key={movie.imdbID}
          movie={movie}
          onClick={() => selectMovie(movie.imdbID)} // Panggil selectMovie dengan imdbID
        />
      ))}
  </div>;
}