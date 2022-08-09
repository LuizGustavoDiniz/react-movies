import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Header from './components/Header/Header'
import CheckWindowWidth from './components/window/CheckWindowWidth'
import Home from './pages/home/index'
import NowPlayingMovies from './pages/movies/NowPlayingMovies'
import AllSeries from './pages/series/AllSeries'
import MoviesByGenres from './pages/movies/MoviesByGenres'

const RoutesApp = () => {
   return(
    <BrowserRouter>
    <CheckWindowWidth/>
     <Header/>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/movies/nowplaying' element={<NowPlayingMovies/>} />
        <Route path='/series/all' element={<AllSeries/>} />
        <Route path='/movies/genre/:id/:genre' element={<MoviesByGenres/>} />
      </Routes>
      </BrowserRouter>
   )
}

export default RoutesApp