import PropTypes from "prop-types"
import ArtListItem from './ArtListItem'

export default function ArtList({artList}) {

    return (
        <ul className="art-list">
            {artList.map((artItem, i) => (
                <ArtListItem key={i} artItem={artItem}/>
            ))}
        </ul>
    )
}




ArtList.propTypes = {
    artList: PropTypes.array
}