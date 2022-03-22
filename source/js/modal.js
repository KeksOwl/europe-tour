import { isEscapeKey } from './util.min.js';
import { modalWindow, modalForm, modalInputPhone, modalInputEmail } from './modal-validity.min.js';
import { sendData } from './api.min.js';

const modalCloseButton = modalWindow.querySelector('.modal__button--close');

// Прячем модалку по умолчанию при загрузке js
modalWindow.style.display = 'none';

// Задаём классы модалки при загрузке js
modalWindow.classList.add('modal--popup');

// Обработчик закрытия модального окна при нажатии ESC
const onPopupEscKeydown = (evt) => {
  if (isEscapeKey(evt)) {
    evt.preventDefault();
    // eslint-disable-next-line no-use-before-define
    modalClose();
  }
};

// onFail не успел сделать (но он по ТЗ и не требуется)
const setUserFormSubmit = (onSuccess) => {
  modalForm.addEventListener('submit', (evt) => {
    evt.preventDefault();

    sendData(
      () => onSuccess(),
    );
  });
};

// Обработчик закрытия модального окна при клике на область позади окна
const onOverlayClick = (evt) => {
  if (evt.target === document.body) {
    modalClose();
  }
}

// Функция закрытия модального окна
const modalClose = () => {
  modalWindow.style.display = 'none';
  document.body.classList.remove('modal-open');
  document.removeEventListener('keydown', onPopupEscKeydown);
  document.removeEventListener('click', onOverlayClick);

  modalInputPhone.value = '';
  modalInputEmail.value = '';
}

document.addEventListener('click', function (evt) {
  if (evt.target.getAttribute('href') === '#modal') {

    // Отображение модального окна
    modalWindow.style.display = 'flex';
    modalCloseButton.style.display = 'block';
    document.body.classList.add('modal-open');

    // Закрытие окна при нажатии ESC
    document.addEventListener('keydown', onPopupEscKeydown);

    // Закрытие окна при клике на область позади модалки
    document.addEventListener('click', onOverlayClick);

  }
})

// Событие закрытия модального окна при нажатии на «крестик»
modalCloseButton.addEventListener('click', () => {
  modalClose();
})

setUserFormSubmit(modalClose);
