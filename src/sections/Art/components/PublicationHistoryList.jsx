
import PublicationHistoryItem from "./PublicationHistoryItem.jsx"
export default function PublicationstoryList(props){

    const publicationHistory= props.publicationHistory

    return(

        <ul className="publications">
            {publicationHistory?.map((publicationHistoryItem, index) => (
        <PublicationHistoryItem publicationHistoryItem = {publicationHistoryItem} key={index} />
      ))}
    </ul>

    );
}
