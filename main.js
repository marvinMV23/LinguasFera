document.addEventListener('DOMContentLoaded', function() {
    // Seleciona todas as cards para adicionar interatividade
    const cards = document.querySelectorAll('.card');

    // Itera sobre cada card e adiciona o evento de clique para alternar a classe 'open'
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

// Variáveis para controlar o clique e arraste da área de comentários
let isMouseDown = false;
let startX;
let scrollLeftStart;

// Seleciona o contêiner dos comentários
const container = document.querySelector('.comentarios-container');

// Adiciona evento para iniciar o clique e arraste
container.addEventListener('mousedown', (e) => {
    isMouseDown = true;
    startX = e.pageX - container.offsetLeft;
    scrollLeftStart = container.scrollLeft;
    container.style.cursor = 'grabbing'; // Muda o cursor quando está arrastando
});

// Adiciona evento para quando o mouse sai do contêiner
container.addEventListener('mouseleave', () => {
    isMouseDown = false;
    container.style.cursor = 'default'; // Volta o cursor ao normal
});

// Adiciona evento para quando o mouse é solto
container.addEventListener('mouseup', () => {
    isMouseDown = false;
    container.style.cursor = 'default'; // Volta o cursor ao normal
});

// Adiciona evento para o movimento do mouse, que realiza a rolagem horizontal
container.addEventListener('mousemove', (e) => {
    if (!isMouseDown) return; // Se o botão do mouse não estiver pressionado, não faz nada
    e.preventDefault();
    const x = e.pageX - container.offsetLeft;
    const walk = (x - startX) * 2; // Ajusta a velocidade de rolagem
    container.scrollLeft = scrollLeftStart - walk;
});

// Função para rolar para a esquerda
function scrollLeft() {
    container.scrollBy({
        left: -300,
        behavior: 'smooth'
    });
}

// Função para rolar para a direita
function scrollRight() {
    container.scrollBy({
        left: 300,
        behavior: 'smooth'
    });
}
