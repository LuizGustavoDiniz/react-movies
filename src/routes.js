import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Header from './components/Header/Header'
import CheckWindowWidth from './components/window/CheckWindowWidth'
import Home from './pages/home/index'
import NowPlayingMovies from './pages/movies/NowPlayingMovies'
import MoviesByGenres from './pages/movies/MoviesByGenres'
import MovieDetails from './pages/movies/MovieDetails'
import BestMovies from './pages/movies/BestMovies'
import FavoriteMovies from './pages/movies/Favorites'

const RoutesApp = () => {
   return(
    <BrowserRouter>
    <CheckWindowWidth/>
     <Header/>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/movies/nowplaying' element={<NowPlayingMovies/>} />
        <Route path='/:id/:genre' element={<MoviesByGenres/>} />
        <Route path='/movies/movie/details/:id' element={<MovieDetails/>} />
        <Route path='/bestMovies' element={<BestMovies/>}/>
        <Route path='/favorites' element={<FavoriteMovies/>}/>
      </Routes>
      </BrowserRouter>
   )
}

export default RoutesApp