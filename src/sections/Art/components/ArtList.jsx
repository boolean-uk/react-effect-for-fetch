import React from 'react'
import ArtListItem from './ArtListItem'
import PropTypes from 'prop-types'

function ArtList(props) {
    return (
      <div className="scroll-container">
        <ul className="art-list">
        {props.data.map((artItem, i) => (
            <ArtListItem key={i} artItem={artItem}/>
        ))}
        </ul>
      </div>
    );
  }
  ArtList.propTypes = {
    data: PropTypes.array.isRequired,
}
  

export default ArtList