import React from 'react';

import { Routes, Route, Link, BrowserRouter, Navigate } from 'react-router-dom';
import { useAuth } from './component/AuthContext';
import Login from './authentication/Login';
import './App.css';
import LandingPage from './page/LandingPage';
import RegistrationPage from './authentication/Registration';
import ActivateEmail from './authentication/ActivateEmail';
import OtpVerification from './authentication/OtpVerification';
import ResetPassword from './authentication/ResetPassword';
import ForgetEmail from './authentication/ForgetEmail';
import UserManagement from './page/admin/UserManagement';
import Notifications from './page/admin/Notifications';
import UserChatPage from './page/user/UserChatPage';

function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/login" element={<Login />} />
				<Route path="/signup" element={<RegistrationPage />} />
				<Route path="/" element={<LandingPage />} />
				<Route path="/forget-password" element={<ForgetEmail />} />
				<Route path="/otp-verification" element={<OtpVerification />} />
				<Route path="/reset-password" element={<ResetPassword />} />
				<Route path="/dashboard" element={<UserManagement />} />
				<Route path="/notification" element={<Notifications />} />
				<Route path="/chat" element={<UserChatPage />} />
			</Routes>
		</BrowserRouter>
	);
}
const ProtectedRoute = ({ component }) => {
	const { isAuthenticated } = useAuth();

	return isAuthenticated ? component : <Navigate to="/" replace />;
};
export default App;
