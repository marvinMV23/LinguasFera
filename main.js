document.querySelector('.cursos__button').addEventListener('click', function () {
    document.querySelector('.curso-detalhes').style.display = 'block';
    document.querySelector('.curso-detalhes-overlay').style.display = 'block';
});

document.querySelector('.curso-detalhes-close').addEventListener('click', function () {
    document.querySelector('.curso-detalhes').style.display = 'none';
    document.querySelector('.curso-detalhes-overlay').style.display = 'none';
});
