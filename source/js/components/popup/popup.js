export default class Popup {
  constructor(template) {
    this.template = template;
    this.openButton = document.querySelector('#openPopup');
    this.closeButton = null;

    this.openPopup = this.openPopup.bind(this);
    this.closePopup = this.closePopup.bind(this);
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
  }

  closePopup() {
    document.body.removeChild(document.querySelector('.popup'));
  }
}
