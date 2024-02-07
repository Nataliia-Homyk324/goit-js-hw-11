import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";
// import SimpleLightbox from "simplelightbox";
// import "simplelightbox/dist/simple-lightbox.min.css";

const formSearch = document.querySelector('.form-search');
const listImages = document.querySelector('.gallery');
const loader = document.querySelector('.loader');


//повідомлення Loading images, please wait... не відображаєм на сторінці 
loader.style.display = 'none';
// слухач події сабміт - форма
formSearch.addEventListener('submit', onSearch);

//ця функція обробник події сабміт  
function onSearch(event) {
    //сброс дефолтних налаштувань форми після події сабміт
    event.preventDefault();
    if (event.currentTarget.elements.search === '') {
        
        return iziToast.show({
    title: 'Hey',
    message: 'What would you like to add?'
        });
    }
}


