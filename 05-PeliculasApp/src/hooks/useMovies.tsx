import { useEffect, useState } from "react"
import movieDB from "../api/moviDB"
import { MovieDBMoviesResponse, Movie } from '../interface/movieInterface';



interface MoviesState{
    nowPlaying:Movie[]
    popular:Movie[]
    topRated:Movie[]
    upcoming:Movie[]
}
export const useMovies = () => {
    const [isLoading, setIsLoading]= useState(true)
    const [ movieState, setMovieState] = useState<MoviesState>({
        nowPlaying:[],
        popular : [],
        topRated: [],
        upcoming: [],
    })


    const getMovies= async ()=>{
        const nowPlayingPromise= movieDB.get<MovieDBMoviesResponse>('/now_playing')
        const popularPromise= movieDB.get<MovieDBMoviesResponse>('/popular')
        const topRatedPromise= movieDB.get<MovieDBMoviesResponse>('/top_rated')
        const upcomingPromise= movieDB.get<MovieDBMoviesResponse>('/upcoming')

        const res = await Promise.all([ 
            nowPlayingPromise,
            popularPromise , 
            topRatedPromise, 
            upcomingPromise ]);
        
        setMovieState({
            nowPlaying:res[0].data.results,
            popular:res[1].data.results,
            topRated:res[2].data.results,
            upcoming:res[3].data.results
        })
        
        setIsLoading(false)
        }
    
    useEffect(() => {
        getMovies()
        }, [])
        
    
    return {
        ...movieState,
        isLoading
        
    }
}
