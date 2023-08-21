import { useEffect, useState } from "react";
import ArtList from "./components/ArtList";


// TODO: maybe the link to the api will be somehow provided in props
function ArtsSection(props) {
    const [artData, setArtData] = useState([]);

    async function getData() {
        const response = await fetch('https://api.artic.edu/api/v1/artworks');
        const jsonResponse = await response.json();
        setArtData(jsonResponse.data);
    }

    useEffect(() => {
        getData();
        console.log("useEffect ran with art data");
    }, []);

    return (
        <section>
            <h2>Arts Section</h2>
            <div className="scroll-container">
                <ArtList data={artData} />
            </div>
        </section>
    );
}

export default ArtsSection;
