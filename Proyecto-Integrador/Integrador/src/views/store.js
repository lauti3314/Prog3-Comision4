import { handleGetProductLocalStorage } from "../persistence/localStorage.js";

export const handleGetProductsToStore = () => {
	const products = handleGetProductLocalStorage();
	handleRenderList(products);
};

export const handleRenderList = (productosIn) => {
	const burgers = productosIn.filter((el) => el.categories === "Hamburguesas");
	const gaseosas = productosIn.filter((el) => el.categories === "Gaseosas");
	const papas = productosIn.filter((el) => el.categories === "Papas");

	const renderProductGroup = (productos, title) => {
		if (productos.length > 0) {
			const productosHTML = productos.map((producto, index) => {
				return `<div class='containerTargetItem' id="product-${productosIn.categories}-${index}">
                <div>
                <img src='${producto.imagen}'/>
                <div >
                <h2>${producto.nombre}</h2>
                </div>
                <div class='targetProps'>
                <p><b>Precio: </b> $ ${producto.precio}</p>
                </div>
                </div>
                </div>`;
			});
			return `
            <section class='sectionStore'>
            <div class='containerTitleSection'>
            <h3>${title}</h3>
            </div>
            <div class='containerProductStore'>
            ${productosHTML.join("")}
            </div>

            </section>
            `;
		} else {
			return "";
		}
	};

	//renderizar cada uno de los productos dentro de su categoria
	const appContainer = document.getElementById("storeContainer");
	appContainer.innerHTML = `
    ${renderProductGroup(burgers, "Hamburger")}
    ${renderProductGroup(papas, "Papas")}
    ${renderProductGroup(gaseosas, "Gaseosas")}
    `;

	const addEvents = (productosIn) => {
		if (productosIn) {
			productosIn.forEach((element, index) => {
				const productContianer = document.getElementById(
					`product-${productosIn.categories}-${index}`
				);

				productContianer.addEventListener("click", () => {
					console.log("productoActivo", element);
				});
			});
		}
	};

	addEvents(burgers);
	addEvents(papas);
	addEvents(gaseosas);
};
