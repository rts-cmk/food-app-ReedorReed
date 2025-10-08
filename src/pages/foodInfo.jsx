import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router';
import BackIcon from '../assets/backArrow.svg';
import SearchIcon from '../assets/magnifying-glass.svg';
import ratingStar from '../assets/star.svg';
import '../css/foodInfo.css';
import spicyScale from '../assets/spicy-scale.png';

export default function FoodInfo() {
	const { id } = useParams();
	const [burger, setBurger] = useState(null);
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		fetch('/api.json')
			.then((res) => res.json())
			.then((data) => {
				const foundBurger = data.burgers.find((b) => b.id === Number(id));
				setBurger(foundBurger);
				setLoading(false);
			})
			.catch((err) => {
				console.error('Error fetching data:', err);
				setLoading(false);
			});
	}, [id]);

	if (loading) return <p>Loading burger info...</p>;
	if (!burger) return <p>Burger not found.</p>;

	return (
		<div className="infoWrapper">
			<header>
				<div className="headWrapper">
					<Link to="/">
						<img src={BackIcon} alt="Back" />
					</Link>
					<img src={SearchIcon} alt="Search" />
				</div>
			</header>

			<main>
				<article className="burger-info">
					<img
						src={burger.img}
						alt={burger.fullName}
						className="burgerInfoImg"
					/>

					<h2 className="infoType">
						{burger.type} {burger.fullName}
					</h2>

					<p>
						<span className="star">
							<img src={ratingStar} alt="rating" /> {burger.rating}
						</span>
					</p>

					<p>{burger.description}</p>
					<p className="price">${burger.price.toFixed(2)}</p>
				</article>
				<div className="spicyWrapper">
					<img src={spicyScale} className="spicyScaleImg" />
					<div className="portions">
						<p>Portion</p>
						<div className="portionBtns">
							<button className="minus">-</button>
							<p className="counter"></p>
							<button className="plus">+</button>
						</div>
					</div>
				</div>

				<div className="footerWrapper">
					<p className="amount">{burger.price}</p>
					<button className="orderNow">ORDER NOW</button>
				</div>
			</main>
		</div>
	);
}
