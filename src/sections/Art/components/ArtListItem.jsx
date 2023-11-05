import SubjectList from "./SubjectList"

/* eslint-disable react/jsx-key */
function ArtListItem( {art}) {

        if (art.subject_titles && art.subject_titles.length > 0) {
            return (
              <li key={art.id}>
                <div className="frame">
                  <img src="https://img.freepik.com/free-photo/painting-mountain-lake-with-mountain-background_188544-9126.jpg?w=2000&t=st=1698949391~exp=1698949991~hmac=8bcba8d5c2ecd37cbefb22556f81a5e3aa95114b9b312f650b100c67d51b2546" alt="Mountain Lake" />
                </div>
                <h3>Hunted House</h3>
                <p>{`Artist: ${art.title}`}</p>
                <SubjectList  art={art}/>
                {/* <h4>Artistic Subjects</h4>
                <ul>
                  {art.subject_titles.map((subjectTitle) => {
                    return (
                      <><li>{subjectTitle}</li><SubjectList art={art} /></>
                    )
                  })}
                </ul> */}
              </li>
            )
           }
}

export default ArtListItem