import { useState, useEffect, useRef } from 'react';
import {
	FiSearch,
	FiInfo,
	FiMoreHorizontal,
	FiTrash2,
	FiAlertTriangle,
} from 'react-icons/fi';
import Sidebar from '../../component/admin/Sidebar';
import UserDetailsModal from '../../component/admin/UserDetailsModal';
import GiveNoticeModal from '../../component/admin/GiveNoticeModal';

const users = [
	{ id: '55-1234', name: 'Takács Bianka', startingDate: '12 July 2024' },
	{ id: '55-1234', name: 'Sipos Veronika', startingDate: '12 July 2024' },
	{ id: '55-1234', name: 'Nagy Timea', startingDate: '12 July 2024' },
	{ id: '55-1234', name: 'Kende Lili', startingDate: '12 July 2024' },
	{ id: '55-1234', name: 'Pásztor Kira', startingDate: '12 July 2024' },
	{ id: '55-1234', name: 'Virág Mercédesz', startingDate: '12 July 2024' },
	{ id: '55-1234', name: 'Hajdú Dominika', startingDate: '12 July 2024' },
	{ id: '55-1234', name: 'Balázs Annamária', startingDate: '12 July 2024' },
	{ id: '55-1234', name: 'Kelemen Krisztina', startingDate: '12 July 2024' },
];

const UserManagement = () => {
	const [searchTerm, setSearchTerm] = useState('');
	const [isUserDetailsModalOpen, setIsUserDetailsModalOpen] = useState(false);
	const [isGiveNoticeModalOpen, setIsGiveNoticeModalOpen] = useState(false);
	const [dropdownIndex, setDropdownIndex] = useState(null);
	const [selectedUser, setSelectedUser] = useState(null);

	const dropdownRefs = useRef([]); // Array to store refs for each dropdown

	const filteredUsers = users.filter(
		(user) =>
			user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
			user.id.includes(searchTerm)
	);

	const toggleDropdown = (index) => {
		setDropdownIndex(dropdownIndex === index ? null : index);
	};

	const handleDeleteAccount = (user) => {
		console.log(`Deleting account for user: ${user.name}`);
		// Add your delete account logic here (e.g., API call)
		setDropdownIndex(null);
	};

	const handleGiveNotice = (user) => {
		setSelectedUser(user);
		setIsGiveNoticeModalOpen(true);
		setDropdownIndex(null);
	};

	// Close dropdown on outside click
	useEffect(() => {
		const handleClickOutside = (event) => {
			// Check if the click is outside any of the dropdowns
			const isOutside = dropdownRefs.current.every(
				(ref, index) =>
					!ref || !ref.contains(event.target) || dropdownIndex !== index
			);

			if (isOutside && dropdownIndex !== null) {
				setDropdownIndex(null);
			}
		};

		document.addEventListener('mousedown', handleClickOutside);
		return () => {
			document.removeEventListener('mousedown', handleClickOutside);
		};
	}, [dropdownIndex]);

	return (
		<Sidebar>
			<div className="h-[98vh] bg-gray-100 ml-2 py-12">
				<div className="p-3 mx-auto">
					{/* Header and Search Bar */}
					<div className="flex justify-between items-center mb-6">
						<h1 className="text-2xl font-semibold text-gray-800">
							User Management
						</h1>
						<div className="relative">
							<input
								type="text"
								placeholder="Search by username or ID"
								value={searchTerm}
								onChange={(e) => setSearchTerm(e.target.value)}
								className="pl-10 pr-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
							/>
							<FiSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
						</div>
					</div>

					{/* Table */}
					<div className="bg-white rounded-lg shadow-sm h-[80vh] overflow-y-auto">
						<table className="w-full text-left">
							<thead>
								<tr className="bg-gray-200 text-gray-600 text-sm font-medium">
									<th className="py-3 px-4">User ID</th>
									<th className="py-3 px-4">Name</th>
									<th className="py-3 px-4">Starting Date</th>
									<th className="py-3 px-4">User Info</th>
									<th className="py-3 px-4">Action</th>
								</tr>
							</thead>
							<tbody>
								{filteredUsers.map((user, index) => (
									<tr
										key={index}
										className="border-t border-gray-200 text-gray-700 text-sm hover:bg-gray-50 relative">
										<td className="py-3 px-4">{user.id}</td>
										<td className="py-3 px-4">{user.name}</td>
										<td className="py-3 px-4">{user.startingDate}</td>
										<td className="py-3 px-4">
											<button
												className="flex items-center text-gray-600 hover:text-blue-600"
												onClick={() => setIsUserDetailsModalOpen(true)}>
												<FiInfo className="mr-1" />
												Click
											</button>
										</td>
										<td className="py-3 px-4">
											<button
												onClick={() => toggleDropdown(index)}
												className="text-gray-600 hover:text-blue-600">
												<FiMoreHorizontal />
											</button>
											{/* Dropdown Menu */}
											{dropdownIndex === index && (
												<div
													ref={(el) => (dropdownRefs.current[index] = el)} // Assign ref to each dropdown
													className="absolute right-4 top-12 bg-white border border-gray-200 rounded-lg shadow-lg z-10">
													<button
														onClick={() => handleDeleteAccount(user)}
														className="flex items-center px-4 py-2 text-gray-700 hover:bg-gray-100 w-full text-left">
														<FiTrash2 className="mr-2 text-gray-600" />
														Delete Account
													</button>
													<button
														onClick={() => handleGiveNotice(user)}
														className="flex items-center px-4 py-2 text-gray-700 hover:bg-gray-100 w-full text-left">
														<FiAlertTriangle className="mr-2 text-gray-600" />
														Give a Notice
													</button>
												</div>
											)}
										</td>
									</tr>
								))}
							</tbody>
						</table>
					</div>
				</div>
			</div>

			{/* User Details Modal */}
			<UserDetailsModal
				isOpen={isUserDetailsModalOpen}
				onClose={() => setIsUserDetailsModalOpen(false)}
			/>

			{/* Give Notice Modal */}
			<GiveNoticeModal
				isOpen={isGiveNoticeModalOpen}
				onClose={() => setIsGiveNoticeModalOpen(false)}
				user={selectedUser}
			/>
		</Sidebar>
	);
};

export default UserManagement;
