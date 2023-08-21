import ArtListItem from "./ArtListItem"
import { useEffect } from "react"
function ArtList(props) {
    
    return (
        <ul class="art-list">
            {props.artList.map((item) => {
                console.log(item)
                return <ArtListItem item={item}/>
            })}
        </ul>
    )
}
export default ArtList