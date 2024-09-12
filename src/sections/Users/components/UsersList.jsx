import UsersListItem from "./UsersListItem";

const UsersList = ({ users }) => {
	return (
		<ul className="users-list">
			{users.map((user, index) => {
				return <UsersListItem key={index} user={user} />;
			})}
		</ul>
	);
};

export default UsersList;
