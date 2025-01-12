import { useMovieContext } from "@/context/MovieContext";
import { useState, useEffect } from "react";

export default function MovieModal() {
  const { selectedMovie, closeMovieModal } = useMovieContext();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (selectedMovie) {
      // Simulate loading time
      setIsLoading(true);
      const timer = setTimeout(() => {
        setIsLoading(false);
      }, 1000);

      return () => clearTimeout(timer); // Cleanup timer on component unmount
    }
  }, [selectedMovie]);

  if (!selectedMovie) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
      <div className="bg-white rounded-lg shadow-lg p-6 max-w-md w-full flex flex-col items-center justify-center">
        {isLoading ? (
          <div className="flex justify-center items-center">
            <div className="w-16 h-16 border-4 border-t-4 border-gray-300 rounded-full animate-spin"></div>
          </div>
        ) : (
          <>
            <img
              src={selectedMovie.Poster}
              alt={selectedMovie.Title}
              className="mb-4 rounded-lg justify-self-center"
            />
            <div className="p-4">
              <h2 className="text-xl font-bold">{selectedMovie.Title}</h2>
              <p className="text-gray-500">
                <span className="font-semibold">Year:</span> {selectedMovie.Year}
              </p>
              <p className="text-gray-700 mt-2">{selectedMovie.Plot}</p>
              <p className="text-gray-700 mt-2">
                <strong>Genre:</strong> {selectedMovie.Genre}
              </p>
              <p className="text-gray-700 mt-2">
                <strong>Director:</strong> {selectedMovie.Director}
              </p>
              <p className="text-gray-700 mt-2">
                <strong>Actors:</strong> {selectedMovie.Actors}
              </p>
              <p className="text-gray-700 mt-2">
                <strong>IMDb Rating:</strong> {selectedMovie.imdbRating}
              </p>
              <button
                type="button"
                className="mt-4 bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600"
                onClick={closeMovieModal}
              >
                Close
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
