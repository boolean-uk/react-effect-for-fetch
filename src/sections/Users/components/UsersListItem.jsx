function UserListItem(props) {
	const {
			//id,
			firstName,
			lastName,
			//gender,
			email,
			/*
		jobTitle,
		street,
		city,
		latitude,
		longtitude,
    */
			favouriteColour,
			profileImage,
		} = props.user,
		key = props;

	return (
		<>
			<li style={{ backgroundColor: favouriteColour }} key={key}>
				<img src={profileImage} alt={`${firstName} ${lastName}`} />
				<h3>{`${firstName} ${lastName}`}</h3>
				<p>Email: {email}</p>
			</li>
		</>
	);
}

export default UserListItem;
