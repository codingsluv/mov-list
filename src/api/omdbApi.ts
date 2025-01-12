const API_KEY = import.meta.env.REACT_APP_OMDB_API_KEY || "e6bcb153";
const BASE_URL = import.meta.env.REACT_APP_OMDB_BASE_URL || "http://www.omdbapi.com/";

// ? fungsi untuk mencari film berdasarkan judul
export const searchMovieByTitle = async (query:string) => {
    const response = await fetch(`${BASE_URL}?apikey=${API_KEY}&s=${query}`);
    const data = await response.json();
    console.log(data)
}

// ? fungsi untuk mencari detail film berdasarkan id
export const searcDetailhMovieByID = async (id:string) => {
    const response = await fetch(`${BASE_URL}?apikey=${API_KEY}&i=${id}`);
    const data = await response.json();
    return data
} 