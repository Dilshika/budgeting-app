import { useLoaderData } from 'react-router-dom';
import Intro from '../components/Into';

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
	return <>{userName ? <></> : <Intro />}</>;
};

export default Dashboard