// Nav- menu para tela de celular
function toggleMenu() {
    const nav = document.querySelector('.nav');
    nav.classList.toggle('active');
  }
  
  document.addEventListener('click', function (event) {
    const nav = document.querySelector('.nav');
    const menu = document.querySelector('.menu');
    
   
    if (!nav.contains(event.target) && !menu.contains(event.target)) {
      nav.classList.remove('active');
    }
  });


/*-----Cursos---------*/


/*-----js-Detahes do cursos-----*/
const cursoButtons = document.querySelectorAll('.cursos__button');
const cursoDetalhes = document.querySelectorAll('.curso-detalhes');
const closeButtons = document.querySelectorAll('.curso-detalhes-close');

cursoButtons.forEach((button, index) => {
    button.addEventListener('click', () => {
        cursoDetalhes[index].style.display = 'block';
        document.body.insertAdjacentHTML('beforeend', '<div class="curso-detalhes-overlay"></div>');
    });
});

closeButtons.forEach((closeButton, index) => {
    closeButton.addEventListener('click', () => {
        cursoDetalhes[index].style.display = 'none';
        const overlay = document.querySelector('.curso-detalhes-overlay');
        if (overlay) overlay.remove();
    });
});

document.body.addEventListener('click', (event) => {
    if (event.target.classList.contains('curso-detalhes-overlay')) {
        document.querySelectorAll('.curso-detalhes').forEach(detalhe => detalhe.style.display = 'none');
        event.target.remove();
    }
});

/*botão esquerda direita cursos*/
const ContainerCurso = document.querySelector('.curso-cards');
const leftButtonCurso = document.querySelector('.navegacao-esquerda-cursos');
const rightButtonCurso = document.querySelector('.navegacao-direita-cursos');

leftButtonCurso.addEventListener('click', () => {
    ContainerCurso.scrollBy({ left: -300, behavior: 'smooth' });
});

rightButtonCurso.addEventListener('click', () => {
    ContainerCurso.scrollBy({ left: 300, behavior: 'smooth' });
});



/* ------Js-Sobre---------*/
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

/*-------- Js-Comentarios-----*/

/* botão esquerda e direita*/
const comentariosContainer = document.querySelector('.comentarios-container');
const leftButton = document.querySelector('.navegacao-esquerda');
const rightButton = document.querySelector('.navegacao-direita');

leftButton.addEventListener('click', () => {
    comentariosContainer.scrollBy({ left: -300, behavior: 'smooth' });
});

rightButton.addEventListener('click', () => {
    comentariosContainer.scrollBy({ left: 300, behavior: 'smooth' });
});




/*-------Js-Formulario-------- */
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


document.getElementById('solicitar-contato').addEventListener('click', function () {
    const mensagem = document.getElementById('mensagem-sucesso');
    mensagem.classList.add('mensagem-exibida');

    // Remover a mensagem após 3 segundos
    setTimeout(() => {
        mensagem.classList.remove('mensagem-exibida');
    }, 3000);
});