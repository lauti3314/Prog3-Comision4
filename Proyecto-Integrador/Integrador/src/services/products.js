/* PRODUCTOS */

import { closeModal } from "../../main";
import { setInLocalStorage } from "../persistence/localStorage";
import { handleGetProductsToStore } from "../views/store";

//Guardar
const acceptButton = document.getElementById("acceptButton");
acceptButton.addEventListener("click", () => {
	handleSaveOrModifyElements();
});

//funcion de guardar

const handleSaveOrModifyElements = () => {
	const nombre = document.getElementById("nombre").value;
	const imagen = document.getElementById("img").value;
	const precio = document.getElementById("precio").value;
	const categories = document.getElementById("categoria").value;
	let object = null;

	if (productoActivo) {
		object = {
			...productoActivo,
			nombre,
			imagen,
			precio,
			categories,
		};
	} else {
		object = {
			id: new Date().toISOString(),
			nombre,
			imagen,
			precio,
			categories,
		};
	}

	setInLocalStorage(object);
	handleGetProductsToStore();
	closeModal();
};
