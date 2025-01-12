import { MovieCardProps } from "@/types/movie";
import { Card } from "../ui/card";

export default function MovieCard({ movie, onClick }: MovieCardProps) {
  return (
    <Card
      onClick={onClick}
      className="flex flex-col items-center justify-center space-y-4 p-4 bg-gray-200 rounded-lg shadow-md cursor-pointer hover:shadow-xl hover:scale-105 transform transition-all duration-300"
    >
      <div className="flex flex-col items-center justify-center space-y-4 p-4">
        <img
          src={movie.Poster}
          alt={movie.Title}
          className="w-full rounded-lg"
        />
        <div className="text-center">
          <h3 className="text-2xl font-bold mt-2">{movie.Title}</h3>
          <p className="text-sm">{movie.Year}</p>
        </div>
      </div>
    </Card>
  );
}
