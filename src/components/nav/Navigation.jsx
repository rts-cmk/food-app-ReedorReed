import React from 'react';
import { NavLink } from 'react-router';
import homeIcon from '../../assets/homeIcon.svg';
import userIcon from '../../assets/userIcon.svg';
import messageIcon from '../../assets/messageIcon.svg';
import favoriteIcon from '../../assets/favoriteIcon.svg';

export default function Navigation() {
	return (
		<nav className="navWrapper">
			<NavLink to="/" end className={'nav'}>
				<img src={homeIcon} alt="home icon" />
			</NavLink>
			<NavLink to="/profile" end className={'nav'}>
				<img src={userIcon} alt="user-profile icon" />
			</NavLink>
			<NavLink to="/message" end className={'nav'}>
				<img src={messageIcon} alt="messages icon" />
			</NavLink>
			<NavLink to="/favorites" end className={'nav'}>
				<img src={favoriteIcon} alt="favorites icon" />
			</NavLink>
		</nav>
	);
}
