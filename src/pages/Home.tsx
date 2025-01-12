import MovieList from "@/components/movie/MovieList";
import MovieModal from "@/components/movie/MovieModal";
import SearchBar from "@/components/movie/SearchBar";
import { useMovieContext } from "@/context/MovieContext";
import { useEffect, useState } from "react";

export default function Home() {
  const { movies, selectedMovie } = useMovieContext();
  const [isLoading, setIsLoading] = useState<boolean>(false);

  useEffect(() => {
    if (movies.length === 0) {
      setIsLoading(true);
      // Simulate loading or fetch data
      setTimeout(() => {
        setIsLoading(false); // Set loading to false when done
      }, 2000); // Simulate 2 seconds loading time
    }
  }, [movies]);

  return (
    <div className="min-h-screen bg-gradient-to-r from-indigo-900 to-purple-800 flex flex-col items-center justify-between text-white">
      <div className="container mx-auto px-4 py-8 flex-grow">
        {/* Teks Judul Aplikasi */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-center text-white mb-6">
          Movie Finder 🎬 
        <p className="text-center text-gray-300 text-sm py-4">Search for movies and get a movie detail</p>
        </h1>
        {/* SearchBar di tengah */}
        <div className="flex justify-center">
          <SearchBar />
        </div>
        {isLoading ? (
          <div className="flex justify-center items-center mt-6">
            <div className="w-16 h-16 border-4 border-t-4 border-white border-solid rounded-full animate-spin"></div>
            {/* Modern spinner */}
          </div>
        ) : movies.length > 0 ? (
          <MovieList />
        ) : (
          <p className="text-center text-2xl font-semibold text-gray-300 mt-6">
            No movies found
          </p>
        )}
        {selectedMovie && <MovieModal />}
      </div>

      {/* Footer Credit */}
      <footer className="bg-gray-800 text-center text-white py-4 w-full">
        <p className="text-sm">Made with ❤️ by <span className="font-semibold">codingsluv</span></p>
      </footer>
    </div>
  );
}
