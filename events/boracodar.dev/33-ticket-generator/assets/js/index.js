const input = document.querySelector('.input-wrapper');
const span = document.querySelector('.ticket-generation .wrapper span');
const ticketSuccess = document.querySelector('.ticket-success');

const newBgImg = 'https://github.com/diegommagno.png';

const newTicket = () => {
    input.classList.add('hide');
    span.classList.add('hide');
    ticketSuccess.classList.remove('hide');

    const avatarImage = document.querySelector('.ticket #img-avatar');
    if (avatarImage) {
        avatarImage.style.background = `url(${newBgImg}) no-repeat center/cover`;
    }
}