import { inputWeight, inputHeight } from './main.js';

export const AlertError = {
  element: document.querySelector('.alert-error'),
  open() {
    AlertError.element.classList.add('open')
  },
  close() {
    AlertError.element.classList.remove('open')
  },
  closeAlertError() {
    inputWeight.oninput = () => AlertError.close()
    inputHeight.oninput = () => AlertError.close()
  }
}

