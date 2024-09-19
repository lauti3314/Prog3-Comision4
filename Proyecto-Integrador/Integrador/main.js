import { renderCategories } from "./src/services/categories.js";

renderCategories();

/* PRODUCT */

const buttonAdd = document.getElementById("buttonAddElement");

buttonAdd.addEventListener("click", () => {
	openModal();
});

/* POPUP */

const cancelButton = document.getElementById("cancelButton");
cancelButton.addEventListener("click", () => {
	handleCancelButton();
});

const handleCancelButton = () => {
	closeModal();
};

//Funciones abrir o cerrar modal

const openModal = () => {
	const modal = document.getElementById("modalPopUP");
	modal.style.display = "flex";
};

const closeModal = () => {
	const modal = document.getElementById("modalPopUP");
	modal.style.display = "none";
};

//Guardar o modificar elementos
const acceptButton = document.getElementById("acceptButton");
acceptButton.addEventListener("click", () => {
	handleSaveOrModifyElements();
});

const handleSaveOrModifyElements = () => {
	const nombre = document.getElementById("nombre").value;
	const imagen = document.getElementById("img").value;
	const precio = document.getElementById("precio").value;
	const categories = document.getElementById("categoria").value;

};
