import ArtListItem from './ArtListItem'
import PropTypes from 'prop-types'

function ArtList(props) {

    return (
        <ul className="art-list">
            {props.data.map((art, index) => (
                <ArtListItem key={index} art={art} />
            ))}      
        </ul>
    )
}

export default ArtList

ArtList.propTypes = {
    data: PropTypes.array.isRequired
}