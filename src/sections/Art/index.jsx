import { useEffect } from "react";
import { useState } from "react";
import ArtList from "./components/ArtList";

function ArtsSection() {
	const [art, setArt] = useState([]);

	useEffect(() => {
		fetch("https://boolean-api-server.fly.dev/art")
			.then((response) => response.json())
			.then((artData) => {
				setArt(artData);
			});
	}, [art]);

	return (
		<section>
			<h2>Arts Section</h2>
			<div className="scroll-container">
				<section>
					<ArtList artList={art} />;
				</section>
			</div>
		</section>
	);
}

export default ArtsSection;
