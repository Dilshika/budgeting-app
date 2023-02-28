import { Outlet, useLoaderData } from 'react-router-dom';

import wave from '../assets/wave.svg';

import Nav from '../components/Nav';

import { fetchData } from '../helpers/helpers';

// loader
export function mainLoader() {
	const userName = fetchData('userName');
	return { userName };
}

const Main = () => {
	const { userName } = useLoaderData();

	return (
		<div className="layout">
			<Nav userName={userName} />
			<main>
				<Outlet />
			</main>
		</div>
	);
};

export default Main;
