/* PRODUCTOS */

import { productoActivo } from "../../main.js";
import {
	handleGetProductLocalStorage,
	setInLocalStorage,
} from "../persistence/localStorage";
import { closeModal } from "../views/modal.js";
import { handleGetProductsToStore, handleRenderList } from "../views/store";

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

//Eliminar elemento

export const handleDeleteProduct = () => {
	const products = handleGetProductLocalStorage();
	const result = products.filter((el) => el.id !== productoActivo.id);
	// Setear el nuevo array
	localStorage.setItem("products", JSON.stringify(result));
	const newProducts = handleGetProductLocalStorage();
	handleRenderList(newProducts);
	closeModal();
};
