import React, { useEffect, useState } from "react";
import { getArt } from "../../../Helpers/APICommunication";
import ArtListItem from "./ArtListItem";

function ArtList() {
	const [art, setArt] = useState([]);
	const [isLoading, setIsLoading] = useState(true);

	useEffect(() => {
		getArt().then((data) => {
			setArt(data);
			setIsLoading(false);
		});
	}, []);

	return (
		<>
			<ul className="art-list">
				{art.map((item) => (
					<ArtListItem key={item.id} art={item} />
				))}
			</ul>
		</>
	);
}

export default ArtList;
