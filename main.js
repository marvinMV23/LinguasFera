document.addEventListener('DOMContentLoaded', function() {
    // Seleciona todas as cards para adicionar interatividade
    const cards = document.querySelectorAll('.card');

    // Itera sobre cada card e adiciona o evento de clique para alternar a classe 'open'
    cards.forEach(card => {
        const toggleButton = card.querySelector('.toggle-button');

        toggleButton.addEventListener('click', function() {
            cards.forEach(otherCard => {
                if (otherCard !== card) {
                    otherCard.classList.remove('open');
                    otherCard.querySelector('.toggle-button').classList.remove('rotated');
                }
            });
            card.classList.toggle('open');
            toggleButton.classList.toggle('rotated');
        });
    });
});

document.addEventListener('DOMContentLoaded', function() {
    const cards = document.querySelectorAll('.card');
    
    cards.forEach(card => {
        const toggleButton = card.querySelector('.toggle-button');
        const cardHeader = card.querySelector('.card-header');
        const cardContent = card.querySelector('.card-content');
        
        toggleButton.addEventListener('click', function() {
            toggleCard(card);
        });
        
        cardHeader.addEventListener('click', function() {
            toggleCard(card);
        });

        function toggleCard(card) {
            cards.forEach(otherCard => {
                if (otherCard !== card) {
                    otherCard.classList.remove('open');
                    otherCard.querySelector('.toggle-button').classList.remove('rotated');
                }
            });
            card.classList.toggle('open');
            toggleButton.classList.toggle('rotated');
        }
    });
});

let isMouseDown = false;
let startX;
let scrollLeftStart;

const container = document.querySelector('.comentarios-container');

container.addEventListener('mousedown', (e) => {
    isMouseDown = true;
    startX = e.pageX - container.offsetLeft;
    scrollLeftStart = container.scrollLeft;
    container.style.cursor = 'grabbing'; 
});

container.addEventListener('mouseleave', () => {
    isMouseDown = false;
    container.style.cursor = 'default'; 
});

container.addEventListener('mouseup', () => {
    isMouseDown = false;
    container.style.cursor = 'default'; 
});

container.addEventListener('mousemove', (e) => {
    if (!isMouseDown) return; 
    e.preventDefault();
    const x = e.pageX - container.offsetLeft;
    const walk = (x - startX) * 2; 
    container.scrollLeft = scrollLeftStart - walk;
});

function scrollLeft() {
    container.scrollBy({
        left: -300,
        behavior: 'smooth'
    });
}

function scrollRight() {
    container.scrollBy({
        left: 300,
        behavior: 'smooth'
    });
}

document.getElementById('state').addEventListener('change', function() {
    const state = this.value;
    const citySelect = document.getElementById('city');
    citySelect.innerHTML = '<option value="">Selecione uma cidade</option>'; 

    let cities = [];

    switch(state) {
        case 'sp':
            cities = ['São Paulo', 'Campinas', 'Santos', 'São Bernardo do Campo'];
            break;
        case 'rj':
            cities = ['Rio de Janeiro', 'Niterói', 'Campos dos Goytacazes', 'Duque de Caxias'];
            break;
        case 'mg':
            cities = ['Belo Horizonte', 'Uberlândia', 'Juiz de Fora', 'Contagem'];
            break;
        case 'pr':
            cities = ['Curitiba', 'Londrina', 'Maringá', 'Ponta Grossa'];
            break;
        case 'rs':
            cities = ['Porto Alegre', 'Caxias do Sul', 'Pelotas', 'Santa Maria'];
            break;
        case 'sc':
            cities = ['Florianópolis', 'Joinville', 'Blumenau', 'Chapecó'];
            break;
        case 'ba':
            cities = ['Salvador', 'Feira de Santana', 'Vitória da Conquista', 'Itabuna'];
            break;
        case 'pe':
            cities = ['Recife', 'Olinda', 'Jaboatão dos Guararapes', 'Caruaru'];
            break;
        case 'ce':
            cities = ['Fortaleza', 'Caucaia', 'Juazeiro do Norte', 'Sobral'];
            break;
        case 'go':
            cities = ['Goiânia', 'Anápolis', 'Aparecida de Goiânia', 'Rio Verde'];
            break;
        case 'df':
            cities = ['Brasília'];
            break;
        case 'es':
            cities = ['Vitória', 'Vila Velha', 'Serra', 'Cariacica'];
            break;
        case 'mt':
            cities = ['Cuiabá', 'Várzea Grande', 'Rondonópolis', 'Sinop'];
            break;
        case 'ms':
            cities = ['Campo Grande', 'Dourados', 'Três Lagoas', 'Corumbá'];
            break;
        case 'al':
            cities = ['Maceió', 'Arapiraca', 'Palmeira dos Índios', 'Rio Largo'];
            break;
        case 'ma':
            cities = ['São Luís', 'Imperatriz', 'Caxias', 'Codó'];
            break;
        case 'pb':
            cities = ['João Pessoa', 'Campina Grande', 'Patos', 'Santa Rita'];
            break;
        case 'rn':
            cities = ['Natal', 'Mossoró', 'Parnamirim', 'Caicó'];
            break;
        case 'se':
            cities = ['Aracaju', 'Nossa Senhora do Socorro', 'Lagarto', 'Itabaiana'];
            break;
        case 'ac':
            cities = ['Rio Branco', 'Cruzeiro do Sul', 'Sena Madureira', 'Tarauacá'];
            break;
        case 'am':
            cities = ['Manaus', 'Parintins', 'Itacoatiara', 'Coari'];
            break;
        case 'ap':
            cities = ['Macapá', 'Santana', 'Laranjal do Jari', 'Porto Grande'];
            break;
        case 'ro':
            cities = ['Porto Velho', 'Ji-Paraná', 'Ariquemes', 'Cacoal'];
            break;
        case 'rr':
            cities = ['Boa Vista'];
            break;
        case 'to':
            cities = ['Palmas', 'Araguaína', 'Gurupi', 'Porto Nacional'];
            break;
    default:
        cities = [];
    }

    cities.forEach(function(city) {
        const option = document.createElement('option');
        option.value = city.toLowerCase().replace(' ', '-');
        option.textContent = city;
        citySelect.appendChild(option);
    });
});
