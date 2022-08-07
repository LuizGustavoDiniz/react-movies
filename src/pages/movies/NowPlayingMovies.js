import { useEffect, useState } from 'react'
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
  
    return(
        <>
        <main>

             <section className='home'>
             
             
             {movies.map((movie) => {
                 return(
                       <div key={movie.id} className="movies-container">
                        <div className="movie-poster">
                        <img src= {`https://image.tmdb.org/t/p/original/${movie.poster_path}`}  alt="..."/>
                        </div>
                          <div className="card-body">
                            <h5 className="card-title">{movie.title}</h5>
                            <p className="card-text"><i className="fab fa-imdb text-light"></i>Nota: 6.5/10</p>
                            <div className='btn-container'>
                            <a href="..." className="btn">ver detalhes</a> 
                            </div>
                          </div>
                      </div>
                 )
             })}
                    

             </section>
        </main>
        </>
    )

}

export default NowPlayingMovies