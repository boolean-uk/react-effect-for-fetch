import React from "react";
import ArtListItem from "./ArtListItem";

export default function ArtList({ data }) {
	return (
		<ul className="art-list">
			{data.map((e, i) => (
				<ArtListItem
					key={"art-list-item-" + i}
					data={e}
				/>
			))}
		</ul>
	);
}
