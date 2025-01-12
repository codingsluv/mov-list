import MovieList from "./components/movie/MovieList";
import MovieModal from "./components/movie/MovieModal";
import SearchBar from "./components/movie/SearchBar";
import { MovieProvider } from "./context/MovieContext";
import Home from "./pages/Home";

export default function App() {
  
  return (
    <MovieProvider>
      <Home />
    </MovieProvider>
  );
}