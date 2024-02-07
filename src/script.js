import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";
// import SimpleLightbox from "simplelightbox";
// import "simplelightbox/dist/simple-lightbox.min.css";

import iconRejected from "./img/octagon.png"

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
    // поле введення запиту не може бути порожнім при натисканні на кнопку відправки форми
    if (event.currentTarget.elements.search.value === '') {
        iziToast.error({
        message: `The search query cannot be empty`,
        timeout: 5000,
        close: false,
        position: "topRight",
        color: "#ef4040",
        messageSize: 16,
        messageColor: "	#fff",
        title: "Error",
        titleSize: 16,
        titleColor: "#fff",
        iconUrl: iconRejected,
        });
        return; 
    }
    //відображаєм повідомлення про завантаження зображень
    loader.style.display = 'flex';
    event.currentTarget.elements.search.value = 'Search images....';

    const inputValue = event.target.elements.search.value;

}


