
const CheckWindowWidth = () => {

    window.addEventListener('resize', () => {
        const element = document.querySelector('#menu-burguer')
        const navBar = document.querySelector('.navbar')
        const width = document.body.clientWidth
        

        

        if(width > 580){
            navBar.classList.remove('active')
       
            element.classList.remove('fa-times')
        }
    })

}

export default CheckWindowWidth