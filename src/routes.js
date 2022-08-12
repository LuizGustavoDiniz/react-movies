import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Header from './components/Header/Header'
import CheckWindowWidth from './components/window/CheckWindowWidth'
import Home from './pages/home/index'
import NowPlayingMovies from './pages/movies/NowPlayingMovies'
import AllSeries from './pages/series/AllSeries'
import MoviesByGenres from './pages/movies/MoviesByGenres'
import MovieDetails from './pages/movies/MovieDetails'

const RoutesApp = () => {
   return(
    <BrowserRouter>
    <CheckWindowWidth/>
     <Header/>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/movies/nowplaying' element={<NowPlayingMovies/>} />
        <Route path='/series/all' element={<AllSeries/>} />
        <Route path='/:id/:genre' element={<MoviesByGenres/>} />
        <Route path='/movies/movie/details/:id' element={<MovieDetails/>} />
      </Routes>
      </BrowserRouter>
   )
}

export default RoutesApp