import ArtListItem from "./ArtListItem"

/* eslint-disable react/jsx-key */
function ArtList (props) {
    const { artSection } = props

    return (
        <ul className="art-list">
        {artSection.map((art) => {
            return <ArtListItem  art={art}/>
          })}
  

        </ul>
    )
}

export default ArtList