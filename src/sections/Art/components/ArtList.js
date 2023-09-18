import React from "react";
import ArtlistItem from "./ArtListItem";

function Artlist(props) {
return (
  <div class="scroll-container">
    <ul class="art-list">
      {props.data.map((artItem, index) => (
        <ArtlistItem key={index} artItem={artItem} />
      ))}
    </ul>
    </div>
  )
}

export default Artlist