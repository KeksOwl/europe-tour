import { emailInputPattern } from './data.min.js';

const modalWindow = document.querySelector('.modal');

const modalForm = modalWindow.querySelector('.modal__form'); // Форма модалки

const modalItem = modalWindow.querySelectorAll('.modal__item'); // Элементы списка модалки
const modalItemArray = Array.from(modalItem); // Массив элементов списка модалки

const modalInputPhone = modalForm.querySelector('[name=modal-phone]'); // Инпут телефона
const modalInputEmail = modalForm.querySelector('[name=modal-email'); // Инпут почты

// *Что-то на языке пьяного волшебника из «Код и Магия»*
modalForm.addEventListener('submit', function (evt) {
  if (!modalInputPhone.value && !modalInputEmail.value) {
    evt.preventDefault();
    modalInputPhone.classList.add('input--error');
    modalInputEmail.classList.add('input--error');
    modalItemArray.forEach(item => {
      item.classList.add('modal__item--error');
    })
  } else if (!modalInputPhone.value) {
    evt.preventDefault();
    modalInputPhone.classList.add('input--error');
    modalInputEmail.classList.remove('input--error');
    modalItemArray[0].classList.add('modal__item--error');
    modalItemArray[1].classList.remove('modal__item--error');
  } else if (!modalInputEmail.value) {
    evt.preventDefault();
    modalInputPhone.classList.remove('input--error');
    modalInputEmail.classList.add('input--error');
    modalItemArray[0].classList.remove('modal__item--error');
    modalItemArray[1].classList.add('modal__item--error');
  } else {
    evt.preventDefault();
    modalInputPhone.classList.remove('input--error');
    modalInputEmail.classList.remove('input--error');
    modalItemArray.forEach(item => {
      item.classList.remove('modal__item--error');
    })
  }
});

// Проверяет на правильность, когда инпут вне фокуса
// (если останется время — добавлю паттерном)
modalInputPhone.addEventListener('focusout', function () {
  if (modalInputPhone.value.length !== 10 || isNaN(modalInputPhone.value)) {
    modalInputPhone.classList.add('input--error');
    modalItemArray[0].classList.add('modal__item--error');
  } else {
    modalInputPhone.classList.remove('input--error');
    modalItemArray[0].classList.remove('modal__item--error');
  }
});

modalInputEmail.addEventListener('focusout', function () {
  if (!emailInputPattern.test(modalInputEmail.value)) {
    modalInputEmail.classList.add('input--error');
    modalItemArray[1].classList.add('modal__item--error');
  } else {
    modalInputEmail.classList.remove('input--error');
    modalItemArray[1].classList.remove('modal__item--error');
  }
});

// Если вы видите эту надпись,
// значит я не успел отрефакторить
// и представить этот модуль в более «умном» варианте
// (а мог бы)

export { modalWindow, modalForm, modalInputPhone, modalInputEmail };
