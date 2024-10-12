import { Route, Routes } from "react-router-dom";
import { Login } from "../components/screens/Login/Login";
import { Home } from "../components/screens/Home/Home";
import { Header } from "../components/ui/Header/Header";

export const AppRouter = () => {
	return (
		<>
			<Header />
			<Routes>
				<Route path="/" element={<Login />} />
				<Route path="/home" element={<Home />} />
			</Routes>
		</>
	);
};
