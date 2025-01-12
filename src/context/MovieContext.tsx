import { searcDetailhMovieByID, searchMovieByTitle } from "@/api/omdbApi"
import { createContext, useContext, useState } from "react"


interface Movie {
    Title: string
    Year: string
    Posters: string
    imdbID: string
}

interface MovieDetail extends Movie {
    Plot: string
    Genre: string
    Actors: string
    Director: string
    ImdbRating: string
}

interface MovieContextType {
    movies: Movie[]
    selectedMovie: MovieDetail | null
    searchMovies: (query:string) => Promise<void>
    selectMovie: (query:string) => Promise<void>
    closeMovieModal: () => void
}

const MovieContext = createContext<MovieContextType | undefined>(undefined)

type MovieProviderProps = {
    children: React.ReactNode
}

export const MovieProvider = ({children}:MovieProviderProps) => {
    const [movies, setMovies] = useState<Movie[]>([])
    const [selectedMovie, setSelectedMovie] = useState<MovieDetail | null>(null)

    const searhMovieHandler = async (query:string) => {
        const result = await searchMovieByTitle(query)
        setMovies(result || [])
    }

    const selectMovieHandler = async (id:string) => {
        const result = await searcDetailhMovieByID(id)
        setSelectedMovie(result[0] || null)
    }

    const closeMovieModal = () => {
        setSelectedMovie(null)
    }

    return (
        <MovieContext.Provider value={{
            movies,
            selectedMovie,
            searchMovies: searhMovieHandler,
            selectMovie: selectMovieHandler,
            closeMovieModal
        }}>
            {children}
        </MovieContext.Provider>
    )
}

// custom hook untuk useContext
export const useMovieContext = () => {
    const context = useContext(MovieContext)
    if (context === undefined) {
        throw new Error('useMovieContext must be used within a MovieProvider')
    }
    return context
}

