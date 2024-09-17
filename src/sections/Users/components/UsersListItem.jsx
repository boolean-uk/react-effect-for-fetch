import React from "react";

function UsersListItem({
	user: { profileImage, firstName, lastName, email, favouriteColour },
}) {
	return (
		<li style={{ background: favouriteColour }}>
			<img src={profileImage} alt={`${firstName} ${lastName}`} />
			<h3>{`Mr ${firstName} ${lastName}`}</h3>
			<p>Email: {email}</p>
		</li>
	);
}

export default UsersListItem;
