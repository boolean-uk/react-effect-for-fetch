import { useEffect, useState } from "react";
import UsersList from "./components/UsersList";

function UsersSection() {
	const [data, setData] = useState([]);
	useEffect(() => {
		fetch("https://boolean-uk-api-server.fly.dev/rafa-lopes-pt/contact")
			.then((res) => res.json())
			.then((res) => setData(res));
	}, []);

	return (
		<section>
			<h2>Users Section</h2>
			<div className="scroll-container">
				<UsersList data={data} />
			</div>
		</section>
	);
}

export default UsersSection;
