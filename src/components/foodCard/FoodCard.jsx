import React from 'react';

export default function FoodCard({ burgers }) {
	return (
		<section className="burger-wrapper">
			<ul>
				{burgers.map((burger, index) => (
					<li key={index}>
						<article className="burger-card">
							<img src={burger.img} alt={burger.fullName} />
							<h2>{burger.fullName}</h2>
							<p>{burger.type}</p>
							<p>
								<span>⭐️ {burger.rating}</span>
							</p>
							<button>♡</button>
						</article>
					</li>
				))}
			</ul>
		</section>
	);
}
