import React from "react";

export default function UsersListItem({ data }) {
	console.log("img", data.profileImage);
	return (
		<li style={{ background: data.favouriteColour }}>
			<img
				src={data.profileImage}
				alt={data.firstName + " " + data.lastName}
			/>
			<h3>
				{`${"Mr/Ms/Mrs"} 
                  ${data.firstName} 
                  ${data.lastName}
                  `}
			</h3>
			<p>Email: {data.email}</p>
		</li>
	);
}
