import ArtListItem from "./ArtListItem"
import PublicationHistoryList from "./PublicationHistoryList"

function ArtList(props) {


    const {arts} = props ?? {};

  return (

    <section>
      <h2>Arts Section</h2>
      <div className="scroll-container">
      <ul className="art-list">
        {arts.map((art, index) => (
            <>
            <ArtListItem art={art} key={"A" + index} />
            <PublicationHistoryList art={art} key={"P" + index} />
            </>
        )
        
        )}
        </ul> 
      </div>
    </section>
    
  )
}

export default ArtList
