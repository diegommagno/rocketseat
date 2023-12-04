document.addEventListener('DOMContentLoaded', function() {
    const usernameInput = document.getElementById('username');
    const span = document.querySelector('.ticket-generation .wrapper span');
    const btnTicketSuccess = document.querySelector('.ticket-success');

    const newTicket = () => {
        // Retrieve the input value
        const usernameInputContent = usernameInput.value;

        // Check if the username is not empty
        if (usernameInputContent.trim() !== '') {
            usernameInput.parentNode.classList.add('hide');
            span.classList.add('hide');
            btnTicketSuccess.classList.remove('hide');

            const avatarImage = document.querySelector('.ticket #img-avatar');
            if (avatarImage) {
                avatarImage.style.background = `url(https://github.com/${usernameInputContent}.png) no-repeat center/cover`;
            }

            const updateTicketName = document.querySelector('.name');
            if (updateTicketName) {
                updateTicketName.textContent = usernameInputContent;
            }

            const btnGenerateTicket = document.querySelector('.ticket-generation .wrapper button');
            if (btnGenerateTicket) {
                btnGenerateTicket.textContent = 'Download Ticket';
            }
        }
    }

    // Add event listener to the button
    const btnGenerateTicket = document.getElementById('generateTicket');
    btnGenerateTicket.addEventListener('click', newTicket);
});
