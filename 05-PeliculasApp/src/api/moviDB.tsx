import axios from 'axios'


const movieDB = axios.create({
    baseURL:'https://api.themoviedb.org/3/movie',
    params:{
        api_key:'dc9961705c2212cb8de17b1c6b840bff',
        language:'es-MX'
    }
})

export default movieDB