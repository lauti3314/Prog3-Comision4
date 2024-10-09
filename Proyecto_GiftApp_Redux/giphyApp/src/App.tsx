import { useState } from "react";
import { GiftList } from "./components/GiftList/GiftList";
import { NavBar } from "./components/ui/NavBar/NavBar";

interface IGift {
	urlGift: string;
	title: string;
}

function App() {
	const [gift, setGift] = useState<IGift[]>([]);
	return (
		<div>
			<NavBar setGift={setGift}/>
			<GiftList gift={gift}/>
		</div>
	);
}

export default App;
