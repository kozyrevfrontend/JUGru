export default class Popup {
  constructor(template, subscribeTemplate, questionTemplate) {
    this.template = template;
    this.subscribeTemplate = subscribeTemplate;
    this.questionTemplate = questionTemplate;
    this.openButton = document.querySelector('#openPopup');
    this.closeButton = null;

    this.openPopup = this.openPopup.bind(this);
    this.closePopup = this.closePopup.bind(this);
    this.subscribeSuccessHandler = this.subscribeSuccessHandler.bind(this);
    this.questionSuccessHandler = this.questionSuccessHandler.bind(this);
  }

  init() {
    this.openButton.addEventListener('click', this.openPopup);
  }

  openPopup() {
    document.body.insertAdjacentHTML('beforeend', this.template);

    this.closeButton = document.querySelector('.popup__logout');
    this.closeButton.addEventListener('click', () => {
      this.closePopup();
    });

    const subscribeForm = document.querySelector('.subscribe__form');
    subscribeForm.addEventListener('submit', (evt) => {
      evt.preventDefault();
      this.subscribeSuccessHandler();
    });

    const questionForm = document.querySelector('.question__form');
    const questionInputs = questionForm.querySelectorAll('input[type="checkbox"]');

    questionInputs.forEach((input) => {
      input.addEventListener('change', () => {
        this.questionSuccessHandler();
      });
    });

  }

  closePopup() {
    document.body.removeChild(document.querySelector('.popup'));
  }

  subscribeSuccessHandler() {
    const subscribe = document.querySelector('.subscribe');

    while(subscribe.firstChild) {
      subscribe.removeChild(subscribe.firstChild);
    }

    subscribe.insertAdjacentHTML('beforeend', this.subscribeTemplate);
  }

  questionSuccessHandler() {
    const question = document.querySelector('.question');

    while(question.firstChild) {
      question.removeChild(question.firstChild);
    }

    question.insertAdjacentHTML('beforeend', this.questionTemplate);
  }
}
