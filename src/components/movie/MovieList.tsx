import { useMovieContext } from "@/context/MovieContext";
import MovieCard from "./MovieCard";

export default function MovieList() {
    const {movies, selectedMovie} = useMovieContext() 
  return <div className="grid grid-cols-3 gap-4 p-4 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 xl:grid-cols-8">
    {movies.map((movie) => (
      <MovieCard key={movie.imdbID} movie={movie} onClick={() => console.log(movie.imdbID)} />
    ))}
    {selectedMovie && <MovieCard onClick={() => console.log(selectedMovie.imdbID)} movie={selectedMovie} />}
  </div>;
}