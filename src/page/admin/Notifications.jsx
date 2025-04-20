import { useState } from 'react';
import { FiBell, FiTrash2 } from 'react-icons/fi';
import Sidebar from '../../component/admin/Sidebar';

const initialNotifications = [
	{
		id: 1,
		message: '100 new subscriber joined your platform this week.',
		timestamp: 'Today',
	},
	{
		id: 2,
		message: '100 Users used your logged in Yesterday.',
		timestamp: 'Yesterday',
	},
	{ id: 3, message: '10 new Sign up yesterday.', timestamp: '7 days ago' },
	{
		id: 4,
		message: '100 new subscriber joined your platform this week.',
		timestamp: 'Today',
	},
	{
		id: 5,
		message: '100 Users used your logged in Yesterday.',
		timestamp: 'Yesterday',
	},
	{ id: 6, message: '10 new Sign up yesterday.', timestamp: '7 days ago' },
	{
		id: 7,
		message: '100 new subscriber joined your platform this week.',
		timestamp: 'Today',
	},
	{
		id: 8,
		message: '100 Users used your logged in Yesterday.',
		timestamp: 'Yesterday',
	},
	{ id: 9, message: '10 new Sign up yesterday.', timestamp: '7 days ago' },
];

const Notifications = () => {
	const [notifications, setNotifications] = useState(initialNotifications);

	const handleDelete = (id) => {
		setNotifications(
			notifications.filter((notification) => notification.id !== id)
		);
	};

	return (
		<Sidebar>
			<div className=" h-[98vh] bg-gray-100 ml-2 py-12">
				<h2 className="text-2xl font-semibold text-gray-800 text-center my-4">
					Notifications
				</h2>
				<div className="max-w-7xl mx-auto bg-white rounded-lg shadow-sm">
					{/* Header */}

					{/* Notification List */}
					<div className="divide-y divide-gray-200">
						{notifications.map((notification) => (
							<div
								key={notification.id}
								className="flex items-center justify-between p-4 hover:bg-gray-50">
								<div>
									<p className="text-sm text-gray-700">
										{notification.message}
									</p>
									<p className="text-xs text-gray-500">
										{notification.timestamp}
									</p>
								</div>
								<button
									onClick={() => handleDelete(notification.id)}
									className="text-red-500 hover:text-red-600">
									<FiTrash2 size={16} />
								</button>
							</div>
						))}
					</div>
				</div>
			</div>
		</Sidebar>
	);
};

export default Notifications;
