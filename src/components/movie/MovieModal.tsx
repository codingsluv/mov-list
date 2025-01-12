import { useMovieContext } from "@/context/MovieContext";

export default function MovieModal() {
  const { selectedMovie, closeMovieModal } = useMovieContext();
  if (!selectedMovie) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
      <div className="bg-white rounded-lg shadow-lg p-6 max-w-md w-full">
        <img
          src={selectedMovie.Poster}
          alt={selectedMovie.Title}
          className="mb-4 rounded-lg justify-self-center"
        />
        <div className="p-4">
          <h2 className="text-xl font-bold">{selectedMovie.Title}</h2>
          <p className="text-gray-500">{selectedMovie.Year}</p>
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
          {/* Tambahkan tombol close */}
          <button
            type="button"
            className="mt-4 bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600"
            onClick={closeMovieModal}
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
}
