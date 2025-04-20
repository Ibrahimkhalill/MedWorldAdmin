// UserChatPage.jsx
import { useState } from 'react';
import {
	FiPaperclip,
	FiSend,
	FiDownload,
	FiSave,
	FiEdit,
	FiArrowLeft,
} from 'react-icons/fi';
import UserSidebar from '../../component/user/UserSidebar';
import Navbar from '../../component/Navbar';
import Text from '../../assets/text.png';
import Sidbar from '../../assets/sidebar.svg';
const UserChatPage = () => {
	const [messages, setMessages] = useState([
		{
			sender: 'user',
			text: 'ype and scrambled it to make a',
			timestamp: '12/10/25, 2:30pm',
		},
		{
			sender: 'ai',
			text: 'ype and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in ype and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in',
			timestamp: '12/10/25, 2:30pm',
		},
	]);
	const [newMessage, setNewMessage] = useState('');
	const [isSidebarOpen, setIsSidebarOpen] = useState(false);

	const pdfContent = `
    FitNesse, you probably don’t understand all the details, if this function performs the inclusion of some detail, and then renders that page into HTML. If you are familiar with this function belongs to some kind of web-based that is correct. Divining information from Listing 3-2 is obscured by Listing 3-1.

    action like Listing 3-2 easy to read and understand? How can its intent? What attributes can we give our functions to input the kind of program they live inside?

    hey should be small. The second rule of functions is that they should be smaller than that. This is not an assertion that I can justify. I can’t provide any references to research that shows that very small functions are better. What I can tell you is that I have written functions of all different sizes in my 40 years of programming. I’ve written scads of functions in the 100 to 300 flex items-center gap-2 lines that were 20 to 30 lines long. What this experience has taught me, through long trial and error, is that functions should be very small.

    by that a function should be no bigger than a screen-full. When VT100 screens were 24 lines by 80 columns, and I was working in assembler, I developed a strong sense of the size of a function. Nowadays, with a cranked-down font, I can get 150 characters on a line and a 100 lines or more on a screen. It’s still a pretty good rule of thumb to keep functions small.

    be? In 1999 I went to visit Kent Beck at his home in Oregon to do a little programming together. At one point he showed me a cute little program called Sparkle. It produced a visual effect on the screen of the fairy godmother in the movie Cinderella. As you could drip from the cursor with a satisfying scintillation, Sparkle would draw a little star at the position of the cursor and then let it fade away. I was used to functions that were small all the functions were. I was used to functions that were small, on the order of 2 to 5 lines long. Each was transparently obvious. Each told a story. And each led you to the next in a compelling order. That’s how short your functions
  `;

	const handleSendMessage = () => {
		if (newMessage.trim() === '') return;
		setMessages([
			...messages,
			{
				sender: 'user',
				text: newMessage,
				timestamp: new Date().toLocaleString('en-US', {
					day: '2-digit',
					month: '2-digit',
					year: '2-digit',
					hour: '2-digit',
					minute: '2-digit',
				}),
			},
		]);
		setNewMessage('');
		// Simulate AI response (replace with actual API call if needed)
		setTimeout(() => {
			setMessages((prev) => [
				...prev,
				{
					sender: 'ai',
					text: 'This is a simulated AI response to your message.',
					timestamp: new Date().toLocaleString('en-US', {
						day: '2-digit',
						month: '2-digit',
						year: '2-digit',
						hour: '2-digit',
						minute: '2-digit',
					}),
				},
			]);
		}, 1000);
	};

	const toggleSidebar = () => {
		setIsSidebarOpen(!isSidebarOpen);
	};

	return (
		<div className="min-h-screen flex flex-col ">
			{/* Header */}
			<Navbar />

			{/* Main Content */}
			<div className="flex flex-1 mt-[75px]">
				{/* Sidebar */}
				<UserSidebar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />

				{/* Main Content Area */}
				<div
					className={`${
						isSidebarOpen ? 'md:w-[86%]' : 'w-full'
					} flex md:ml-auto`}>
					{/* PDF Viewer */}
					<div className="md:w-1/2 border-r border-gray-200 md:block hidden">
						<div className="flex justify-end relative items-center mb-4 bg-[#DBF1FB] py-3 px-2 shadow-lg">
							<button
								onClick={toggleSidebar}
								className="p-2 bg-gray-200 absolute left-2 z-50 rounded-lg hover:bg-gray-300 flex items-center gap-2">
								<img src={Sidbar} alt="" className="w-7" />
							</button>
							<div className="flex space-x-2">
								<button className="p-2 bg-gray-200 rounded-lg hover:bg-gray-300 flex items-center gap-2">
									Save
									<FiSave />
								</button>
								<button className="p-2 bg-gray-200 rounded-lg hover:bg-gray-300 flex items-center gap-2">
									Edit
									<FiEdit />
								</button>
								<button className="p-2 bg-gray-200 rounded-lg hover:bg-gray-300 flex items-center gap-2">
									<FiDownload />
									Download
								</button>
							</div>
						</div>
						<div className="bg-white p-4 rounded-lg shadow-sm h-[calc(100vh-150px)] overflow-y-auto">
							<p className="text-sm text-gray-700 whitespace-pre-wrap">
								{pdfContent}
							</p>
						</div>
					</div>

					{/* Chat Section */}
					<div className="md:w-1/2 flex flex-col w-full">
						<div className="bg-[#DBF1FB] py-1 px-2 mb-3 shadow-lg flex items-center gap-2">
							<img src={Text} alt="" />
							<span className="text-sm text-[#012939]">
								Smart PDF Generator
							</span>
						</div>
						<div className="flex-1 overflow-y-auto px-2">
							{messages.map((message, index) => (
								<div
									key={index}
									className={`mb-4 flex ${
										message.sender === 'user' ? 'justify-end' : 'justify-start'
									}`}>
									<div
										className={`max-w-xs p-3 rounded-lg ${
											message.sender === 'user'
												? 'bg-blue-100 text-gray-800'
												: 'bg-gray-100 text-gray-800'
										}`}>
										<p className="text-sm">{message.text}</p>
										<p className="text-xs text-gray-500 mt-1">
											{message.timestamp}
										</p>
									</div>
								</div>
							))}
						</div>
						<div className="mb-5 flex items-center space-x-2 px-2">
							<button className="p-2 text-gray-600 hover:text-gray-800">
								<FiPaperclip />
							</button>
							<input
								type="text"
								value={newMessage}
								onChange={(e) => setNewMessage(e.target.value)}
								placeholder="Type a message"
								className="flex-1 p-2 border border-gray-300 flex items-center gap-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
							/>
							<button
								onClick={handleSendMessage}
								className="p-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
								<FiSend />
							</button>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default UserChatPage;
