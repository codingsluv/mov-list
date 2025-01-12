const API_KEY = "e6bcb153";
const BASE_URL = "http://www.omdbapi.com/";

// ? fungsi untuk mencari film berdasarkan judul
export const searchMovieByTitle = async (query:string) => {
    try {
        const response = await fetch(`${BASE_URL}/?apikey=${API_KEY}&s=${encodeURIComponent(query)}`);
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        return data.Search || []; // Pastikan mengembalikan array
      } catch (error) {
        console.error("Error fetching movies:", error);
        return []; // Return empty array in case of error
      }
}

// ? fungsi untuk mencari detail film berdasarkan id
export const searcDetailhMovieByID = async (id:string) => {
    const response = await fetch(`${BASE_URL}?apikey=${API_KEY}&i=${id}`);
    const data = await response.json();
    return data
} 