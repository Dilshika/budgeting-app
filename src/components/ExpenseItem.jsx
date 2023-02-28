import { useFetcher } from "react-router-dom";
import {
	formatCurrency,
	formatDateToLocalString,
	getAllMatchingItems,
} from '../helpers/helpers';

const ExpenseItem = ({ expense, showBudget }) => {
	const fetcher = useFetcher();

	const budget = getAllMatchingItems({
		category: 'budgets',
		key: 'id',
		value: expense.budgetId,
	})[0];

	return (
		<>
			<td>{expense.name}</td>
			<td>{formatCurrency(expense.amount)}</td>
			<td>{formatDateToLocalString(expense.createdAt)}</td>
			{showBudget &&
				{
					/**Link to current budget */
				}}
		</>
	);
};

export default ExpenseItem;