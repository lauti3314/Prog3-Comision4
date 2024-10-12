import { useEffect, useState } from "react";
import { IHeroes } from "../../../types/IHeroes";
import { useNavigate, useParams } from "react-router-dom";
import { heroesData } from "../../../data/heroes";
import style from "./HeroPage.module.css";
import { Button } from "react-bootstrap";

export const HeroPage = () => {
	const [hero, setHero] = useState<IHeroes | null>(null);

	const { id } = useParams();

	const getHeroById = () => {
		const result = heroesData.find((h) => h.id === id);
		result ? setHero(result) : setHero(null);
	};

	useEffect(() => {
		getHeroById();
	}, []);

	const navigate = useNavigate();
	const handleNavigate = () => {
		navigate(-1);
	};

	return (
		<div>
			<>
				{hero && (
					<div className={style.containerHeroPage}>
						<div className={style.containerImgHeroPage}>
							<img src={`/assets/heroes/${id}.jpg`} />
						</div>

						<div>
							<h3>{hero.superhero}</h3>

							<ul>
								<li>
									<b>Alter ego</b> {hero.alter_ego}
								</li>
								<li>
									<b>Publisher</b> {hero.publisher}
								</li>
								<li>
									<b>First Appearance</b> {hero.first_appearance}
								</li>
							</ul>

							<Button variant="primary" onClick={handleNavigate}>
								{" "}
								Regresar
							</Button>
						</div>
					</div>
				)}
			</>
		</div>
	);
};
