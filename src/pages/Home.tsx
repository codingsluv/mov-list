import MovieList from "@/components/movie/MovieList";
import MovieModal from "@/components/movie/MovieModal";
import SearchBar from "@/components/movie/SearchBar";
import { useMovieContext } from "@/context/MovieContext";

export default function Home() {
    const {movies, selectedMovie} = useMovieContext()
  return <div>
    <div className="min-h-screen flex flex-col items-center justify-center bg-slate-800 text-white">
      <SearchBar />
      {
        movies.length > 0 ? <MovieList /> : <p className="text-center text-2xl font-bold text-gray-500 mt-4">No movies found</p>
      }
      {selectedMovie && <MovieModal />}
    </div>
  </div>;
}