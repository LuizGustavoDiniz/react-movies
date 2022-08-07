import { Link } from "react-router-dom"

const Header = () => {

    const showMenu = (event) => {
        const element = event.target
        const navBar = document.querySelector('.navbar')

        navBar.classList.toggle('active')
        element.classList.toggle('fa-times')
    
    }

   return(
    <header>

            <section className='header'>
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