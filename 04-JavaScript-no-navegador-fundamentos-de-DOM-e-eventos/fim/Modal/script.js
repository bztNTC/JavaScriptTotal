// Seleciona os elementos HTML
const openModalBtn1 = document.getElementById("openModalBtn1");
const openModalBtn2 = document.getElementById("openModalBtn2");
const modal = document.getElementById("myModal");
const modalText = document.getElementById("modalText");
const yesBtn = document.getElementById("yesBtn");
const noBtn = document.getElementById("noBtn");
const closeBtn = document.getElementsByClassName("close")[0];
const overlay = document.getElementById("overlay");
const content = document.getElementById("content");

// Função para abrir o modal com texto personalizado
function openModal(text) {
  modalText.textContent = text;
  modal.style.display = "block";
  overlay.style.display = "block";
  content.style.filter = "blur(5px)";
}

// Evento de clique para abrir o modal 1
openModalBtn1.addEventListener("click", function () {
  openModal("Este é o Modal 1. Pressione 'Sim' ou 'Não'.");
});

// Evento de clique para abrir o modal 2
openModalBtn2.addEventListener("click", function () {
  openModal("Este é o Modal 2. Pressione 'Sim' ou 'Não'.");
});

// Evento de clique no botão "Sim"
yesBtn.addEventListener("click", function () {
  console.log("Botão 'Sim' foi pressionado");
  closeModal();
});

// Evento de clique no botão "Não"
noBtn.addEventListener("click", function () {
  console.log("Botão 'Não' foi pressionado");
  closeModal();
});

// Evento de clique no botão de fechar
closeBtn.addEventListener("click", function () {
  closeModal();
});

// Função para fechar o modal
function closeModal() {
  modal.style.display = "none";
  overlay.style.display = "none";
  content.style.filter = "none";
}

// Função para fechar o modal com a tecla "ESC"
window.addEventListener("keydown", function (event) {
  if (event.key === "Escape" && modal.style.display === "block") {
    closeModal();
  }
});
