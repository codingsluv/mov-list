import MovieCard from "./MovieCard";

export default function MovieList() {
  return <div className="grid grid-cols-3 gap-4 p-4 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 xl:grid-cols-8">
    <MovieCard />
  </div>;
}