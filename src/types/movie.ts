export type MovieCardProps = {
    movie: {
        Title: string
        Year: string
        Poster: string
        imdbID: string

    }
    onClick: () => void
}