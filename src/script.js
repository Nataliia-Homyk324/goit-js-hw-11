import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';


import iconRejected from './img/octagon.png'

const formSearch = document.querySelector('.form-search');
const listImages = document.querySelector('.gallery');
const loader = document.querySelector('.loader');


loader.style.display = 'none';

formSearch.addEventListener('submit', onSearch);


function onSearch(event) {
    //сброс дефолтних налаштувань форми після події сабміт
    event.preventDefault();
    // поле введення запиту не може бути порожнім при натисканні на кнопку відправки форми
    if (event.target.elements.search.value === '') {
        iziToast.error({
        message: `The search query cannot be empty`,
        timeout: 5000,
        close: false,
        position: 'topLeft',
        backgroundColor: '#ef4040',
        messageSize: 16,
        messageColor: '#fff',
        title: 'Error',
        titleSize: 16,
        titleColor: '#fff',
        iconUrl: iconRejected,
        });
        return; 
    }
    //відображаєм повідомлення про завантаження зображень
    loader.style.display = 'block';

    const inputValue = event.target.elements.search.value.trim();
//  очищаємо галерею перед новим пошуком
    listImages.innerHTML = '';

    getPictures(inputValue)
    .then(data => {
      loader.style.display = 'none';

      if (!data.hits.length) {
        iziToast.show({
        title: 'Sorry,',
        message: ' there are no images matching your search query. Please try again!',
        position: 'topLeft',
        backgroundColor: '#ef4040',
        messageSize: 16,
        messageColor: '#fff',
        titleSize: 16,
        titleColor: '#fff',
        iconUrl: iconRejected,
        });
        }
        console.log(data.hits);
        console.log(data.hits.length);


     listImages.insertAdjacentHTML('afterbegin', createMarkup(data.hits));
      const refreshPage = new SimpleLightbox('.gallery a', {
        captions: true,
        captionsData: 'alt',
        captionDelay: 250,
      });
      refreshPage.refresh();

      formSearch.reset();
    })
    .catch((error) => {
      loader.style.display = 'none';
      console.log(error);
    });

}


function getPictures(name) {
  const BASE_URL = 'https://pixabay.com/api/';
    const KEY = '42245088-70138ac1b5442bea0784205eb';
    
  const searchParams = new URLSearchParams({
    key: KEY,
    q: name,
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: true,
  })

  return fetch(`${BASE_URL}?${searchParams}`)
    .then(response => {
      if (!response.ok) {
        throw new Error(response.statusText);
      }
      return response.json();
    })
    
}


function createMarkup(arr) {
  return arr.map(({ webformatURL, largeImageURL, tags, likes, views, comments, downloads }) =>
    `<li class="gallery-item">
          <a class="gallery-link" href="${largeImageURL}">
            <img
              class="gallery-image"
              src="${webformatURL}"
              alt="${tags}"
              width="360"
            />
          </a>
          <div class="thumb-block">
            <div class="block">
              <h2 class="tittle">Likes</h2>
              <p class="amount">${likes}</p>
            </div>
            <div class="block">
              <h2 class="tittle">Views</h2>
              <p class="amount">${views}</p>
            </div>
            <div class="block">
              <h2 class="tittle">Comments</h2>
              <p class="amount">${comments}</p>
            </div>
            <div class="block">
              <h2 class="tittle">Downloads</h2>
              <p class="amount">${downloads}</p>
            </div>
          </div>
        </li>`)
    .join('');
}




