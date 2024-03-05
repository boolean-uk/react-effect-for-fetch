import React from 'react'
import ArtListItem from './ArtListItem'
import PropTypes from 'prop-types'

export default function ArtList(props) {
    return (
        <div className='scroll-container'>
            <ul className='art-list'>
                {props.data.map((artItem, i) => (
                    <ArtListItem key={i} artItem={artItem} />
                ))}
            </ul>
        </div>
    )
}
ArtList.PropTypes = {
    data: PropTypes.array.isRequired
}