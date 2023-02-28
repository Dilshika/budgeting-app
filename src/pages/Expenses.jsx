import { useLoaderData } from 'react-router-dom';
import { fetchData } from '../helpers/helpers';

export async function expensesLoader() {
	const expenses = await fetchData('expenses');
	return { expenses };
}

const Expenses = () => {
	const { expenses } = useLoaderData();

	return (
		<div className="grid-lg">
			<h1>All Expenses</h1>
			{expenses && expenses.length > 0 ? (
				<div className="grid-md">
					<h2>
						Recent Expenses <small>({expenses.length} total)</small>
					</h2>
				</div>
			) : (
				<p>No Expenses</p>
			)}
		</div>
	);
};

export default Expenses;
