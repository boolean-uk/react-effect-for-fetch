import ArtListItem from "./ArtListItem"

function ArtList({ data, baseURL }) {
    return (
        <div className="scroll-container">
            <ul className="art-list">
                {data.map((item, index) => (
                    <ArtListItem key={index} info={item} baseURL={baseURL} />
                ))}
            </ul>
        </div>
    )
}

export default ArtList
