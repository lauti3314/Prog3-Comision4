import { FC } from "react";
import { IHeroes } from "../../../types/IHeroes";

interface IListHeroes {
	heroes: IHeroes[];
	title: string;
}

export const ListHeroes: FC<IListHeroes> = ({ heroes, title }) => {
	return (
		<div>
			<div>
				<h2>{title}</h2>
			</div>

			<div>
				{heroes.map((hero) => (
					<div>
						<p>{hero.id}</p>
					</div>
				))}
			</div>
		</div>
	);
};
