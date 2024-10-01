import { useEffect, useState } from 'react';
import ArtList from './components/ArtList.jsx';

function ArtsSection() {
	const apiURL = 'https://boolean-uk-api-server.fly.dev/art';
	const [artsData, setArtsData] = useState([]);

	useEffect(() => {
		const fetchData = async () => {
			const response = await fetch(apiURL);
			const jsonData = await response.json();

			setArtsData(jsonData);
		};

		fetchData();
	}, []);

	return (
		<>
			<section>
				<h2>Arts Section</h2>
				<div className="scroll-container">
					<ArtList artList={artsData} />
				</div>
			</section>
		</>
	);
}

export default ArtsSection;
