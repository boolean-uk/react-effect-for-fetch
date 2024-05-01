// import ArtListItem from "./ArtListItem";

// export default function ArtList({artPiece}) {

//     return (
//         <ul className="art-list">
//             {artPiece.map((piece, index) => {
//                 return <ArtListItem key={index} piece={piece}/>
//             })}
//         </ul>
//     )
// }

import ArtListItem from "./ArtListItem";

export default function ArtList({ artPieces }) {
  return (
    <ul className="art-list">
      {artPieces.map((artPiece, index) => {
        return <ArtListItem key={index} artPiece={artPiece}/>;
      })}
    </ul>
  );
}