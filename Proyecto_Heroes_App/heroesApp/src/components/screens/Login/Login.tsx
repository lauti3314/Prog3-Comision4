import { Button, Form } from "react-bootstrap";
import styles from "./Login.module.css";

export const Login = () => {
	return (
		<div className={styles.containerLogin}>
			<div className={styles.containerForm}>
				<span
					style={{ fontSize: "10vh" }}
					className="material-symbols-outlined">
					account_circle
				</span>

				<Form>
					<Form.Group className="mb-3">
						<Form.Label>Usuario</Form.Label>
						<Form.Control name="user" type="text" placeholder="Usuario" />
					</Form.Group>

					<Form.Group className="mb-3">
						<Form.Label>Contraseña</Form.Label>
						<Form.Control
							name="password"
							type="password"
							placeholder="Contraseña"
						/>
					</Form.Group>
					<Form.Check
						type="switch"
						id="custom-switch"
						label="Mostrar contraseña"
					/>

					<div>
						<Button variant="primary">Primary</Button>
					</div>
				</Form>
			</div>
		</div>
	);
};
