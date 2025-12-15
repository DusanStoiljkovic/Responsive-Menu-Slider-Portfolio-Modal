const mobileMenu = () => {
    let btn = document.querySelector('.header button')
    let menu = document.querySelector('.header ul')

    if(btn.innerText === 'MENU') {
        menu.style.display = 'block'
        btn.innerText = 'CLOSE'
    } else {
        menu.style.display = 'none'
        btn.innerText = 'MENU'
    }
}