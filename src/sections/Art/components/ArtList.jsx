import PropTypes from 'prop-types';

import ArtListItem from "./ArtListItem";

export default function ArtList(props) {
    const { artList } = props;

    return (
        <ul className="art-list">
            {artList.map((artItem, i) => (
                <ArtListItem artItem={artItem} key={i} />
            ))}
        </ul>
    );
}

ArtList.propTypes = {
    artList: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number,
            title: PropTypes.string,
            artist: PropTypes.string,
            imageURL: PropTypes.string,
            publcationHistory: PropTypes.arrayOf(PropTypes.string)
        })
    )
}