import'./home.css'
import {useState, useEffect} from 'react'
import { Link } from 'react-router-dom'
import api from '../../services/api'

const Home = () => {

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
        <header>

            <section className='header'>
            <div className='logo'>
              <Link  to='/'>react<span>movies</span></Link>
            </div>
            <nav className='navbar' >
              <Link className='menu-link' to=''>Em cartaz</Link>
              <Link className='menu-link' to=''>Filmes</Link>
              <Link className='menu-link' to=''>Séries</Link>
            </nav>
            </section>
        </header>

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
                            <p className="card-text"><i className="fab fa-imdb text-light"></i></p>
                            <a href="..." className="btn btn-primary">ver detalhes</a> 
                          </div>
                      </div>
                 )
             })}
                    

             </section>
        </main>
        </>
    )

}

export default Home