const input = document.querySelector('.input-wrapper');
const span = document.querySelector('.ticket-generation .wrapper span');
const ticketSuccess = document.querySelector('.ticket-success');

const newTicket = () => {
    input.classList.add('hide');
    span.classList.add('hide');
    ticketSuccess.classList.remove('hide');
}