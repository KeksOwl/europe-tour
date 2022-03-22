const placesCardsList = document.querySelector('.places-cards__list'); // Список мест

const carouselList = document.querySelector('.places-about__list'); // Карусель ссылок на карточки
const carouselLink = carouselList.querySelectorAll('.places-about__link'); // Все ссылки карточек

const placesCard = document.querySelectorAll('.places-about__card'); // Все карточки
const placesCardArray = Array.from(placesCard); // Массив из всех карточек

// Прячем все карточки (кроме первой), когда js заработает
placesCardArray.slice(1).forEach(placeCard => {
  placeCard.classList.add('places-about__card--hidden');
});

// Добавляем слушатель события на список мест и карусель
[placesCardsList, carouselList].forEach(item => {
  item.addEventListener('click', function (evt) {
    if (evt.target.matches('a')) {
      // Очищаем все ссылки карусели от доп. стилей
      carouselLink.forEach(link => {
        link.classList.remove('places-about__link--actual')
      });

      // Прячем все карточки
      placesCard.forEach(placeCard => {
        placeCard.classList.add('places-about__card--hidden')
      });

      // Добавляем доп. стили текущей ссылке карусели
      carouselLink.forEach(link => {
        if (link.getAttribute('href') === evt.target.getAttribute('href')) {
          link.classList.add('places-about__link--actual');
        }
      })

      // Выбранная карточка (получаем из id evt.target без «#»)
      const card = document.getElementById(evt.target.getAttribute('href').slice(1));

      // Показываем выбранную карточку
      card.classList.remove('places-about__card--hidden');
    }
  });
})
