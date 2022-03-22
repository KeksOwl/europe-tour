import { showMessage } from './util.min.js';

const sendData = (onSuccess, onFail, body) => {
  fetch(
    'https://echo.htmlacademy.ru',
    {
      method: 'GET',
      body,
    },
  )
    .then((response) => {
      if (response.ok) {
        onSuccess();
        showMessage();
      } else {
        onFail();
      }
    })
    .catch(() => {
      onFail();
    });
};

export { sendData };
