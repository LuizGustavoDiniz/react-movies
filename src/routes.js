import { BrowserRouter, Routes, Route } from 'react-router-dom'
import CheckWindowWidth from './components/window/CheckWindowWidth'
import Home from './pages/home/index'
import NowPlayingMovies from './pages/movies/NowPlayingMovies'
import AllSeries from './pages/series/AllSeries'
import MoviesByGenres from './pages/movies/MoviesByGenres'

const RoutesApp = () => {
   return(
    <BrowserRouter>
    <CheckWindowWidth/>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/movies/nowplaying' element={<NowPlayingMovies/>} />
        <Route path='/series/all' element={<AllSeries/>} />
        <Route path='/movies/genre/:id' element={<MoviesByGenres/>} />
      </Routes>
      </BrowserRouter>
   )
}

export default RoutesApp