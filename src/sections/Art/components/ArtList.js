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


// return (
//   <ul className="art-list">
//     {artList.map((artWork) => (
//       <li key={artWork.id}>
//         <h3 className="art-title">{artWork.title}</h3>
//         <p className="artist-title">{artWork.artist_title || 'unknown' }</p>
//         < SubjectList list={artWork.subject_titles}/>
//       </li>
//     ))}
//   </ul>
// );
//     }

// export default Artlist
