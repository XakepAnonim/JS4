// football

function football(event) {
    let ball = document.getElementById('ball');
    let field = document.querySelector('.field');

    let newX = event.offsetX - ball.offsetWidth / 2;
    let newY = event.offsetY - ball.offsetHeight / 2;

    newX = Math.max(0, Math.min(newX, field.offsetWidth - ball.offsetWidth));
    newY = Math.max(0, Math.min(newY, field.offsetHeight - ball.offsetHeight));

    ball.style.left = newX + 'px';
    ball.style.top = newY + 'px';
}

// card

function closeCard(button) {
    let card = button.closest('.card');
    card.classList.add('hidden');
}