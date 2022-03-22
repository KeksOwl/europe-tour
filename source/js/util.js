// Проверка нажатия клавиши Escape
const isEscapeKey = (evt) => evt.key === 'Escape';

// Шаблон успешной отправки формы
const messageContainerTemplate = document.querySelector('#success')
  .content
  .querySelector('.success');

// Сообщение об успешной отправке
const showMessage = () => {
  const messageContainer = messageContainerTemplate.cloneNode(true);
  const messageCloseButton = messageContainer.querySelector('.success__button');

  messageContainer.style.zIndex = 100;

  document.body.classList.add('modal-open');

  document.body.append(messageContainer);

  const onPopupEscKeydown = (evt) => {
    if (isEscapeKey(evt)) {
      evt.preventDefault();
      // eslint-disable-next-line no-use-before-define
      onCloseMessageClick();
    }
  };

  const onOutBoxClick = (evt) => {
    if (evt.target === document.body) {
      evt.preventDefault();
      // eslint-disable-next-line no-use-before-define
      onCloseMessageClick();
    }
  };

  const onCloseMessageClick = () => {
    messageContainer.remove();
    messageCloseButton.removeEventListener('click', onCloseMessageClick);
    document.removeEventListener('keydown', onPopupEscKeydown);
    document.removeEventListener('click', onOutBoxClick);
    document.body.classList.remove('modal-open');
  };

  messageCloseButton.addEventListener('click', onCloseMessageClick);
  document.addEventListener('keydown', onPopupEscKeydown);
  document.addEventListener('click', onOutBoxClick);
};

export {isEscapeKey, showMessage};
