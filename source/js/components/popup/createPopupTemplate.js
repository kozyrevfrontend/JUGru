export const createPopupTemplate = () => {
  return (
    `<div class="popup">
      <div class="container container--grid">
        <div class="popup__subscribe subscribe">
          <div class="subscribe__slogan">
            <div class="subscribe__slogan-icon">
              <picture>
                <source type="image/avif" srcset="img/emoji-hi@2x.avif 1x, img/emoji-hi@2x.avif 2x">
                <source type="image/webp" srcset="img/emoji-hi@2x.webp 1x, img/emoji-hi@2x.webp 2x">
                <img src="img/emoji-hi@1x.png" srcset="img/emoji-hi@2x.png 2x" alt="Просто ужас" width="60" height="60">
              </picture>
            </div>
            <b class="subscribe__slogan-text">Я хочу знать, когда будет офлайн</b>
          </div>
          <form class="subscribe__form" action="#" method="post">
            <p class="subscribe__input-wrapper">
              <label class="visually-hidden" for="user-email">Укажите ваш email</label>
              <input type="email" name="user-email" id="user-email" placeholder="Укажите email" required>
            </p>
            <button class="subscribe__button button button--light" type="submit">
              <span>Подписаться</span>
            </button>
          </form>
          <div class="subscribe__info">
            <p>Нажимая на кнопку вы соглашаетесь на обработку <a href="#">персональных данных</a></p>
          </div>
        </div>
        <div class="popup__question question">
          <div class="question__slogan">
            <div class="question__slogan-icon">
              <picture>
                <source type="image/avif" srcset="img/emoji-facepalm@2x.avif 1x, img/emoji-facepalm@2x.avif 2x">
                <source type="image/webp" srcset="img/emoji-facepalm@2x.webp 1x, img/emoji-facepalm@2x.webp 2x">
                <img src="img/emoji-facepalm@1x.png" srcset="img/emoji-facepalm@2x.png 2x" alt="Просто ужас" width="60" height="60">
              </picture>
            </div>
            <b class="question__slogan-text">Идите в жопу!</b>
          </div>
          <form class="question__form" action="#" method="post">
            <ul class="question__list">
              <li class="question__item">
                <input class="visually-hidden" type="checkbox" name="question" value="high-price" id="high-price">
                <label for="high-price"><span>Вы свои цены видели?</span></label>
              </li>
              <li class="question__item">
                <input class="visually-hidden" type="checkbox" name="question" value="bad-presentations" id="bad-presentations">
                <label for="bad-presentations"><span>Доклады ни о чем</span></label>
              </li>
              <li class="question__item">
                <input class="visually-hidden" type="checkbox" name="question" value="are-you-ok" id="are-you-ok">
                <label for="are-you-ok"><span>У вас там все хорошо?</span></label>
              </li>
              <li class="question__item">
                <input class="visually-hidden" type="checkbox" name="question" value="no-money" id="no-money">
                <label for="no-money"><span>Денег нет, но вы держитесь</span></label>
              </li>
            </ul>
          </form>
        </div>
        <a class="popup__logout" href="#">
          <svg width="24" height="39">
            <use href="img/sprite_auto.svg#icon-arrow-left"></use>
          </svg>
          <span>Я кликнул просто посмотреть</span>
        </a>
      </div>
    </div>`
  );
};
