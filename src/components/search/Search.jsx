import React from 'react';
import filterIcon from '../../assets/filter.svg';

export default function Search() {
	return (
		<section className="search-food">
			<form role="search">
				<label htmlFor="search">Search</label>
				<input type="search" name="search" id="search" placeholder="Search" />
				<button type="button">
					<img src={filterIcon} alt="filter icon" />
				</button>
			</form>
		</section>
	);
}
