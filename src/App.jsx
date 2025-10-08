import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router';
import Home from './pages/home';
import FoodInfo from './pages/foodInfo';
import UserProfile from './pages/UserProfile';
import Error from './pages/error';
import Layout from './components/layout/Layout';
import Messages from './pages/messages';
import Favorites from './pages/favorites';

const router = createBrowserRouter([
	{
		path: '/',
		element: <Layout />,
		children: [
			{ path: '/', element: <Home /> },
			{ path: '/info/:id', element: <FoodInfo /> },
			{ path: '/profile', element: <UserProfile /> },
			{ path: '/messages', element: <Messages /> },
			{ path: '/favorites', element: <Favorites /> },
			{ path: '*', element: <Error /> }
		]
	}
]);

function App() {
	return <RouterProvider router={router} />;
}

export default App;
