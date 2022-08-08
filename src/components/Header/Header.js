import './Header.css'
import {Link} from 'react-router-dom'
import showMenu from '../Menus/ShowMenu'
import showGenresMenu from '../Menus/ShowGenresMenu'

const Header = () => {
    return(
        <header>
            <section className='header'>
            <span onClick={(event) => showGenresMenu(event)} className="fas fa-grip-lines" id="menu-genre"></span>
            <div className='logo'>
              <Link  to='/'>react<span>movies</span></Link>
            </div>
            <nav className='navbar'>
                 <Link className='menu-link' to='/movies/nowplaying'>em cartaz</Link>
                 <Link className='menu-link' to='/movies/categories'>filmes</Link>
                 <Link className='menu-link' to='/series/all'>séries</Link>
            </nav>

            <span onClick={(event) => showMenu(event)} className='fas fa-bars' id='menu-burguer'></span>
            </section>
        </header>
    )
}

export default Header