import './MoviesContainer.css'
import { Link } from 'react-router-dom'
import '../Header/Header.css'


const MovieContainer = (props) => {

    return(
        <>

        {props.genre 
        ? <h1 className='movies-title1'>filmes gênero : {props.genre}</h1>

        :  <h1 className='movies-title2'>filmes :</h1>

        }

       
        
        <main>

        <nav className='genre-group-container'>

                <h2 className='genre-title'>gêneros</h2>

                <Link className='group-link' to='/28/ação'>ação</Link>
                <Link className='group-link' to='/12/aventura'>aventura</Link>
                <Link className='group-link' to='/16/animação'>animação</Link>
                <Link className='group-link' to='/35/comédia'>comédia</Link>
                <Link className='group-link' to='/80/crime'>crime</Link>
                <Link className='group-link' to='/99/documentário'>documentário</Link>
                <Link className='group-link' to='/18/drama'>drama</Link>
                <Link className='group-link' to='/10751/família'>família</Link>
                <Link className='group-link' to='/14/fantasia'>fantasia</Link>
                <Link className='group-link' to='/36/história'>história</Link>
                <Link className='group-link' to='/27/terror'>terror</Link>
                <Link className='group-link' to='/10404/música'>música</Link>
                <Link className='group-link' to='/9648/mistério'>mistério</Link>
                <Link className='group-link' to='/10749/romance'>romance</Link>
                <Link className='group-link' to='/878/ficção científica'>ficção científica</Link>
                <Link className='group-link' to='/10752/guerra'>guerra</Link>
                <Link className='group-link' to='/37/faroeste'>faroeste</Link>
            </nav>


             <section className='home'>
             
             {props.movies.map((movie) => {
                 return(
                    
                       <div key={movie.id} className="movies-container">
                        <div className="movie-poster">
                        <img src= {`https://image.tmdb.org/t/p/original/${movie.poster_path}`}  alt="..."/>
                        </div>
                          <div className="card-body">
                            <h5 className="card-title">{movie.title}</h5>
                            <p className="card-text"><i className="fab fa-imdb text-light"></i>Nota: {movie.vote_average}/10</p>
                            <div className='btn-container'>
                            <a href={`/movies/movie/details/${movie.id}`} className="btn">ver detalhes</a> 
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

export default MovieContainer