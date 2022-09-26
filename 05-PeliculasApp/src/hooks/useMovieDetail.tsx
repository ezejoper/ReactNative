import { useState, useEffect } from 'react';
import movieDB from '../api/moviDB';
import { MovieFull } from '../interface/movieInterface';
import { Credits, Cast } from '../interface/creditsInterface';

interface MovieDetail{
    cast:Cast[],
    isLoading:boolean,
    movieFull?:MovieFull

}

export const useMovieDetail = (movieId:number) => {
    const [state, setState] = useState<MovieDetail>({
        cast:[],
        isLoading:true,
        movieFull:undefined,
        
    })


    const getMovieDetail = async ()=>{
        const movieDetailPromise=  movieDB.get<MovieFull>(`/${movieId}`)
        const creditsPromise= movieDB.get<Credits>(`/${movieId}/credits`)

    const [castingRes, movieDetailRes]= await Promise.all([
        creditsPromise,
        movieDetailPromise
    ])

    setState({
        cast:castingRes.data.cast,
        isLoading:false,
        movieFull:movieDetailRes.data
    })
    }



    useEffect(() => {
     getMovieDetail()
    }, [])
    
    return{
        ...state
    }
}
