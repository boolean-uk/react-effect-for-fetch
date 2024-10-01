import UserList from './components/UsersList.jsx';
import { useState, useEffect } from 'react';

function UsersSection() {
	const apiURL = 'https://boolean-uk-api-server.fly.dev/johnfa1508/contact/';
	const [userData, setUserData] = useState([]);

	useEffect(() => {
		const fetchData = async () => {
			const response = await fetch(apiURL);
			const jsonData = await response.json();

			setUserData(jsonData);
		};

		fetchData();
	}, []);

	return (
		<section>
			<h2>Users Section</h2>
			<div className="scroll-container">
				<UserList userList={userData} />
			</div>
		</section>
	);
}

export default UsersSection;
