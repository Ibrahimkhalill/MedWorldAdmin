import React, { useEffect, useState } from 'react';
import Sidebar from '../component/Sidebars';
import axiosInstance from '../component/axiosInstance';

const User = () => {
	const [userData, setUserData] = useState([]);

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

		fetchUserData();
	}, []);

	return (
		<Sidebar>
			<div className="p-6 ">
				<h2 className="text-xl text-center font-bold mb-4">User</h2>
				<div className="bg-white p-4 rounded-lg shadow-md border border-[#FFDC58] overflow-x-auto">
					{loading ? (
						<div className="text-center p-4 text-gray-500">Loading data...</div>
					) : (
						<table className="w-full table-auto text-left border-collapse">
							<thead>
								<tr>
									<th className="p-4 text-start">Img</th>
									<th className="p-4 text-center">Name</th>
									<th className="p-4 text-center">Subscription</th>
									<th className="p-4 text-right">Email</th>
								</tr>
							</thead>
							<tbody>
								{userData.length > 0 ? (
									userData.map((user, index) => (
										<tr
											key={index}
											className="hover:bg-gray-50 transition duration-200 ease-in-out">
											<td className="p-4 text-center">
												{user.user_profile?.profile_picture ? (
													<img
														src={`${import.meta.env.VITE_REACT_BASE_URL}${user.user_profile?.profile_picture
															}`}
														alt={'user'}
														className="rounded-full w-[40px] h-[40px]"
													/>
												) : (
													<img
														src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png"
														alt="User"
														className="rounded-full  w-[40px] h-[40px]"
													/>
												)}
											</td>
											<td className="p-4 text-center">
												{user?.user_profile?.username}
											</td>
											<td className="p-4 text-center">
												{user.is_active
													? 'Premium'
													: user.is_free || user.free_trial_end
														? 'Free'
														: 'Subcriptions Expired'}
											</td>
											<td className="p-4 text-right">
												{user?.user_profile?.email}
											</td>
										</tr>
									))
								) : (
									<tr>
										<td colSpan="4" className="text-center p-4 text-gray-500">
											No user data available.
										</td>
									</tr>
								)}
							</tbody>
						</table>
					)}
				</div>
			</div>
		</Sidebar>
	);
};

export default User;
