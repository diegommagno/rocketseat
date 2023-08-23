const usernameInput = document.querySelector('.input-wrapper');
const span = document.querySelector('.ticket-generation .wrapper span');
const btnTicketSuccess = document.querySelector('.ticket-success');


const newBgImg = 'https://github.com/diegommagno.png';

const newTicket = () => {
    usernameInput.classList.add('hide');
    span.classList.add('hide');
    btnTicketSuccess.classList.remove('hide');

    const avatarImage = document.querySelector('.ticket #img-avatar');
    if (avatarImage) {
        avatarImage.style.background = `url(${newBgImg}) no-repeat center/cover`;
    }
}