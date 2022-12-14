import { useEffect, useState } from 'react'
import MoviesContainer from '../../components/MoviesCardContainer/MoviesContainer'
import api from '../../services/api'

const NowPlayingMovies = () => {

    const [movies, setMovies] = useState([])

    useEffect(() => {

        const loadMovies = async () => {

            const allMovies = await api.get('movie/now_playing',{
                params: {
                    api_key: '52c666c7bba4767d261680869bdc65e5',
                    language: 'pt-BR'
                }
            })

             
            setMovies(allMovies.data.results)

        }

        loadMovies()

    }, [])
  
    return <MoviesContainer movies={movies}/>
}

export default NowPlayingMovies