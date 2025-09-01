import ArtListItem from "./ArtListItem";

const ArtList = ({data, baseImgUrl}) => {

    return (
        <>
            <div className="scroll-container">
                <ul className="art-list" style ={{listStyleType: 'none'}}>
                {data.map((art, i) => (
                    <li key={i}>
                    <ArtListItem 
                        imageURL={baseImgUrl + art.imageURL} 
                        title={art.title} 
                        artist={art.artist}
                        pubHistory={art.publicationHistory}
                    />
                    </li>
                ))}
                </ul>
            </div>
        </>
    )
}

export default ArtList