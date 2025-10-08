import React, { useState, useEffect } from 'react';
import profileImage from '../assets/profile-image.png';
import '../css/global.css';
import '../css/home.css';
import FoodCard from '../components/foodCard/FoodCard';
import Search from '../components/search/Search';

function Home() {
	const [burgerData, setBurgerData] = useState([]);

	useEffect(() => {
		fetch('/api.json')
			.then((response) => response.json())
			.then((data) => setBurgerData(data.burgers))
			.catch((error) => console.error('Error fetching data:', error));
	}, []);

	return (
		<div className="wrapper">
			<header>
				<figure>
					<figcaption>
						<h1 className="headerTitle">Foodgo</h1>
					</figcaption>
					<img
						src={profileImage}
						alt="profile picture"
						className="profileImage"
					/>
				</figure>
				<h2 className="subTitle">Order your favorite food</h2>
			</header>
			<main>
				<Search />

				<FoodCard burgers={burgerData} />
			</main>
		</div>
	);
}

export default Home;
