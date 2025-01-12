
import { MovieProvider } from "./context/MovieContext";
import Home from "./pages/Home";

export default function App() {
  
  return (
    <MovieProvider>
      <Home />
    </MovieProvider>
  );
}