import'./home.css'
import React, {useState, useEffect} from 'react'
import api from '../../services/api'
import MoviesContainer from '../../components/MoviesCardContainer/MoviesContainer'

const Home = () => {

    const [movies, setMovies] = useState([])

    useEffect(() => {

        const loadMovies = async () => {

            const allMovies = await api.get('movie/popular',{
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

export default Home