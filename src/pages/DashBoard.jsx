import { useLoaderData } from 'react-router-dom';

//helper functions
import { fetchData } from '../helpers/helpers';
import Error from './Error';
import Expenses from './Expenses';

export function dashboardLoader() {
    const userName = fetchData('userName');
	return { userName };
}

const Dashboard = () => {
	const { userName } = useLoaderData();
	return (
		<div>
            <Expenses />
		</div>
	);
};

export default Dashboard