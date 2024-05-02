import React from "react";

export default function ArtListItem({ data }) {
	return (
		<li>
			<div className="frame">
				<img
					src={`https://boolean-uk-api-server.fly.dev/${data.imageURL}`}
					alt={data.title}
				/>
			</div>
			<h3>{data.title}</h3>
			<p>Artist: {data.artist}</p>
			<h4>Publication History:</h4>
			<ul>
				{data.publicationHistory.map((e, i) => (
					<li key={`publication-history-${data.artist}-${e}`}>{e}</li>
				))}
			</ul>
		</li>
	);
}
