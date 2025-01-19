



document.addEventListener('DOMContentLoaded', function() {
    const cards = document.querySelectorAll('.card');

    cards.forEach(card => {
        const toggleButton = card.querySelector('.toggle-button');

        toggleButton.addEventListener('click', function() {
            // Fecha todas as outras cards
            cards.forEach(otherCard => {
                if (otherCard !== card) {
                    otherCard.classList.remove('open');
                    otherCard.querySelector('.toggle-button').classList.remove('rotated');
                }
            });
            // Alterna a classe 'open' na card atual
            card.classList.toggle('open');
            // Alterna a rotação da seta
            toggleButton.classList.toggle('rotated');
        });
    });
});





document.querySelector('.cursos__button').addEventListener('click', function () {
    document.querySelector('.curso-detalhes').style.display = 'block';
    document.querySelector('.curso-detalhes-overlay').style.display = 'block';
});

document.querySelector('.curso-detalhes-close').addEventListener('click', function () {
    document.querySelector('.curso-detalhes').style.display = 'none';
    document.querySelector('.curso-detalhes-overlay').style.display = 'none';
});


