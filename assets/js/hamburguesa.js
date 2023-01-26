const toggleMenuElement = document.getElementById('toggle-menu');
const mainMenuElement = document.getElementById('lista');


toggleMenuElement.addEventListener('click' ,() =>{
    mainMenuElement.classList.toggle('listado--show')
});