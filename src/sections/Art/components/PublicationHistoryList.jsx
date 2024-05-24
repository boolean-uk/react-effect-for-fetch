// Import the prop-types 
import {PropTypes} from 'prop-types'
//create function called publicationHistory

function PublicationHistoryList({pubHistoryList}) {
//return <ul> and <li> in the "frame" class    
    return (
        <ul>
        {pubHistoryList.map((item, index) =>
        <li key={index}>
            <p>{item}</p>
        </li>)}
        </ul>
    )
}

//check type in PHL component 
//define req prop of type of array for PHL comp

PublicationHistoryList.propTypes = {
    pubHistoryList: PropTypes.array
}

//export 

export default PublicationHistoryList