const PublicationHistoryList = ({ publications }) => {
	return (
		<>
			<h4>Publication History:</h4>
			<ul>
				{publications.map((publication, index) => {
					return <li key={index}>{publication}</li>;
				})}
			</ul>
		</>
	);
};

export default PublicationHistoryList;
