function PublicationHistory({index, publication}){
    return (
        <ul key={index} className="art--publication-history">
        {` [${publication}] `}
      </ul>
    )
}

export default PublicationHistory
