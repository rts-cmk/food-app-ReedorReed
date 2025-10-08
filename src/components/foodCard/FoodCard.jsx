import React from 'react';
import './foodCard.css';
import ratingStar from '../../assets/star.svg';
import favoriteHeart from '../../assets/heart.svg';
import { Link } from 'react-router';

export default function FoodCard({ burgers }) {
	return (
		<section className="burger-wrapper">
			<ul>
				{burgers.map((burger, index) => (
					<li key={index}>
						<article className="burger-card">
							<Link to={`/info/${burger.id}`}>
								<img
									src={burger.img}
									alt={burger.fullName}
									className="burgerImg"
								/>
							</Link>
							<Link to={`/info/${burger.id}`}>
								<p className="type">{burger.type}</p>
							</Link>
							<Link to={`/info/${burger.id}`}>
								<p className="name">{burger.fullName}</p>
							</Link>
							<div className="ratingFavorite">
								<p>
									<span className="star">
										<img src={ratingStar} /> {burger.rating}
									</span>
								</p>
								<button>
									<img src={favoriteHeart} />
								</button>
							</div>
						</article>
					</li>
				))}
			</ul>
		</section>
	);
}
