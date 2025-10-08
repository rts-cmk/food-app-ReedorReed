import React from 'react';
import filterIcon from '../../assets/filter.svg';
import searchIcon from '../../assets/magnifying-glass.svg';
import './search.css';

export default function Search() {
	return (
		<section className="search-food">
			<div className="search-form">
				<form role="search">
					<label htmlFor="search">
						<img src={searchIcon} />
					</label>
					<input type="search" name="search" id="search" placeholder="Search" />
				</form>
			</div>
			<button type="button" className="filterBtn">
				<img src={filterIcon} alt="filter icon" />
			</button>
		</section>
	);
}
