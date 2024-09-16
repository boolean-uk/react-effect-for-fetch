import ArtListItem from "./ArtListItem.jsx"

const ArtList = ({list, baseURL}) => {
    
    return (
        <ul className="art-list">
          {list?.map((entry, index) => 
            <li key={index}>
                <ArtListItem entry={entry} baseURL={baseURL}/>
            </li>
          )}
        </ul>
    )
}

export default ArtList