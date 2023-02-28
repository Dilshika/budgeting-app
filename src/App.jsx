import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Dashboard, { dashboardLoader } from './pages/Dashboard';
import Expenses, { expensesLoader } from './pages/Expenses';
import Main, { mainLoader } from './layouts/Main';

function App() {
	const router = createBrowserRouter([
		{
			path: '/',
			element: <Main />,
			loader: mainLoader,
			errorElement: <Error />,
			children: [
				{
					index: true,
					element: <Dashboard />,
					loader: dashboardLoader,
					errorElement: <Error />,
				},
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
