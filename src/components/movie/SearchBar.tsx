import { useMovieContext } from "@/context/MovieContext";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { FormEvent, useState } from "react";


export default function SearchBar() {
    const {searchMovies} = useMovieContext()
    const [query, setQuery] = useState<string>("")
    const handleSubmit = (e:FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        if(query.trim()) {
            searchMovies(query)
        }
    }
  return (
    <form onSubmit={handleSubmit} className="flex w-full max-w-sm items-center space-x-4 p-4 rounded-lg border border-border bg-background px-4 py-2">
        <Input type="search" placeholder="Search a movie..." className="bg-slate-300 w-full text-black px-4 py-2" value={query} onChange={(e) => setQuery(e.target.value)} />
        <Button type="submit" className="bg-primary text-white px-4 py-2 hover:bg-red-500">Search</Button>
    </form>
  );
}
