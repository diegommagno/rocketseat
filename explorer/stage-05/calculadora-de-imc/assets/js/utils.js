import { Modal } from './modal.js';

export function calculateIMC(weight, height) {
  return (weight / ((height / 100) ** 2)).toFixed(2)
}

export function notANumber(value) {
  return isNaN(value) || value == '' // returns true if not a number ou vazio. If a number, false.
}

export function displayResultMessage(result) {
  const message = `Your BMI is ${result}.`
  Modal.message.innerText = message
  Modal.open()
}