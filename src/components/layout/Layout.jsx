import React from 'react';
import { NavLink, Outlet } from 'react-router';
import homeIcon from '../../assets/homeIcon.svg';
import userIcon from '../../assets/userIcon.svg';
import messageIcon from '../../assets/messageIcon.svg';
import favoriteIcon from '../../assets/favoriteIcon.svg';
import plusIcon from '../../assets/plusIcon.svg';
import './layout.css';

export default function Layout() {
	return (
		<>
			<main>
				<Outlet />
			</main>
			<footer>
				<nav className="navWrapper">
					<NavLink to="/" end className={'nav navHome'}>
						<img src={homeIcon} alt="home icon" />
					</NavLink>
					<NavLink to="/profile" end className={'nav navProfile'}>
						<img src={userIcon} alt="user-profile icon" />
					</NavLink>
					<NavLink to="/favorites" end className={'nav navPlus'}>
						<img src={plusIcon} alt="plus icon" />
					</NavLink>
					<NavLink to="/message" end className={'nav navMsg'}>
						<img src={messageIcon} alt="messages icon" />
					</NavLink>
					<NavLink to="/favorites" end className={'nav navFavorite'}>
						<img src={favoriteIcon} alt="favorites icon" />
					</NavLink>
				</nav>
			</footer>
		</>
	);
}
