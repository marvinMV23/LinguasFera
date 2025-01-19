





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


// Seleciona todos os botões "Conheça o curso" e adiciona um evento de clique
document.querySelectorAll('.curso-card a').forEach(button => {
    button.addEventListener('click', function(event) {
        event.preventDefault(); // Previne o comportamento padrão do link

        // Seleciona o elemento pai do botão e encontra a seção "curso-detalhes"
        const cursoCard = this.closest('.curso-card');
        const detalhes = cursoCard.querySelector('.curso-detalhes');

        // Alterna a classe "ativo" para mostrar ou ocultar os detalhes
        if (detalhes.classList.contains('ativo')) {
            detalhes.classList.remove('ativo');
        } else {
            // Fecha quaisquer outras seções abertas
            document.querySelectorAll('.curso-detalhes.ativo').forEach(ativo => {
                ativo.classList.remove('ativo');
            });
            // Exibe os detalhes do curso clicado
            detalhes.classList.add('ativo');
        }
    });
});

