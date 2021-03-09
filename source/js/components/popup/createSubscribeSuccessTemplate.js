export const createSubscribeSuccessTemplate = () => {
  return (
    `<div class="subscribe__slogan subscribe__slogan--success">
      <div class="subscribe__slogan-icon">
        <picture>
          <source type="image/avif" srcset="img/emoji-hi@2x.avif 1x, img/emoji-hi@2x.avif 2x">
          <source type="image/webp" srcset="img/emoji-hi@2x.webp 1x, img/emoji-hi@2x.webp 2x">
          <img src="img/emoji-hi@1x.png" srcset="img/emoji-hi@2x.png 2x" alt="Просто ужас" width="60" height="60">
        </picture>
      </div>
      <b class="subscribe__slogan-text">Я хочу знать, когда будет офлайн</b>
    </div>
    <p class="subscribe__success">Спасибо, что подписались на нашу рассылку!</p>`
  );
};
