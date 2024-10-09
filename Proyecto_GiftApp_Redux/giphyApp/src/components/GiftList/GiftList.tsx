import { FC } from "react";
import { CardGift } from "../ui/CardGift/CardGift";
import { useAppSelector } from "../../hooks/redux";

interface IGift {
	urlGift: string;
	title: string;
}

interface IPropsGiftList {
	gift: IGift[];
}

export const GiftList: FC<IPropsGiftList> = ({ gift }) => {
	const globalGift = useAppSelector(state => state.gift)
    
    return (
		<div
			style={{
				display: "grid",
				gridTemplateColumns: "repeat(3, .6fr)",
				gap: "2vh",
			}}>
			{gift.map((el, i) => (
				<CardGift gift={el} key={i} />
			))}
		</div>
	);
};
