function UserListItem({ user }) {
	const backgroundClass = user.gender === "male" ?  "bg-blue" : "bg-pink"

	return (
		<li className={backgroundClass}>
			<img src={user.picture.medium} alt={`${user.name.first} ${user.name.last}`} />
			<h3>{`${user.name.title} ${user.name.first} ${user.name.last}`}</h3>
			<p>Email: {user.email}</p>
		</li>
	)
}

export default UserListItem