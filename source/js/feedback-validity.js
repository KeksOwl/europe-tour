import { emailInputPattern } from './data.min.js';

const feedbackSection = document.querySelector('.feedback');

const feedbackForm = feedbackSection.querySelector('.feedback__form'); // Форма модалки

const feedbackItem = feedbackSection.querySelectorAll('.feedback__item'); // Элементы списка модалки
const feedbackItemArray = Array.from(feedbackItem); // Массив элементов списка модалки

const feedbackInputPhone = feedbackForm.querySelector('[name=feedback-phone]'); // Инпут телефона
const feedbackInputEmail = feedbackForm.querySelector('[name=feedback-email'); // Инпут почты

// *Что-то на языке пьяного волшебника из «Код и Магия»*
feedbackForm.addEventListener('submit', function (evt) {
  if (!feedbackInputPhone.value && !feedbackInputEmail.value) {
    evt.preventDefault();
    feedbackInputPhone.classList.add('input--error');
    feedbackInputEmail.classList.add('input--error');
    feedbackItemArray.forEach(item => {
      item.classList.add('feedback__item--error');
    })
  } else if (!feedbackInputPhone.value) {
    evt.preventDefault();
    feedbackInputPhone.classList.add('input--error');
    feedbackInputEmail.classList.remove('input--error');
    feedbackItemArray[0].classList.add('feedback__item--error');
    feedbackItemArray[1].classList.remove('feedback__item--error');
  } else if (!feedbackInputEmail.value) {
    evt.preventDefault();
    feedbackInputPhone.classList.remove('input--error');
    feedbackInputEmail.classList.add('input--error');
    feedbackItemArray[0].classList.remove('feedback__item--error');
    feedbackItemArray[1].classList.add('feedback__item--error');
  } else {
    evt.preventDefault();
    feedbackInputPhone.classList.remove('input--error');
    feedbackInputEmail.classList.remove('input--error');
    feedbackItemArray.forEach(item => {
      item.classList.remove('feedback__item--error');
    })
  }
});

// Проверяет на правильность, когда инпут вне фокуса
// (если останется время — добавлю паттерном)
feedbackInputPhone.addEventListener('focusout', function () {
  if (feedbackInputPhone.value.length !== 10 || isNaN(feedbackInputPhone.value)) {
    feedbackInputPhone.classList.add('input--error');
    feedbackItemArray[0].classList.add('feedback__item--error');
  } else {
    feedbackInputPhone.classList.remove('input--error');
    feedbackItemArray[0].classList.remove('feedback__item--error');
  }
});

feedbackInputEmail.addEventListener('focusout', function () {
  if (!emailInputPattern.test(feedbackInputEmail.value)) {
    feedbackInputEmail.classList.add('input--error');
    feedbackItemArray[1].classList.add('feedback__item--error');
  } else {
    feedbackInputEmail.classList.remove('input--error');
    feedbackItemArray[1].classList.remove('feedback__item--error');
  }
});

// Если вы видите эту надпись,
// значит я не успел отрефакторить
// и представить этот модуль в более «умном» варианте
// (а мог бы)

export { feedbackForm, feedbackInputPhone, feedbackInputEmail };
