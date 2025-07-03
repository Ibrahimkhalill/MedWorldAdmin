import React, { useEffect, useState } from 'react';
import Sidebar from '../component/Sidebars';
import Dashboard from '../component/Dashborads';
import axiosInstance from '../component/axiosInstance';

const Home = () => {
	const [userData, setUserData] = useState([]);
	const [homeData, setHomeData] = useState({});
	const [barChartData, setBarChartData] = useState([]);
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		const fetchUserData = async () => {
			try {
				const response = await axiosInstance.get('/get_all_subscription/');
				setUserData(response.data);
				console.log(response.data);
			} catch (error) {
				console.error('Error fetching subscriptions data:', error);
			} finally {
				setLoading(false);
			}
		};
		const fetchDashbordData = async () => {
			try {
				const response = await axiosInstance.get(
					'/calculate_all_for_dashborad/'
				);
				setHomeData(response.data);
				console.log('f', response.data);
			} catch (error) {
				console.error('Error fetching subscriptions data:', error);
			} finally {
				setLoading(false);
			}
		};
		const fetchBarChartData = async () => {
			try {
				const response = await axiosInstance.get('/calculate_yearly_revenue/');
				setBarChartData(response.data.all_revenue_data);
				console.log('bar chart', response.data);
			} catch (error) {
				console.error('Error fetching subscriptions data:', error);
			} finally {
				setLoading(false);
			}
		};

		fetchUserData();
		fetchDashbordData();
		fetchBarChartData();
	}, []);

	return (
		<Sidebar>
			<div className="p-6">
				<Dashboard data={homeData} barChartData={barChartData} />
			</div>
		</Sidebar>
	);
};

export default Home;
