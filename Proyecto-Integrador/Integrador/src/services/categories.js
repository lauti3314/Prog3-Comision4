export const renderCategories = () => {
	const ulList = document.getElementById("listFilter");
	ulList.innerHTML = `
    <li id="Todo">Todos los productos</li>
    <li id="Hamburguesas">Hamburguesas</li>
    <li id="Papas">Papas</li>
    <li id="Gaseosas">Gaseosas</li>
    <li id="mayorPrecio">Mayor precio</li>
    <li id="menorPrecio">Menor precio</li>`;

	const liElements = ulList.querySelectorAll("li");
	liElements.forEach((liElement) => {
		liElement.addEventListener("click", () => {
			console.log("click en", liElement.id);
		});
	});
};
