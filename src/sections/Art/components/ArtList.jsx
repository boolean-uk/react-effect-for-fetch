import ArtListItem from "./ArtListItem"
const ArtList = ({data}) => {

    return (
        <li>
            {data.map(item => <ArtListItem key={item.id} data={item}/>)}
            
        </li>
    )
}

export default ArtList