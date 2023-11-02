import React, { useState, useEffect } from 'react'
import ArtListItem from './ArtListItem'
import SubjectList from './SubjectList'

function ArtList() {
    const [artData, setArtData] = useState([])

    useEffect(() => {
        fetch('https://api.artic.edu/api/v1/artworks')
            .then(res => {
                return res.json()
            })
            .then(data => {
                setArtData(data.data)
                console.log(data)
            })
    }, [])

    return (

        <ul class="art-list">
            {artData.map((artItem) => {
                return (
                    <li>
                        <ArtListItem
                            title={artItem.title}
                            artist_title={artItem.artist_title}
                            image_id={artItem.image_id}
                        />
                        <ul>
                            <li>
                                {artData.map((artItem) => {
                                    return (
                                        <SubjectList
                                            classification_title={artItem.classification_title}
                                            date_display={artItem.date_display}
                                            medium_display={artItem.medium_display}
                                            place_of_origin={artItem.place_of_origin}
                                        />
                                    )
                                })}
                            </li>
                        </ul>
                    </li>
                )
            })}
        </ul>
    )
}

export default ArtList