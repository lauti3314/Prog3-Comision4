import { MiPrimerComponent } from "./components/MiPrimerComponent/MiPrimerComponent";

export const App = () => {
	return (
		<div>
			<MiPrimerComponent
				text={"Texto desde propiedades"}
				color="red"
				fontSize={3}
			/>
		</div>
	);
};
