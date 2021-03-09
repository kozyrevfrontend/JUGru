export const createQuestionSuccessTemplate = () => {
  return (
    `<div class="question__success">
      <div class="question__success-icon">
        <picture>
          <source type="image/avif" srcset="img/emoji-thumbs-up@2x.avif 1x, img/emoji-thumbs-up@2x.avif 2x">
          <source type="image/webp" srcset="img/emoji-thumbs-up@2x.webp 1x, img/emoji-thumbs-up@2x.webp 2x">
          <img src="img/emoji-thumbs-up@1x.png" srcset="img/emoji-thumbs-up@2x.png 2x" alt="Просто ужас" width="100" height="100">
        </picture>
      </div>
      <p>Спасибо, что поделились!</p>
    </div>`
  );
};
