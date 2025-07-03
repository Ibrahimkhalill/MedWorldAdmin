import Sidebar from '../component/Sidebars';

const PrivacyPolicy = () => {
	return (
		<div className="flex flex-col items-start justify-center p-4 w-full mx-auto">
			{/* Header */}
			<h1 className="text-3xl w-full text-center font-bold mb-6 ml-4">
				Privacy Policy
			</h1>
			<div className="prose prose-sm sm:prose lg:prose-lg mx-4">
				<p className="text-gray-600">
					<strong>Effective Date:</strong> 21/04/2025
				</p>
				<p>
					MEDworld respects your privacy and is committed to protecting the
					personal information you share with us. This Privacy Policy outlines
					how we collect, use, disclose, and safeguard your information when you
					use the MEDworld application ("App").
				</p>
				<p>
					By using the App, you agree to the terms of this Privacy Policy. If
					you do not agree, please refrain from using the App.
				</p>

				<h2 className="text-xl font-semibold mt-6 mb-2">
					1. Information We Collect
				</h2>
				<h3 className="text-lg font-medium mt-4">1.1 Personal Data</h3>
				<ul className="list-disc pl-6">
					<li>Full name</li>
					<li>Email address</li>
					<li>
						Professional details (e.g., qualifications, certifications, work
						history)
					</li>
					<li>Any other data you manually input into the app</li>
				</ul>

				<h3 className="text-lg font-medium mt-4">1.2 Usage Data</h3>
				<ul className="list-disc pl-6">
					<li>Device type, operating system, and version</li>
					<li>Language and region settings</li>
					<li>Access times and usage patterns</li>
					<li>Diagnostic and performance data (to improve the App)</li>
				</ul>
				<p className="italic">
					Note: We do not collect sensitive personal data unless you voluntarily
					provide it.
				</p>

				<h2 className="text-xl font-semibold mt-6 mb-2">
					2. How We Use Your Information
				</h2>
				<ul className="list-disc pl-6">
					<li>To provide, maintain, and improve the MEDworld App</li>
					<li>To manage your subscription and account</li>
					<li>To offer personalized user experience</li>
					<li>To provide customer support</li>
					<li>To send important notices or updates related to the App</li>
					<li>To monitor usage trends and analyze performance</li>
					<li>To comply with legal obligations</li>
				</ul>
				<p>
					We do not use your information for advertising purposes or share it
					with third parties for marketing.
				</p>

				<h2 className="text-xl font-semibold mt-6 mb-2">
					3. Data Storage and Security
				</h2>
				<ul className="list-disc pl-6">
					<li>
						Your data is stored securely using encryption and access control
						measures.
					</li>
					<li>
						We use industry-standard safeguards to protect against unauthorized
						access, disclosure, alteration, or destruction.
					</li>
					<li>
						Access to your information is limited to authorized personnel only
						where absolutely necessary.
					</li>
					<li>
						Administrators of the platform do not have access to view or edit
						the data entered by users. This ensures full respect for user
						privacy and guarantees that all data remains exclusively the
						property of the user.
					</li>
					<li>
						In the event of a data breach, we will notify users and regulators
						as required by law.
					</li>
				</ul>

				<h2 className="text-xl font-semibold mt-6 mb-2">4. Data Retention</h2>
				<ul className="list-disc pl-6">
					<li>For as long as you maintain an account with us</li>
					<li>
						As needed to comply with legal obligations or resolve disputes
					</li>
					<li>
						You may request deletion of your data at any time (see Section 7)
					</li>
				</ul>

				<h2 className="text-xl font-semibold mt-6 mb-2">
					5. Third-Party Services
				</h2>
				<ul className="list-disc pl-6">
					<li>
						The App may use third-party services (e.g., payment providers,
						analytics tools) that collect data in accordance with their own
						privacy policies.
					</li>
					<li>
						We are not responsible for the data handling practices of
						third-party platforms.
					</li>
				</ul>

				<h2 className="text-xl font-semibold mt-6 mb-2">
					6. International Data Transfers
				</h2>
				<p>
					If you are located outside the jurisdiction where our servers are
					hosted, your data may be transferred to, stored in, and processed in a
					country that may not offer the same level of data protection. By using
					the App, you consent to such transfers.
				</p>

				<h2 className="text-xl font-semibold mt-6 mb-2">7. Your Rights</h2>
				<ul className="list-disc pl-6">
					<li>Access the data we hold about you</li>
					<li>Request correction or deletion</li>
					<li>Object to or restrict processing</li>
					<li>Withdraw consent at any time</li>
					<li>File a complaint with a data protection authority</li>
				</ul>
				<p>You can exercise these rights by contacting us (see Section 9).</p>

				<h2 className="text-xl font-semibold mt-6 mb-2">
					8. Children's Privacy
				</h2>
				<p>
					This App is intended for use by professionals aged 18 or older. We do
					not knowingly collect data from children under 18. If you become aware
					that a minor has provided us with data, please contact us and we will
					delete it promptly.
				</p>

				<h2 className="text-xl font-semibold mt-6 mb-2">9. Contact Us</h2>
				<p>
					If you have any questions or concerns about this Privacy Policy, or if
					you would like to exercise your rights, please contact:
				</p>
				<p>
					<strong>Email:</strong>{' '}
					<a
						href="mailto:medworld@medworld.online"
						className="text-blue-600 hover:underline">
						medworld@medworld.online
					</a>
				</p>

				<h2 className="text-xl font-semibold mt-6 mb-2">
					10. Changes to This Policy
				</h2>
				<p>
					We may update this Privacy Policy from time to time. Any changes will
					be posted within the App or sent via email. Continued use of the App
					after updates constitutes acceptance of the new terms.
				</p>

				<h2 className="text-xl font-semibold mt-6 mb-2">Final Statement</h2>
				<p>
					By using MEDworld, you confirm that you have read and understood this
					Privacy Policy and consent to the practices described.
				</p>
			</div>
		</div>
	);
};

export default PrivacyPolicy;
