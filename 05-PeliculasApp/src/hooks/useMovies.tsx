import { useEffect, useState } from "react"
import movieDB from "../api/moviDB"
import { MovieDBNowPlaying, Movie } from '../interface/movieInterface';


export const useMovies = () => {
    const [isLoading, setIsLoading]= useState(true)
    const [ peliculasEstreno, setPeliculasEstreno] = useState<Movie[]>([])

    const getMovies= async ()=>{
        const response = await movieDB.get<MovieDBNowPlaying>('/now_playing')
        const peliculas= response.data.results
        setPeliculasEstreno( peliculas )
        setIsLoading(false)
        }
    
    useEffect(() => {
        getMovies()
        }, [])
        

    return {
        peliculasEstreno,
        isLoading
    }
}
