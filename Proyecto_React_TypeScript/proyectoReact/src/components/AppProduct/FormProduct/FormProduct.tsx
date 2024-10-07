import { Form } from "react-bootstrap";
import { useForm } from "../../../hooks/useForm";

export const FormProduct = () => {
	const { handleChange, values, resetForm } = useForm({
		nombre: "",
		imagen: "",
		precio: 0,
	});

	const handleSubmitForm = () => {};

	return (
		<Form className="p-4 border rounded m-3">
			<Form.Group controlId="formNombre">
				<Form.Label>Nombre</Form.Label>
				<Form.Control
					type="text"
					name="nombre"
					placeholder="Ingrese nombre producto"
					value={values.nombre}
					onChange={handleChange}
				/>
			</Form.Group>

			<Form.Group controlId="formNombre">
				<Form.Label>Imagen</Form.Label>
				<Form.Control
					type="text"
					name="imagen"
					placeholder="Ingrese imagen producto"
					value={values.imagen}
					onChange={handleChange}
				/>
			</Form.Group>

			<Form.Group controlId="formNombre">
				<Form.Label>Nombre</Form.Label>
				<Form.Control
					type="number"
					name="precio"
					placeholder="Ingrese precio producto"
					value={values.precio}
					onChange={handleChange}
				/>
			</Form.Group>
		</Form>
	);
};
