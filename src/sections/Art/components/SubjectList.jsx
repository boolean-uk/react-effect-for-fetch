function SubjectList({ classification_title, date_display, medium_display, place_of_origin }) {
    return (
        <ul>
            <li>{classification_title}</li>
            <li>{date_display}</li>
            <li>{medium_display}</li>
            <li>{place_of_origin}</li>
        </ul>
    );
}

export default SubjectList;