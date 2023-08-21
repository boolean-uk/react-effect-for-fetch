import { useEffect, useState } from "react";
import ArtList from "./components/ArtList";

function ArtsSection() {
    const [artData, setArtData] = useState([]);

    async function getData() {
        const response = await fetch(
            // I seem to be getting different results for the same url,
            // and some of the objects I get as a response have missing attributes.

            // "https://api.artic.edu/api/v1/artworks?page=3&limit=10"
            "https://api.artic.edu/api/v1/artworks"
        );
        const jsonResponse = await response.json();
        setArtData(jsonResponse.data);
    }

    useEffect(() => {
        getData();
    }, []);

    return (
        <section>
            <h2>Arts Section</h2>
            <p>
                <strong>NOTE:</strong>I seem to be getting different results for
                the same URL, and some of the objects I get as a response don't
                have an array of subjects, an artist; or the image link is
                broken.
            </p>
            <div className="scroll-container">
                <ArtList data={artData} />
            </div>
        </section>
    );
}

export default ArtsSection;
