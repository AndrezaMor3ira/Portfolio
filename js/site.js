const imgPokeLab = document.querySelector(".btn-modal-PokeLab");
const modalPoke = document.querySelector(".modal.PokeLab");
const btnfechar = document.querySelector(".btn-fechar");

const imgJogoMemoria = document.querySelector(".btn-modal-JogoMemoria");
const modalJogoMemoria = document.querySelector(".modal.JogoMemoria");
const btnfecharM = document.querySelector(".btn-fechar-Memoria");

const imgFitaFilmes = document.querySelector(".btn-modal-FitaFilmes");
const modalFitaFilmes = document.querySelector(".modal.FitaFilmes");
const btnfecharF = document.querySelector(".btn-fechar-Fita");

imgPokeLab.addEventListener("click", () => {
  modalPoke.classList.remove("hidden");
});

btnfechar.addEventListener("click", () => {
  modalPoke.classList.add("hidden");
});

imgJogoMemoria.addEventListener("click", () => {
  modalJogoMemoria.classList.remove("hidden");
});

btnfecharM.addEventListener("click", () => {
  modalJogoMemoria.classList.add("hidden");
});

imgFitaFilmes.addEventListener("click", () => {
  modalFitaFilmes.classList.remove("hidden");
});

btnfecharF.addEventListener("click", () => {
  modalFitaFilmes.classList.add("hidden");
});
