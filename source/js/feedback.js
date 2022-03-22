import { feedbackForm, feedbackInputPhone, feedbackInputEmail } from './feedback-validity.min.js';
import { sendData } from './api.min.js';

// onFail не успел сделать (но он по ТЗ и не требуется)
const setUserFormSubmit = (onSuccess) => {
  feedbackForm.addEventListener('submit', (evt) => {
    evt.preventDefault();

    sendData(
      () => onSuccess(),
    );
  });
};

// Сброс значений при закрытии модального окна
const feedbackClose = () => {
  feedbackInputPhone.value = '';
  feedbackInputEmail.value = '';
}

setUserFormSubmit(feedbackClose);
