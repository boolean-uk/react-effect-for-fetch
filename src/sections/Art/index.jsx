import { useEffect, useState } from "react";
import ArtList from "./components/ArtList";

function ArtsSection() {
	const [data, setData] = useState([]);
	useEffect(() => {
		//fetch artwork
		fetch("https://boolean-uk-api-server.fly.dev/art")
			.then((res) => res.json())
			.then((res) => setData(res));
	}, []);
	return (
		<section>
			<h2>Arts Section</h2>
			<div className="scroll-container">
				<ArtList data={data}></ArtList>
			</div>
		</section>
	);
}

export default ArtsSection;
