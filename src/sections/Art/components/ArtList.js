import ArtListItem from "./ArtListItem"
function ArtList(props) {
    
    return (
        <ul class="art-list">
            {props.artList.map((item) => {
                return <ArtListItem item={item}/>
            })}
        </ul>
    )
}
export default ArtList