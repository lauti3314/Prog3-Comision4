/* PRODUCTOS */

import Swal from "sweetalert2";
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
	Swal.fire({
		title: "Correct!",
		text: "Product Save!",
		icon: "success",
	});

	setInLocalStorage(object);
	handleGetProductsToStore();
	closeModal();
};

//Eliminar elemento

export const handleDeleteProduct = () => {
	Swal.fire({
		title: "Are you sure?",
		text: "You won't be able to revert this!",
		icon: "warning",
		showCancelButton: true,
		confirmButtonColor: "#3085d6",
		cancelButtonColor: "#d33",
		confirmButtonText: "Yes, delete it!",
	}).then((result) => {
		if (result.isConfirmed) {
			const products = handleGetProductLocalStorage();
			const result = products.filter((el) => el.id !== productoActivo.id);
			// Setear el nuevo array
			localStorage.setItem("products", JSON.stringify(result));
			const newProducts = handleGetProductLocalStorage();
			handleRenderList(newProducts);
			closeModal();
		} else {
			closeModal();
		}
	});
};
