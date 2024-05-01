// export default function PublicationHistoryList({ artPiece }) {

//     return (
// 			<ul>
//             {artPiece.publicationHistory.map((history, index) => {
//                 return <li key={index}>{history}</li>
//                 })}
// 			</ul>
// 		)
// }

export default function PublicationHistoryList({ artPiece }) {
  return (
    <>
      <h4>Publication History:</h4>
      <ul>
        {artPiece.publicationHistory.map((history, i) => {
          return <li key={i}>{history}</li>;
        })}
      </ul>
    </>
  );
}
