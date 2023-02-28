import { NavLink } from 'react-router-dom';

const Nav = () => {
	return (
		<nav>
			<NavLink to="/" aria-label="Go to Home">
				<img src="home.png" alt="home-icon" height={40} />
				<span className="nav-span">Plan Your Budget</span>
			</NavLink>
		</nav>
	);
};

export default Nav;
