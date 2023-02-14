import { useEffect, useState } from "react";

function UsersSection() {
	const [users, setUsers] = useState([]);

	useEffect(() => {
		fetch("https://randomuser.me/api/?results=5")
			.then((res) => res.json())
			.then((data) => setUsers(data.results));
	}, []);

	return (
		<section>
			<h2>Users Section</h2>
			<div className="scroll-container">
				<ul className="users-list">
					{users.map((user) => {
						const { name, email, picture } = user;
						return (
							<li class={user.gender === "male" ? "bg-red" : "bg-blue"}>
								<img src={picture.large} alt="User pfp" />
								<h3>{`${name.title} ${name.first} ${name.last}`}</h3>
								<p>Email: {email}</p>
							</li>
						);
					})}
				</ul>
			</div>
		</section>
	);
}

export default UsersSection;
