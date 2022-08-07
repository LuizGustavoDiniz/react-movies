import { BrowserRouter, Routes, Route } from 'react-router-dom'
import CheckWindowWidth from './components/CheckWindowWidth'
import Header from './components/Header'
import Home from './pages/home/index'
import NowPlayingMovies from './pages/movies/NowPlayingMovies'
import MoviesCategories from './pages/movies/MoviesCategories'
import AllSeries from './pages/series/AllSeries'

const RoutesApp = () => {
   return(
    <BrowserRouter>
    <CheckWindowWidth/>
    <Header/>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/movies/nowplaying' element={<NowPlayingMovies/>} />
        <Route path='/movies/categories' element={<MoviesCategories/>} />
        <Route path='/series/all' element={<AllSeries/>} />
      </Routes>
      </BrowserRouter>
   )
}

export default RoutesApp