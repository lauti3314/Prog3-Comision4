/* POPUP */
import { setproductoActivo, productoActivo } from "../../main";
import { handleDeleteProduct } from "../services/products";

const cancelButton = document.getElementById("cancelButton");
cancelButton.addEventListener("click", () => {
	closeModal();
});

//Funciones abrir o cerrar modal

export const openModal = () => {
	const modal = document.getElementById("modalPopUP");
	modal.style.display = "flex";
	const buttonDelete = document.getElementById("deleteButton")

	if (productoActivo) {
		buttonDelete.style.display = "block";
	}else{
		buttonDelete.style.display = "none";
	}

	if (productoActivo) {
		const nombre = document.getElementById("nombre");
		const imagen = document.getElementById("img");
		const precio = document.getElementById("precio");
		const categories = document.getElementById("categoria");
		nombre.value = productoActivo.nombre;
		categories.value = productoActivo.categories;
		imagen.value = productoActivo.imagen;
		precio.value = productoActivo.precio;
	}
};

export const closeModal = () => {
	const modal = document.getElementById("modalPopUP");
	modal.style.display = "none";
	setproductoActivo(null);
	resetModal();
};

const resetModal = () => {
	const nombre = document.getElementById("nombre");
	const imagen = document.getElementById("img");
	const precio = document.getElementById("precio");
	const categories = document.getElementById("categoria");
	nombre.value = "";
	categories.value = "Seleccione una categoria";
	imagen.value = "";
	precio.value = 0;
};

const deleteButton = document.getElementById("deleteButton");
deleteButton.addEventListener("click", ()=>{
    buttonDelete();
});
const buttonDelete = ()=>{
    handleDeleteProduct();
}
