import { useFetcher } from "react-router-dom";
import { getAllMatchingItems } from "../helpers/helpers";

const ExpenseItem = ({ expense, showBudget }) => {
    const fetcher = useFetcher();

    const budget = getAllMatchingItems({
        category: "budgets",
        key: "id",
        value: expense.budgetId,
    })[0];

    return (
        <>
            <td></td>
        </>
    )
}