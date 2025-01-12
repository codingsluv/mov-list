import { MovieCardProps } from "@/types/movie";
import { Card } from "../ui/card";

export default function MovieCard({movie}:MovieCardProps) {
  return (
    <Card className="flex flex-col items-center justify-center space-y-4 p-4 bg-gray-200 rounded-lg shadow-md cursor-pointer hover:shadow-lg">
      <div className="flex flex-col items-center justify-center space-y-4 p-4">
        <img
          src={movie.Posters}
          alt={movie.Title}
          className="w-full rounded-lg"
        />
        <div className="text-center">
          <h3 className="text-2xl font-bold mt-2">{movie.Title}</h3>
          <p className="text-sm">
            Batman begins his war on crime with his new partner, the joker.
          </p>
          <p className="text-sm">
            {movie.Year}
          </p>
          <div className="flex items-center justify-center space-x-2">
            <button className="bg-primary text-white px-4 py-2 rounded-lg">
              Play
            </button>
            <button className="bg-slate-300 text-black px-4 py-2 rounded-lg">
              Watch
            </button>
          </div>
        </div>
      </div>
    </Card>
  );
}
