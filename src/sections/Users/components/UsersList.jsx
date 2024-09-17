import React, { useEffect, useState } from "react";
import { getUsers } from "../../../Helpers/APICommunication";
import UsersListItem from "./UsersListItem";
const UsersList = () => {
	const [users, setUsers] = useState([]);

	useEffect(() => {
		getUsers().then((data) => {
			setUsers(data);
		});
	}, []);

	return (
		<ul className="users-list">
			{users.map((user) => (
				<UsersListItem key={user.id} user={user} />
			))}
		</ul>
	);
};

export default UsersList;
