import { useEffect, useState } from "react"

function ArtList () {
      const url = "https://boolean-uk-api-server.fly.dev/art"
      const [artWorks, setArtworks] = useState([])
    
      useEffect(() => {
        const fetchArt = async () => {
            const response = await fetch (url);
            const jsonData = await response.json();
            setArtworks(jsonData);
        }
        fetchArt();
      }, [])

    return(
        <ul className="art-list">
            {artWorks.map((artWork, index) => (
                <li key={index}>
                    <div className="frame">
                        <img src={`https://boolean-uk-api-server.fly.dev${artWork.imageURL}`}/>
                    </div>
                    <h3>{artWork.title}</h3>
                    <p>Artist: {artWork.artist}</p>
                    <h4>Publication History:</h4>
                    <ul>
                        {artWork.publicationHistory.map((publication, index) => (
                            <li key={index}>{publication}</li>
                        ))}
                    </ul>
                </li>
            ))}
            
        </ul>
    )
}

export default ArtList