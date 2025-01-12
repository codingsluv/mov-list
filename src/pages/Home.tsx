import MovieList from "@/components/movie/MovieList";
import MovieModal from "@/components/movie/MovieModal";
import SearchBar from "@/components/movie/SearchBar";

export default function Home() {
    const selectedMovie = false
  return <div>
    <div className="min-h-screen flex flex-col items-center justify-center bg-slate-800 text-white">
      <SearchBar />
      <MovieList />
      {selectedMovie && <MovieModal />}
    </div>
  </div>;
}