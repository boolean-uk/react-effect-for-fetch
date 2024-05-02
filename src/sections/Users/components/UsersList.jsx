import React from "react";
import UsersListItem from "./UsersListItem";

export default function UsersList({ data }) {
	return (
		<ul className="users-list">
			{data.map((e, i) => (
				<UsersListItem
					data={e}
					key={"users-list-item-" + i}
				/>
			))}
		</ul>
	);
}
