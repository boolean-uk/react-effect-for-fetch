import UserListItem from './UsersListItem.jsx';

function UserList(props) {
	const { userList } = props;

	return (
		<>
			<ul className="users-list">
				{userList.map((userData, index) => (
					<UserListItem user={userData} key={index} />
				))}
			</ul>
		</>
	);
}

export default UserList;
