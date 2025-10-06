import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router';
import Home from './pages/home';
import FoodInfo from './pages/foodInfo';
import UserProfile from './pages/UserProfile';
import Error from './pages/error';

const router = createBrowserRouter([
	{
		path: '/',
		children: [
			{ path: '/', element: <Home /> },
			{ path: '/info', element: <FoodInfo /> },
			{ path: '/profile', element: <UserProfile /> },
			{ path: '*', element: <Error /> }
		]
	}
]);

function App() {
	return <RouterProvider router={router} />;
}

export default App;
