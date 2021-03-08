export default class Popup {
  constructor(template) {
    this.template = template;
    this.openButton = document.querySelector('#openPopup');
    this.closeButton = null;

    this.openPopup = this.openPopup.bind(this);
    this.closePopup = this.closePopup.bind(this);
  }

  init() {
    this.openButton.addEventListener('click', (evt) => {
      evt.preventDefault();
      this.openPopup();

      this.closeButton = document.querySelector('.popup__logout');
      this.closeButton.addEventListener('click', () => {
        evt.preventDefault();
        this.closePopup();
      });
    });
  }

  openPopup() {
    document.body.appendChild(this.template);
  }

  closePopup() {
    document.body.removeChild(this.template);
  }
}
