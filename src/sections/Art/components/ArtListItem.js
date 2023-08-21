import React from "react";
import SubjectList from "./SubjectList"

function ArtlistItem(props) {
    const artItem = props.artItem

    return (
        <li key={artItem.id}>
        <div class="frame">
          <img
            src="https://www.artic.edu/iiif/2/4e074d70-4424-331b-ec89-0776a45d6825/full/843,/0/default.jpg"
          />
        </div>
              <h3 className="art-title">{artItem.title}</h3>
              <p className="artist-title">{artItem.artist_title || 'unknown' }</p>
              < SubjectList list={artItem.subject_titles} />
            </li>
      )
    }
export default ArtlistItem