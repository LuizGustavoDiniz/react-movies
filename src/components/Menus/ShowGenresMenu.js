const showGenresMenu = (event) => {
    const element = event.target
    const navBar = document.querySelector('.navbar')
    const menuBurguer = document.querySelector('#menu-burguer')
    const menuGenreGroup = document.querySelector('.genre-group-container')
 
    menuGenreGroup.classList.toggle('active')
    element.classList.toggle('fa-grip-lines-vertical')

    const isActive = menuGenreGroup.className.includes('active')

    if(isActive){
        navBar.classList.remove('active')
        menuBurguer.classList.remove('fa-times')
    }
     
 }
 
 export default showGenresMenu