import UserListItem from "./UsersListItem"

export default function UsersList({ users }) {
	return (
		<ul className='users-list'>
			{users.map((user, i) => {
				return <UserListItem key={i} user={user} />
			})}
		</ul>
	)
}
