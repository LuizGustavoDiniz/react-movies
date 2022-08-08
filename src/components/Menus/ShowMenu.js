const showMenu = (event) => {
    const element = event.target
    const navBar = document.querySelector('.navbar')
    const menuGenreGroup = document.querySelector('.genre-group-container')
    const menuGenre = document.querySelector('#menu-genre')

    navBar.classList.toggle('active')
    element.classList.toggle('fa-times')

    const isActive = navBar.className.includes('active')

    if(isActive){
       menuGenreGroup.classList.remove('active')
       menuGenre.classList.remove('fa-grip-lines-vertical')
    }

}

export default showMenu