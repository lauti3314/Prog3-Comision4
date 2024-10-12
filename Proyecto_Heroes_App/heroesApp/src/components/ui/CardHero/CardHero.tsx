import { FC } from "react";
import { IHeroes } from "../../../types/IHeroes";
import { Card } from "react-bootstrap";

interface ICardHero {
	hero: IHeroes;
}

export const CardHero: FC<ICardHero> = ({ hero }) => {
	return (
		<Card style={{ width: "100%" }}>
			<Card.Img variant="top" src={`/assets/heroes/${hero.id}.jpg`} />
			<Card.Body>
				<Card.Title>{hero.superhero}</Card.Title>
				<Card.Text>
					<p>
						<b>Alter Ego:</b> {hero.alter_ego}
					</p>
					<p>
						<b>Publisher:</b> {hero.publisher}
					</p>
					<p>
						<b>First Appearance:</b> {hero.first_appearance}
					</p>
				</Card.Text>
			</Card.Body>
		</Card>
	);
};
