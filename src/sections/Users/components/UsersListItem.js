

function UserListItem({ user }) {
	let backgroundClass

	if (user.gender === "male")
	{
		backgroundClass = "bg-blue"
	}
	else
	{
		backgroundClass = "bg-pink"
	}

	return (
		<li className={backgroundClass}>
			<img src={user.picture.medium} alt={`${user.name.first} ${user.name.last}`} />
			<h3>{`${user.name.title} ${user.name.first} ${user.name.last}`}</h3>
			<p>Email: {user.email}</p>
		</li>
	)
}

export default UserListItem