import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import MoviesContainer from '../../components/MoviesCardContainer/MoviesContainer'
import api from '../../services/api'

const MoviesByGenres = () => {

    const { id } = useParams()

    const [movies, setMovies] = useState([])

    useEffect(() => {

        const loadMovies = async () => {

            const allMovies = await api.get('discover/movie',{
                params: {
                    api_key: '52c666c7bba4767d261680869bdc65e5',
                    language: 'pt-BR',
                    with_genres: id
                }
            })

             
            setMovies(allMovies.data.results)

        }

        loadMovies()

    }, [id])
  
    return <MoviesContainer movies={movies}/>

}

export default MoviesByGenres