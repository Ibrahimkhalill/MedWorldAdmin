// Sidebar.jsx
import { useState } from 'react';
import { FiArrowLeft } from 'react-icons/fi';

const UserSidebar = ({ isOpen, toggleSidebar }) => {
	const [activeTab, setActiveTab] = useState('History');

	const chatHistory = [
		{ title: 'ype and scrambled it to make a', date: 'Today' },
		{ title: 'Lorem ipsum is simply dummy', date: 'Today' },
		{ title: 'se of Letraset sheets containing', date: 'Today' },
		{ title: 'Sidney College in Virginia, looked u', date: 'Today' },
		{ title: 'randomised words which d', date: 'Today' },
		{ title: 'look like readable English', date: 'Today' },
		{ title: 'e going to use a passage of Lorem', date: 'Today' },
		{ title: 'and scrambled it to make a type', date: 'Today' },
		{ title: 'look like readable English, Many', date: 'Today' },
		{ title: 'randomised words which d', date: 'Today' },
		{ title: 'Sidney College in Virginia, looked u', date: 'Yesterday' },
	];

	const pdfList = [
		{ title: 'asfdgjhdfgkjhlj', time: '9:00 am', date: 'Today' },
		{ title: 'asfdgjhdfgkjhlj', time: '9:00 am', date: 'Today' },
		{ title: 'asfdgjhdfgkjhlj', time: '9:00 am', date: 'Today' },
		{ title: 'asfdgjhdfgkjhlj', time: '9:00 am', date: 'Today' },
		{ title: 'asfdgjhdfgkjhlj', time: '9:00 am', date: 'Today' },
		{ title: 'asfdgjhdfgkjhlj', time: '9:00 am', date: 'Today' },
		{ title: 'asfdgjhdfgkjhlj', time: '9:00 am', date: 'Today' },
		{ title: 'asfdgjhdfgkjhlj', time: '9:00 am', date: 'Today' },
		{ title: 'asfdgjhdfgkjhlj', time: '9:00 am', date: 'Today' },
		{ title: 'asfdgjhdfgkjhlj', time: '9:00 am', date: 'Today' },
		{ title: 'asfdgjhdfgkjhlj', time: '9:00 am', date: 'Today' },
		{ title: 'asfdgjhdfgkjhlj', time: '9:00 am', date: 'Today' },
		{ title: 'asfdgjhdfgkjhlj', time: '9:00 am', date: 'Today' },
		{ title: 'asfdgjhdfgkjhlj', time: '9:00 am', date: 'Today' },
		{ title: 'asfdgjhdfgkjhlj', time: '9:00 am', date: 'Today' },
		{ title: 'asfdgjhdfgkjhlj', time: '9:00 am', date: 'Yesterday' },
		{ title: 'asfdgjhdfgkjhlj', time: '9:00 am', date: 'Yesterday' },
		{ title: 'asfdgjhdfgkjhlj', time: '9:00 am', date: 'Yesterday' },
		{ title: 'asfdgjhdfgkjhlj', time: '9:00 am', date: 'Yesterday' },
		{ title: 'asfdgjhdfgkjhlj', time: '9:00 am', date: 'Yesterday' },
		{ title: 'asfdgjhdfgkjhlj', time: '9:00 am', date: 'Yesterday' },
		{ title: 'asfdgjhdfgkjhlj', time: '9:00 am', date: 'Yesterday' },
		{ title: 'asfdgjhdfgkjhlj', time: '9:00 am', date: 'Yesterday' },
		{ title: 'asfdgjhdfgkjhlj', time: '9:00 am', date: 'Yesterday' },
		{ title: 'asfdgjhdfgkjhlj', time: '9:00 am', date: 'Yesterday' },
		{ title: 'asfdgjhdfgkjhlj', time: '9:00 am', date: 'Yesterday' },
	];

	// Function to group items by date
	const groupByDate = (items) => {
		return items.reduce((acc, item) => {
			const date = item.date;
			if (!acc[date]) {
				acc[date] = [];
			}
			acc[date].push(item);
			return acc;
		}, {});
	};

	const groupedChatHistory = groupByDate(chatHistory);
	const groupedPdfList = groupByDate(pdfList);

	return (
		<div
			className={`md:w-[14%] bg-[#F6F8FA] border-r border-[#B3BECC] transform transition-transform duration-300 ${
				isOpen ? 'translate-x-0' : '-translate-x-full'
			} fixed h-[calc(100vh-80px)] shadow top-[75px] z-50`} // Increased z-index to 50, adjusted top for mt-20
		>
			<div className="bg-[#DBF1FB] py-[2px] px-4 pt-2 mb-3 shadow-lg">
				<div className="flex  mb-4 text-sm">
					<button
						onClick={() => setActiveTab('History')}
						className={`flex-1 py-2 rounded-lg ${
							activeTab === 'History'
								? 'bg-blue-600 text-white'
								: 'bg-gray-200 text-gray-700'
						} hover:bg-blue-700 hover:text-white`}>
						History
					</button>
					<button
						onClick={() => setActiveTab('PDF List')}
						className={`flex-1 py-2 rounded-lg ${
							activeTab === 'PDF List'
								? 'bg-blue-600 text-white'
								: 'bg-gray-200 text-gray-700'
						} hover:bg-blue-700 hover:text-white`}>
						PDF List
					</button>
				</div>
			</div>
			<div className="px-3">
				<div className="flex items-center justify-start mb-4">
					<h2 className="text-lg font-semibold">
						{activeTab === 'History' ? 'Chat History' : 'Saved pdf'}
					</h2>
				</div>

				<div className="space-y-2 h-[74vh] overflow-y-auto">
					{activeTab === 'History'
						? Object.keys(groupedChatHistory).map((date) => (
								<div key={date}>
									<p className="text-sm font-medium">{date}</p>
									{groupedChatHistory[date].map((chat, index) => (
										<div
											key={index}
											className="p-2 hover:bg-gray-200 rounded-lg">
											<p className="text-xs text-gray-600">{chat.title}</p>
										</div>
									))}
								</div>
						  ))
						: Object.keys(groupedPdfList).map((date) => (
								<div key={date}>
									<p className="text-sm font-medium">{date}</p>
									{groupedPdfList[date].map((pdf, index) => (
										<div
											key={index}
											className="p-2 hover:bg-gray-200 rounded-lg">
											<p className="text-xs text-gray-600">
												{index + 1}. {pdf.title} ({pdf.time})
											</p>
										</div>
									))}
								</div>
						  ))}
				</div>
			</div>
		</div>
	);
};

export default UserSidebar;
