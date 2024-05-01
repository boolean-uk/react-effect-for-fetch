// import PublicationHistoryList from "./PublicationHistoryList"

// export default function ArtListItem({ artPiece }) {
// 	return (
// 		<li>
// 			<div className='frame'>
// 				<img src={`https://boolean-api-server.fly.dev${artPiece.imageURL}`} />
// 			</div>
// 			<h3>{artPiece.title}</h3>
// 			<p>Artist:{artPiece.artist}</p>
// 			<h4>Publication History:</h4>
// 			<PublicationHistoryList artPiece={artPiece} />
// 		</li>
// 	)
// }

import PublicationHistoryList from "./PublicationHistoryList";

export default function ArtListItem({ artPiece }) {
  return (
    <li>
      <div className="frame">
        <img src={`https://boolean-api-server.fly.dev${artPiece.imageURL}`} />
      </div>
      <h3>{artPiece.title}</h3>
      <p>Artist: {artPiece.artist}</p>
      <PublicationHistoryList artPiece={artPiece} />
    </li>
  );
}