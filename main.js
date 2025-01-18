





document.querySelectorAll('.toggle-button').forEach(button => {
    button.addEventListener('click', () => {
        const content = button.parentElement.nextElementSibling;
        const isVisible = content.style.display === 'block';

        // Alterna a exibição da caixa clicada
        content.style.display = isVisible ? 'none' : 'block';
        button.classList.toggle('uil-angle-down', isVisible);
        button.classList.toggle('uil-angle-up', !isVisible);
    });
});

