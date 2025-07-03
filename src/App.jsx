import React from 'react';
import { Routes, Route, BrowserRouter, Navigate } from 'react-router-dom';
import { useAuth } from './component/AuthContexts';
import Login from './authentication/Login';
import './App.css';
import Home from './page/Homes';
import User from './page/User';
import PrivacyPolicy from './page/PrivacyPolicys';

function App() {
	return (
		<BrowserRouter>
			<Routes>
				{/* Protected Login Route to prevent logged in users from accessing the login page */}
				<Route
					path="/login"
					element={<ProtectedLoginRoute component={<Login />} />}
				/>
				<Route path="/privacy-policy" element={<PrivacyPolicy />} />
				{/* Protected Routes */}
				<Route path="/" element={<ProtectedRoute component={<Home />} />} />
				<Route path="/user" element={<ProtectedRoute component={<User />} />} />
			</Routes>
		</BrowserRouter>
	);
}

// ProtectedRoute component to handle private routes
const ProtectedRoute = ({ component }) => {
	const { isAuthenticated } = useAuth(); // useAuth is used to check if the user is authenticated

	// If the user is authenticated, return the component, else redirect to login page
	return isAuthenticated ? component : <Navigate to="/login" replace />;
};

// ProtectedLoginRoute to prevent logged in users from accessing the login page
const ProtectedLoginRoute = ({ component }) => {
	const { isAuthenticated } = useAuth();

	// If the user is logged in, redirect them to the home page or another protected page
	return isAuthenticated ? <Navigate to="/" replace /> : component;
};

export default App;
