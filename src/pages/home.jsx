import React, { useState, useEffect } from 'react';
import Navigation from '../components/nav/Navigation';
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
				<h1>Foodgo</h1>
				<img src={profileImage} alt="profile picture" />
				<h2>Order your favorite food</h2>
			</header>
			<main>
				<Search />
				<FoodCard burgers={burgerData} />
			</main>
			<footer>
				<Navigation />
			</footer>
		</div>
	);
}

export default Home;
