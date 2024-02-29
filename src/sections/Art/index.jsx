import { useEffect, useState } from "react";
import ArtList from "./components/ArtList";

const ApiRequest = {
    method: "GET",
    headers: {
        "Content-Type": "application/json",
    },
};

function ArtsSection() {
    const [artData, setArtData] = useState([]);

    const getData = async () => {
        const response = await fetch(
            "https://boolean-api-server.fly.dev/art",
            ApiRequest
        );
        const data = await response.json();
        setArtData([...data]);
    };

    useEffect(() => {
        getData();
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
