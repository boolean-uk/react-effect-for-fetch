import ArtListItemComponent from "./ArtListItem"

function ArtListComponent({ artListData, baseURL }) {
    return (
        <div className="scroll-container">
            <ul className="art-list">
                {artListData.map((artData, index) => (
                    <ArtListItemComponent key={index} info={artData} baseURL={baseURL} />
                ))}
            </ul>
        </div>
    )
}

export default ArtListComponent