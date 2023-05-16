const imgPetShop = document.querySelector('.btn-modal-PetShop');
const modalPet = document.querySelector('.PetShop');
const btnfechar = document.querySelector('.btn-fechar');

const imgJogoMemoria = document.querySelector('.btn-modal-JogoMemoria');
const modalJogoMemoria = document.querySelector('.JogoMemoria');
const btnfecharM = document.querySelector('.btn-fechar-Memoria');

const imgFitaFilmes = document.querySelector('.btn-modal-FitaFilmes');
const modalFitaFilmes = document.querySelector('.FitaFilmes');
const btnfecharF = document.querySelector('.btn-fechar-Fita');

imgPetShop.addEventListener('click', () => {
    modalPet.classList.remove('hidden');
});

btnfechar.addEventListener('click', () => {
    modalPet.classList.add('hidden');
});

imgJogoMemoria.addEventListener('click', () => {
    modalJogoMemoria.classList.remove('hidden');
});

btnfecharM.addEventListener('click', () => {
    modalJogoMemoria.classList.add('hidden');
});

imgFitaFilmes.addEventListener('click', () => {
    modalFitaFilmes.classList.remove('hidden');
});

btnfecharF.addEventListener('click', () => {
    modalFitaFilmes.classList.add('hidden');
});