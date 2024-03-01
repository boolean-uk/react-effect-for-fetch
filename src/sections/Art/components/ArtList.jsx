import React from 'react'
import ArtListItem from './ArtListItem'
import PropTypes from 'prop-types'

function ArtList({data}) {

  return (
            <ul className="art-list">
                {data.map((p, i) =>( 
                    <ArtListItem key ={i} data ={p} />
                ))}
            </ul>
  )
}

export default ArtList

ArtList.propTypes = {
    data: PropTypes.array,
  }