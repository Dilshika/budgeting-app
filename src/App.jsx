import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import DashBoard, { dashboardLoader } from './pages/DashBoard';
import Expenses, { expensesLoader } from './pages/Expenses';

function App() {
	const router = createBrowserRouter([
		{
			path: '/',
			element: <DashBoard />,
			loader: dashboardLoader,
			errorElement: <Error />,
			children: [
				{ path: 'expenses', element: <Expenses />, loader: expensesLoader },
			],
		},
	]);

	return (
		<div className="App">
			<RouterProvider router={router} />
		</div>
	);
}

export default App;
