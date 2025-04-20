import { ArrowLeft, Mail } from 'lucide-react';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Link, Navigate, useNavigate } from 'react-router-dom';
import Register from '../assets/register.png';
export default function EmailConfirmation() {
	const navigate = useNavigate();

	const handleSubmit = (e) => {
		e.preventDefault();
		// Handle form submission
		navigate('/otp-verification');
	};
	// 									id="email"
	return (
		<div className="flex items-center md:justify-between justify-center min-h-screen  md:px-5">
			<div className="w-1/2 h-[95vh] md:block hidden relative rounded-md overflow-hidden">
				<img
					src={Register}
					alt="AI robot reading a book"
					className="w-full h-full object-cover rounded-md"
				/>
			</div>

			<div className="flex flex-col w-full md:w-1/2 p-8 md:p-12 justify-center items-center">
				<div className="w-full max-w-md">
					{/* Logo placeholder */}
					{/* <div className="mb-12 text-right">
						<p className="text-xl text-gray-700">Logo here</p>
					</div> */}

					{/* Card */}
					<div className="bg-white rounded-lg shadow-sm border border-gray-100 p-8">
						{/* Back button */}
						<Link
							href="#"
							className="inline-flex items-center text-sm text-gray-600 hover:text-gray-900 mb-6">
							<ArrowLeft className="mr-2 h-4 w-4" />
							Back
						</Link>

						{/* Form heading */}
						<h1 className="text-2xl font-medium text-center mb-8">
							Confirm email
						</h1>

						{/* Form */}
						<form onSubmit={handleSubmit} className="space-y-6">
							<div className="space-y-4">
								<div className="space-y-2">
									<label
										htmlFor="email"
										className="block text-sm font-medium text-gray-700">
										Email
									</label>
									<div className="relative">
										<div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
											<Mail className="h-5 w-5 text-gray-400" />
										</div>
										<Input
											id="email"
											placeholder="user@mail.com"
											type="email"
											className="pl-10"
										/>
									</div>
								</div>

								<Button
									onclick={handleSubmit}
									type="submit"
									className="w-full bg-[#1e88c9] hover:bg-[#1a78b3] text-white">
									Confirm
								</Button>
							</div>
						</form>
					</div>
				</div>
			</div>
		</div>
	);
}
