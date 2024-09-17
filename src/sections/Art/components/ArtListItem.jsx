import React from "react";

function ArtListItem({ art }) {
	const { title, artist, publicationHistory, imageURL } = art;
	console.log(art);
	return (
		<li>
			<div className="frame">
				<img src={`https://boolean-api-server.fly.dev/${imageURL}`} />
			</div>
			<h3>{title}</h3>
			<p>Artist: {artist}</p>
			<h4>Publication History:</h4>
			<ul>
				{publicationHistory.map((publication) => (
					<li>{publication}</li>
				))}
			</ul>
		</li>
	);
}

export default ArtListItem;
