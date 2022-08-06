import'./home.css'
import React, {useState, useEffect} from 'react'
import Dropdown from 'react-bootstrap/Dropdown';
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

    const showMenu = (event) => {
        const element = event.target
        const navBar = document.querySelector('.navbar')

        navBar.classList.toggle('active')
        element.classList.toggle('fa-times')
    
    }

    window.addEventListener('resize', () => {
        const element = document.querySelector('#menu-burguer')
        const navBar = document.querySelector('.navbar')
        const width = document.body.clientWidth
        

        

        if(width > 580){
            navBar.classList.remove('active')
       
            element.classList.remove('fa-times')
        }
    })

  
    return(
        <>
        <header>

            <section className='header'>
            <div className='logo'>
              <Link  to='/'>react<span>movies</span></Link>
            </div>
            <nav className='navbar'>
                 <Link className='menu-link' to=''>Em cartaz</Link>
                 <Dropdown>
      <Dropdown.Toggle variant="success" id="dropdown-basic">
        Dropdown Button
      </Dropdown.Toggle>

      <Dropdown.Menu>
        <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
        <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
        <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
                 <Link className='menu-link' to=''>Séries</Link>
            </nav>

            <span onClick={(event) => showMenu(event)} className='fas fa-bars' id='menu-burguer'></span>
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

export default Home